/* 场景扩充包 1/4：免费皮肤连环局 */
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

  var skin = find("skin");
  insertAfter(skin, "【游戏公屏私信】", {
    bot: "【对方】为了让你放心，我先发给你看：这是我们的《官方授权证明书》和我的工作证，编号都能查，图片上盖着红章。够正规了吧？现在可以放心领取了。",
    who: "对方",
    options: [
      { text: "有图有章有编号，应该是官方的，放心了。", score: 0, kind: "bad", feedback: "❌ 图片是最容易伪造的东西。PS一张『授权书』对骗子只要几分钟，红章和编号都是编的——真授权在游戏官网公告里能查到，而不是对方私发给你。" },
      { text: "不上当：图片可以随意伪造，真授权去官网公告查，查不到就是假的。", score: 20, kind: "good", feedback: "✅ 核实意识满分。判断『官方身份』的唯一标准是官方渠道的公开信息，对方主动塞给你的『证明』都没有证明力。" },
      { text: "让他开视频出示工作证原件。", score: 10, kind: "ok", feedback: "⚠️ 视频里的『工作证』同样可以是打印纸片或特效贴纸。与其验证他，不如不验证——真官方根本不需要你加私人QQ。" },
      { text: "反手把伪造文书截图保存，举报这个账号。", score: 20, kind: "good", feedback: "✅ 又快又专业。伪造官方文书本身就是违法证据，保存+举报，让平台处理这个号。" }
    ]
  });
  insertAfter(skin, "【对方】想解决问题很简单", {
    bot: "【对方】在开始操作之前，需要先登记领取资格：把你的姓名、就读学校、身份证号码和家长手机号填进表格发我，系统要核对你是真实学生才发放皮肤。",
    who: "对方",
    allowInput: true,
    inputHint: "他开始收集你的个人信息了，输入你的应对",
    options: [
      { text: "填吧，都是基本信息，又不用花钱。", score: 0, kind: "bad", feedback: "❌ 个人信息本身就是『货』。姓名+身份证号+手机号被打包倒卖后，你全家都会接到精准诈骗和骚扰电话——有学生照填之后，家庭长期遭受诈骗与推销骚扰。" },
      { text: "不给。领皮肤根本不需要身份证号，这是在收集个人信息。", score: 20, kind: "good", feedback: "✅ 抓住了要点：要的是皮肤，为什么查户口？信息收集往往比要钱出现得更早，识别得越早越安全。" },
      { text: "只填姓名和学校，身份证号打个码。", score: 10, kind: "ok", feedback: "⚠️ 有保留意识，但姓名+学校+家长手机号的组合已足够骗子编出精准剧本，比如冒充老师联系你家长。一份都不该给。" },
      { text: "把表格发给爸爸妈妈看，让他们判断要不要填。", score: 15, kind: "good", feedback: "✅ 拿不准的事找大人把关，永远是对的。大人看到『要身份证号』基本一眼就会拒绝。" }
    ]
  });
  addOpt("白送的皮肤不要白不要", { text: "先去游戏官方公告查一下有没有这个活动。", score: 20, kind: "good", feedback: "✅ 主动核实官方信息，这是最规范的应对。查不到，答案就自动出来了。" });
  addOpt("偷偷拿来妈妈的手机", { text: "假装答应，先稳住他，同时想办法联系妈妈。", score: 15, kind: "good", feedback: "✅ 稳住对方、暗中求救，处理得很成熟。注意别让对方察觉，找机会直接挂断更安全。" });
  addOpt("买卡发卡密", { text: "先问他的收款账号，记下来交给警察。", score: 15, kind: "good", feedback: "✅ 有取证意识！收款账号是警方追查和止付的关键信息。拿到后立刻告诉家长并报警。" });
})();
