/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx438384c3c6c5d48b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'db8110dc00fa0a5e699d40b80192acb5',

  PROVINCE: '河北',
  CITY: '保定',

  USERS: [
    {
      // 想要发送的人的名字
      name: '柔柔',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXvEJ6nFpVCqVVPB0hhHl7ifVhc0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	I2RLx5ZW8B-ybkhywyMVGOzuSk1UbQpVtKW44nKHzrw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-31',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '俎静柔', year: '2002', date: '03-31',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李宇轩', year: '1998', date: '10-07',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '08-17',
        },
      ],
      // 我们在一起已经有1060天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-08-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oXvEJ6sJ3Zal-cCErZNd24goA3cQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXvEJ6sJ3Zal-cCErZNd24goA3cQ',
    }
  ],

}

module.exports = USER_CONFIG

