/* 场景扩充包 5/6：账号交易局 —— 新增回合 */
(function () {
  function find(id) {
    for (var i = 0; i < SCENARIOS.length; i++) if (SCENARIOS[i].id === id) return SCENARIOS[i];
  }
  function insertAfter(sc, botPrefix, step) {
    for (var i = 0; i < sc.steps.length; i++) {
      if (sc.steps[i].bot.indexOf(botPrefix) === 0) { sc.steps.splice(i + 1, 0, step); return; }
    }
  }

  var trade = find("trade");
  insertAfter(trade, "【对方】链接发你了", {
    bot: "【对方】提醒一下：平台今晚12点活动结束，现在下单立减50，明天恢复原价。已经好几个人在拍了，这个价位就最后一份，手慢无。",
    who: "『卖家』",
    options: [
      { text: "立减50还限时，赶紧拍，别被抢了。", score: 0, kind: "bad", feedback: "❌ 『限时、限量、手慢无』是给思考按暂停键的经典手法——你一着急，就不会再问『这个平台靠谱吗』。真优惠不会催你放弃核实。" },
      { text: "越催越可疑。便宜50元换我放弃核实，不划算。", score: 20, kind: "good", feedback: "✅ 冷静得很。制造紧迫感正是为了跳过你的核实环节，这一招在所有骗局里通用。" },
      { text: "让他保证这不是催单套路，再考虑。", score: 10, kind: "ok", feedback: "⚠️ 他当然保证。催单是手段，你需要做的不是戳穿他，而是退出这个不该发生的交易。" },
      { text: "不理他，把对话截图给爸爸看，问这种交易能不能信。", score: 15, kind: "good", feedback: "✅ 找大人核实，永远是最省钱的选项。" }
    ]
  });
  insertAfter(trade, "【对方】解冻金到账了", {
    bot: "【平台客服】最后一步验证：为确认账号绑定人是你本人，把刚发到手机上的6位短信验证码填进来。温馨提示：验证码仅用于本次身份校验，不会产生任何费用。",
    who: "『平台客服』",
    options: [
      { text: "填了，反正他们说不会扣费。", score: 0, kind: "bad", feedback: "❌ 『不会产生费用』是骗子最爱的一句免责台词——验证码能绑定的不只是扣款，还有银行卡的快捷支付。填进去，卡里的钱就有了被划走的通道。" },
      { text: "不给。验证码给出去，等于把支付授权交给陌生人。", score: 20, kind: "good", feedback: "✅ 守住了最关键的一道门。任何索要短信验证码的『客服』都是骗子，这句话可以应对所有场景。" },
      { text: "先问他能不能用邮箱验证代替。", score: 10, kind: "ok", feedback: "⚠️ 别陪他走流程。验证码背后是要绑定你的支付渠道，换一种验证方式一样危险，直接终止。" },
      { text: "把这条短信拿给妈妈看，让她决定怎么办。", score: 20, kind: "good", feedback: "✅ 正确。短信是发到你妈妈手机上的，处理权本来就在她手里——这也是止损的最后机会。" }
    ]
  });
})();
