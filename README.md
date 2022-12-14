# AWS-Rekognition-server
<h2>BACKEND PROJECT AMAZON REKOGNITION:</h2>
<h3>THÀNH VIÊN</h3>
<p>- Nguyễn Minh Toàn 20110577</p>
<p>- Trần Thế Kiệt 20110055</p>
<p>- Huỳnh Trung Nhân 20110532</p>
<h3>HƯỚNG DẪN SỬ DỤNG</h3>
<h4>Samples...</h4>
<p>{PORT}: 5000</p>
<p>{URL}: localhost</p>
<p>scripts: npm start</p>
<h4>Lấy AWS CLI...</h4>
<p>Truy cập: https://awsacademy.instructure.com/courses/5744/modules/items/624071</p>
<p>Nhấn Start Lab</p>
<p>Nhấn Show AWS CLI</p>
<p>Lấy 3 thông số ở CLI cho vào config trong aws.config.update(...)</p>
<h4>Test...</h4>
<table>
  <thead>
    <tr>
      <td>STT</td>
      <td>Route</td>
      <td>Mô tả</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>http://{URL}:{PORT}/</td>
      <td>Test thử xem BE có hoạt động</td>
    </tr>
  </tbody>
</table>
<h4>API Routes...</h4>
<table>
  <thead>
    <tr>
      <td>STT</td>
      <td>Route</td>
      <td>Mô tả</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>http://{URL}:{PORT}/api/setCLI</td>
      <td>Port để kết nối AWS CLI</td>
    </tr>
    <tr>
      <td>2</td>
      <td>http://{URL}:{PORT}/api/upload</td>
      <td>Tạo route cho upload ảnh lên s3</td>
    </tr>
    <tr>
      <td>3</td>
      <td>http://{URL}:{PORT}/api/uploadTarget</td>
      <td>Tạo route cho upload target ảnh lên s3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>http://{URL}:{PORT}/api/labels</td>
      <td>Route cho nhận diện vật thể</td>
    </tr>
    <tr>
      <td>5</td>
      <td>http://{URL}:{PORT}/api/moderation</td>
      <td>Route nhận diện kiểm duyệt hình ảnh</td>
    </tr>
    <tr>
      <td>6</td>
      <td>http://{URL}:{PORT}/api/facial</td>
      <td>Route cho phân tích khuôn mặt</td>
    </tr>
    <tr>
      <td>7</td>
      <td>http://{URL}:{PORT}/api/celeb</td>
      <td>Route nhận diện người nổi tiếng</td>
    </tr>
    <tr>
      <td>8</td>
      <td>http://{URL}:{PORT}/api/comparasion</td>
      <td>Route kiểm tra 2 hình ảnh có cùng chung khuôn mặt hay không</td>
    </tr>
    <tr>
      <td>9</td>
      <td>http://{URL}:{PORT}/api/text</td>
      <td>Route nhận diện chữ viết trong ảnh</td>
    </tr>
    <tr>
      <td>10</td>
      <td>http://{URL}:{PORT}/api/collection</td>
      <td>Tạo collection ID trong aws rekognition</td>
    </tr>
    <tr>
      <td>11</td>
      <td>http://{URL}:{PORT}/api/listCollection</td>
      <td>Lấy tất cả các collection ID</td>
    </tr>
    <tr>
      <td>12</td>
      <td>http://{URL}:{PORT}/api/deleteCollection</td>
      <td>Xóa collection ID</td>
    </tr>
    <tr>
      <td>13</td>
      <td>http://{URL}:{PORT}/api/addIndex</td>
      <td>Thêm ảnh indexID</td>
    </tr>
    <tr>
      <td>14</td>
      <td>http://{URL}:{PORT}/api/listingFace</td>
      <td>Listing hết các ảnh lưu trong collection</td>
    </tr>
    <tr>
      <td>15</td>
      <td>http://{URL}:{PORT}/api/deleteFace</td>
      <td>Xóa ảnh index</td>
    </tr>
    <tr>
      <td>16</td>
      <td>http://{URL}:{PORT}/api/searching</td>
      <td>Tìm kiếm ảnh tương đồng</td>
    </tr>
  </tbody>
</table>
<h4>Credits...</h4>
<p>1. Cách gắn API: https://console.aws.amazon.com/rekognition/home?region=us-east-1#/</p>
<p>2. Video tham khảo: https://www.youtube.com/watch?v=UsNJsNEiSpo&t=22s và https://www.youtube.com/watch?v=9Ka1fcn74Hg</p>
