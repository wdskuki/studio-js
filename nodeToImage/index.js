const nodeHtmlToImage = require('node-html-to-image')
// const Handlebars = require("handlebars");


// const famousSolutionTemplate = require("./template/famousSolution.handlebars")
// const template = Handlebars.compile(famousSolutionTemplate);
nodeHtmlToImage({
  output: './image.png',
  html: `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        body {
          width: 500px;
          height: 400px;
        }
        .famousSolution {
          background-color: white;
          font-family: PingFangSC-Regular;
          width: 500px;
          height: 400px;
          padding: 40px;
          box-sizing: border-box;
          position: relative;
        }
  
        .title {
          color: #333;
          font-size: 54px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
        .subTitle {
          margin-top: 12px;
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 100px;
          display: block;
          margin-right: 8px;
        }
        .doctorName {
          color: #555;
          font-size: 24px;
        }
        .tagList {
          margin-top: 12px;
        }
        .tagItem {
          background-color: #eee;
          border-radius: 4px;
          padding: 10px 14px;
          color: #555;
          font-size: 20px;
          margin-right: 8px;
          display: inline-block;
        }
        .content {
          margin-top: 12px;
          color: #555;
          font-family: PingFangSC-Light;
          font-size: 20px;
          font-weight: 300;
          line-height: 36px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      </style>
    </head>
    <body>
      <div class="famousSolution">
        <div class="title">颈椎病</div>
        <div class="subTitle">
          <img class="avatar" src="https://image.studio.dajiazhongyi.com/upload/djjk-mini/resource/image/logo-djzy.png" />
          <span class="doctorName">北极光</span>
        </div>
        <div class="tagList">
          <div class="tagItem">手臂麻木</div>
          <div class="tagItem">手臂麻</div>
          <div class="tagItem">麻木</div>
          <div class="tagItem">1手臂麻木</div>
        </div>
        <div class="content">
          王某，48岁。初诊（1965年10月20日）：两肩疼，曾经针灸、拔罐、烤电等均无效。于1965年6月在中国人民解放军海军总医院确诊为颈
          王某，48岁。初诊（1965年10月20日）：两肩疼，曾经针灸、拔罐、烤电等均无效。于1965年6月在中国人民解放军海军总医院确诊为颈
          王某，48岁。初诊（1965年10月20日）：两肩疼，曾经针灸、拔罐、烤电等均无效。于1965年6月在中国人民解放军海军总医院确诊为颈
        </div>
      </div>
    </body>
  </html>
  
  `
}).then(() => console.log('The image was created successfully!'))