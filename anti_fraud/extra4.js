/* 场景扩充包 4/5：刷单返利局 */
(function () {
  function find(id) {
    for (var i = 0; i < SCENARIOS.length; i++) if (SCENARIOS[i].id === id) return SCENARIOS[i];
  }
  function insertAfter(sc, botPrefix, step) {
    for (var i = 0; i < sc.steps.length; i++) {
      if (sc.steps[i].bot.indexOf(botPrefix) === 0) { sc.steps.splice(i + 1, 0, step); return; }
    }
  }
  function addOpt(optTextPrefix, opt) {
    SCENARIOS.forEach(function (sc) {
      sc.steps.forEach(function (st) {
        st.options.forEach(function (o) {
          if (o.text.indexOf(optTextPrefix) === 0) st.options.push(opt);
        });
      });
    });
  }

  var shua = find("shua");
  insertAfter(shua, "【QQ群消息】", {
    bot: "【导师】为了统一接任务，先下载我们的『任务助手』App（发来链接），用你的QQ号登录。正式任务都在App里发布，佣金自动结算。",
    who: "『兼职导师』",
    allowInput: true,
    inputHint: "要下载来路不明的App了，输入你的应对",
    options: [
      { text: "下载，不然接不了任务。", score: 0, kind: "bad", feedback: "❌ 来路不明的App=对方在你手机上装的『眼睛』：短信验证码、通讯录、相册都可能被读取。" },
      { text: "不装。正规兼职用正规平台，私下发链接装App的一律当病毒处理。", score: 20, kind: "good", feedback: "✅ 防线正确。非官方渠道的安装包无法审查权限，装上后短信验证码可能被直接读走。" },
      { text: "先看看这个App要哪些权限再决定。", score: 10, kind: "ok", feedback: "⚠️ 它必然会要短信、通讯录权限，然后呢？看权限解决不了『App本身是黑的』。直接不装。" },
      { text: "把链接发给家长或老师，让他们判断并举报。", score: 15, kind: "good", feedback: "✅ 交给大人+举报，处置完整。" }
    ]
  });
  insertAfter(shua, "【导师】欢迎新人", {
    bot: "【导师】新人专区完成！现在解锁『垫付单』：你先垫200元拍下商品，商家秒返260元（本金+30%佣金），垫得越多佣金比例越高。",
    who: "『兼职导师』",
    options: [
      { text: "垫200返260，一笔就赚60，做！", score: 0, kind: "bad", feedback: "❌ 『垫付』两个字一出现，兼职就已经变成骗局了——正规任务都不需要你先掏钱。之前的小额返现会到账，就是为了等你垫大的。" },
      { text: "不垫。要我先掏钱的『兼职』，等于给老板发工资，假的。", score: 20, kind: "good", feedback: "✅ 一句话点破本质：天下没有让打工人先给老板转账的工作。垫付单是诈骗的标志性分水岭。" },
      { text: "先垫最小金额100试试。", score: 0, kind: "bad", feedback: "❌ 100元同样是打水漂，而且你一旦垫付，就进入了收割剧本，后面只有『继续垫』和『拉黑』两个结局。" },
      { text: "退出任务群，把聊天记录举报给平台。", score: 20, kind: "good", feedback: "✅ 果断。垫付单出现的那一刻就值得举报——这个群背后是一整套针对学生的诈骗流水线。" }
    ]
  });
  addOpt("点赞就能赚钱", { text: "问群里做过的人要返现到账记录看看。", score: 10, kind: "ok", feedback: "⚠️ 他会发来伪造的到账截图。这类记录PS成本为零，看十张也不如直接远离。" });
  addOpt("前面的钱都在里面", { text: "问他能不能走正规平台的担保交易。", score: 10, kind: "ok", feedback: "⚠️ 他会发来另一个『担保平台』链接——同一个团伙的第二个钓鱼站。你的每个疑问，他们都有现成的骗局答案。" });
  addOpt("这个稳，账号租出去", { text: "问清楚出租期间账号出事谁负责。", score: 10, kind: "ok", feedback: "⚠️ 他会口头承诺『包赔』——没有合同、没有实名，出事时连投诉对象都找不到。这个问题本身就说明这事不该做。" });
})();
