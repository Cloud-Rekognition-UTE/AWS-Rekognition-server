const express = require('express')
const AWS = require('aws-sdk')
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
const multer = require('multer')
const cors = require('cors')
// const {uploadFile} = require('./s3')
const app = express()
const awsCLIS3 = {}
app.use(cors())
app.use(express.json())
// config aws s3 
const s3 = new S3({
	region:awsCLIS3.region,
	accessKeyId:awsCLIS3.accessKeyId,
	secretAccessKey:awsCLIS3.secretAccessKey,
	sessionToken:awsCLIS3.sessionToken
})
// upload anh len aws s3
function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)
    const uploadParams={
        Bucket:'rekognitionimagesss',
        Body:fileStream,
        Key:file.originalname
    }
    return s3.upload(uploadParams).promise()
}
// tro toi folder img
const upload = multer({dest:'img/'})
// test port xem da connect postman
app.get('/api',(req,res)=>{

    res.status(200).send('Connect!!!!!')
})
// port de ket noi aws CLI
app.post('/api/setCLI', (req,res)=>{
	AWS.config.credentials.accessKeyId = req.body.accessKeyId
	AWS.config.credentials.secretAccessKey = req.body.secretAccessKey
	AWS.config.credentials.sessionToken = req.body.sessionToken
	AWS.config.region = 'us-east-1'
	
	awsCLIS3.accessKeyId = req.body.accessKeyId
	awsCLIS3.secretAccessKey = req.body.secretAccessKey
	awsCLIS3.sessionToken = req.body.sessionToken
	awsCLIS3.region = 'us-east-1'


	AWS.config.update({
		accessKeyId:req.body.accessKeyId,
		secretAccessKey:req.body.secretAccessKey,
		sessionToken:req.body.sessionToken,
		region:'us-east-1',
		// signatureVersion: 'v4'
	})
	new AWS.S3({
		accessKeyId:req.body.accessKeyId,
		secretAccessKey:req.body.secretAccessKey,
		sessionToken:req.body.sessionToken,
		region:'us-east-1',
	})
	console.log(AWS.config);
	res.send('Ket noi thanh cong')
})

// Tạo route cho upload ảnh lên s3
app.post('/api/upload', upload.single('image'), async(req, res)=> {
    const file = req.file
    console.log(file);
    const result = await uploadFile(file)
    console.log(result);
    const desc = req.body.description
    res.send("đã gởi ảnh thành công")
 })

// Tạo route cho upload target ảnh lên s3
 app.post('/api/uploadTarget', upload.single('imagetarget'), async(req, res)=> {
	const file = req.file
	console.log(file);
	const result = await uploadFile(file)
	console.log(result);
	const desc = req.body.description
	res.send("đã gởi ảnh target thành công")
 })

//kêt nối với aws rekognition
 const rekogniton = new AWS.Rekognition({ region: 'us-east-1' })
 //route cho nhận diện vật thể
 app.post('/api/labels', (req,res)=>{
	 var param = {
		 Image: {
			 S3Object: {
				 Bucket: 'rekognitionimagess',
				 Name: req.body.images,
			 },
		 }
	 }
	 // console.log(req.body.name);
	 rekogniton.detectLabels(param, function (err, data) {
		 if (err) console.log(err, err.stack);
		 else res.send({ data: data });
		 console.log(data);
	 });
 })
 //route nhận diện kiểm duyệt hình ảnh
 app.post('/api/moderation',(req,res)=>{
	 var param = {
		 Image: {
			 S3Object: {
				 Bucket: 'rekognitionimagess',
				 Name: req.body.images,
			 },
		 }
	 }
	 rekogniton.detectModerationLabels(param,function(err,data){
		 if(err) console.log(err, err.stack);
		 else res.send({data:data})
		 console.log(data);
	 })
 })
 //route cho phân tích khuôn mặt
 app.post("/api/facial", (req,res)=>{
	 var param = {
		 Image: {
			 S3Object: {
				 Bucket: 'rekognitionimagess',
				 Name: req.body.images,
			 },
		 },
		 Attributes: ['ALL'],
	 }
	 rekogniton.detectFaces(param,function(err,data){
		 if(err) console.log(err, err.stack);
		 else res.send({data:data})
		 console.log(data);
	 })
 })

 // route nhận diện người nổi tiếng
 app.post('/api/celeb', (req,res)=>{
    var param = {
        Image: {
			S3Object: {
				Bucket: 'rekognitionimagessss',
				Name: req.body.images,
			},
		},
    }
    // console.log(req.body.name);
	rekogniton.recognizeCelebrities(param, function (err, data) {
		if (err) console.log(err, err.stack);
		else res.send({ data: data });
		console.log(data);
	});
})

// route kiểm tra 2 hình ảnh có cùng chung khuôn mặt hay không
app.post('/api/comparasion', (req,res)=>{
    var param = {
		TargetImage: {
			S3Object: {
				Bucket: "rekognitionimagessss",
				Name: req.body.imagesTarget,
			}
		},
		SourceImage: {
			S3Object: {
				Bucket: "rekognitionimagessss",
				Name: req.body.images
			}
		},
		SimilarityThreshold: 0
    }
    // console.log(req.body.name);
	rekogniton.compareFaces(param, function (err, data) {
		if (err) console.log(err, err.stack);
		else res.send({ data: data });
		console.log(data);
	});
})

// route nhận diện chữ viết trong ảnh
app.post("/api/text",(req,res)=>{
	var param = {
        Image: {
			S3Object: {
				Bucket: 'rekognitionimagessss',
				Name: req.body.images,
			},
		},
    }
	rekogniton.detectText(param, function (err, data) {
		if (err) console.log(err, err.stack);
		else res.send({ data: data });
		console.log(data);
	});
})

// kiểm tra xem app có chạy đúng port 5000 hay không
app.listen(5000,()=>{
    console.log('server listen on port 5000');
})
