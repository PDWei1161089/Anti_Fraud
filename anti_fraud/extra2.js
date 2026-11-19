/* 场景扩充包 2/4：解除防沉迷骗局 */
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

  var fcm = find("fcm");
  insertAfter(fcm, "【私聊】解锁服务费30元", {
    bot: "【对方】给你看看今天的成功案例（截图：好几个同学都解锁成功了）。对了，拉你的同学一起拼团解锁，每人便宜20元，三人成团我优先处理。",
    who: "『技术大佬』",
    options: [
      { text: "截图看起来都是真的，拉同学一起更划算。", score: 0, kind: "bad", feedback: "❌ 双重陷阱：截图是伪造的，『拉同学』则是让你从受害者变成帮凶——把骗局扩散给身边最信任你的人。" },
      { text: "截图可以P，拼团是拉人下水。不拉人，也不买了。", score: 20, kind: "good", feedback: "✅ 看穿了两个套路。真服务靠口碑自然传播，靠『拉人头优惠』扩散的，是传销和诈骗的共同特征。" },
      { text: "自己不参加，但把截图发同学群里问问。", score: 10, kind: "ok", feedback: "⚠️ 出发点好，但截图配上你的转发会显得可信，可能有同学上当。正确做法是在群里直接提醒『这是骗局』并举报。" },
      { text: "顺便保存这些『成功案例』截图，作为举报证据。", score: 20, kind: "good", feedback: "✅ 化被动为主动。伪造的成交截图正是举报时最有力的证据之一。" }
    ]
  });
  insertAfter(fcm, "【对方】人脸授权码需要实名激活", {
    bot: "【对方】最后一步人脸认证：打开摄像头，我用你妈妈的身份信息提交认证，你对着镜头眨眨眼、点点头就行。注意，过程中不能让别人看到你的屏幕。",
    who: "『技术大佬』",
    options: [
      { text: "照做，眨眼点头很简单。", score: 0, kind: "bad", feedback: "❌ 人脸认证通过=骗子拿到了用你妈妈身份操作支付的钥匙。配合动作和『不能让别人看到』，都是在完成盗刷前的最后授权。" },
      { text: "拒绝。人脸是生物密码，用妈妈身份做认证必须她本人知情同意。", score: 20, kind: "good", feedback: "✅ 生物信息意识很强。人脸、指纹一旦被冒用无法『改密码』，涉及家长身份的认证必须本人确认。" },
      { text: "问他能不能改用我自己的脸认证。", score: 10, kind: "ok", feedback: "⚠️ 问错了重点。不管用谁的脸，把人脸识别交给陌生人操作都是高危行为，直接终止才对。" },
      { text: "退出并告诉妈妈：有人想用你的身份做人脸认证。", score: 20, kind: "good", feedback: "✅ 处理得当。这类要求必须让家长知道——她还可以检查自己账号有没有异常授权。" }
    ]
  });
  addOpt("正合我意，私聊问问价格", { text: "去问老师和家长：防沉迷到底能不能解除。", score: 15, kind: "good", feedback: "✅ 向正确的人求证。答案会非常明确：不能。得到权威回答后，这类广告对你就完全失效了。" });
  addOpt("转。30元小事", { text: "停手，先去问问家长这笔钱算不算被骗。", score: 15, kind: "good", feedback: "✅ 及早求证。30元虽然小，但此刻止损+求证，后面的连环收费就与你无关了。" });
  addOpt("发给他，反正只是验证", { text: "让他先提供能证明身份的工作证件。", score: 10, kind: "ok", feedback: "⚠️ 他会发来伪造的工牌。验证一个连身份都要造假的人没有意义，直接拒绝并举报。" });
})();
