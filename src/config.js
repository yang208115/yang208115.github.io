export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m yang208115', //英文标题
    title: '一个追梦在前端路上的小白', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫罗运发，是一名在读的初三学生。', // 幸会
    qiuzhi: 'python开发', // 求职意向
    guanyuwo: '掌握了python、java等等' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: 'UI设计',
    msg: ['PS切图、界面排版']
  },{
    icon: 'icon-diannao', // 图标
    title: '网页制作', // 标题
    msg: ['响应式页面', 'css、scss动画效果',] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '前端功能',
    msg: ['JS完成常见的交互功能', '用AJAX读取后台数据且渲染']
  },  {
    icon: 'icon-shouji',
    title: '框架',
    msg: ['vue框架','UI框架、express框架、mysql',]
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2021/9——至今', // 时间
      desc: { // 经历
        title: '广东省广州市增城区永宁街永新中学',
        list: ['无']
      }
    },{
      date: '2015/9——2021/9', // 时间
      desc: { // 经历
        title: '广东省广州市增城区永宁街镇泰小学',
        list: ['无']
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'java',
      text: '了解'
    }, {
      title: 'python',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'python',
      value: '90%'
    }, {
      title: 'java',
      value: '70%'
    },  {
      title: 'sql',
      value: '40%'
    }]
  },
  // page5部分
  page5: [
    {
    title: '聊天室',
    content: '无',
    image: 'box1.png',
    href: 'https://github.com/luoyunfa-250/liaotianshi'}
  ],
  // page6部分
  page6: {
    github: 'https://github.com/luoyunfa-250',
    bili: 'https://space.bilibili.com/409756959',
    email: 'Mailto:a3305587173@outlook.com?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='http://luoyunfa-250.github.io/src/img/weix.jpg' alt='加载失败'>",
    qq: "<img style='width:120px' src='http://luoyunfa-250.github.io/src/img/qq.jpg' alt='加载失败'>"
  }
}
