// 云函数入口文件
const cloud = require('../wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  try{
    let tmplId='-QIGTLDw9mb4nGhMv22A8Ziik0QR0y2zUvmlWG8Yrds'
    const result = await cloud.openapi.subscribeMessage.send({
      touser: openid, 
    page:"pages/map/map",
    data:{
      car_number1:{
        value:"京A888"
      },
      thing2:{
        value:"简阳市简阳区简阳路4号"
      },
      time3:{
        value:"2020年10月10日 14:00"
      },
      thing4:{
        value:"你已影响他人通行，请前往挪车"
      }
    },
    templateId: temlId,
  })
  console.log(result)
  return result
  }catch(err){
    console.log(err)
    return err
  }
}

 