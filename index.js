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

// kiểm tra xem app có chạy đúng port 5000 hay không
app.listen(5000,()=>{
    console.log('server listen on port 5000');
})