/* 场景扩充包 3/4：追星恐吓局 */
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

  var star = find("star");
  insertAfter(star, "【短视频抽奖】", {
    bot: "【群管理员私聊】偷偷告诉你：你在我们内定名单里，今天开奖你必中『偶像私人QQ』！不过内定名额要交58元『公证费』确认资格，交完坐等中奖，相当于白捡。",
    who: "『后援会管理员』",
    options: [
      { text: "58元换一个必中大奖，值，交！", score: 0, kind: "bad", feedback: "❌ 『必中』本身就是破绽：真抽奖不可能有内定，更不可能靠交钱锁定名额。这是抽奖骗局的前置收费，交了58还有88、128。" },
      { text: "识破：真抽奖没有内定名单，交钱保中=诈骗。不交。", score: 20, kind: "good", feedback: "✅ 逻辑干净。所有『交小钱锁定大奖励』的结构都是诈骗——正常活动里，奖励不需要你先付费激活。" },
      { text: "跟他谈：能不能中完奖再付公证费？", score: 10, kind: "ok", feedback: "⚠️ 他会痛快答应，因为『中奖后』他会以『公证费未付、奖励冻结』为由让你付得更多。和骗子谈判没有意义。" },
      { text: "向群主和平台举报这个私聊收费的管理员。", score: 15, kind: "good", feedback: "✅ 有行动力。不过要小心：『群主』很可能也是他自己的小号。更彻底的做法是退出该群并向平台举报整个群。" }
    ]
  });
  insertAfter(star, "【侦查员QQ语音】", {
    bot: "【侦查员QQ】配合调查需要先核实你的学生身份：把你的学校、年级班级、班主任姓名和课表发我，我们要和学校核对你的行踪，核对无误才能出具决定书。",
    who: "假『侦查员』",
    allowInput: true,
    inputHint: "他开始收集你的学校信息了，输入你的应对",
    options: [
      { text: "都发给他，早点配合完早点解脱。", score: 0, kind: "bad", feedback: "❌ 学校+班级+课表=骗子可以冒充老师、精准联系你或实施下一步恐吓。执法核实身份不会通过QQ收集课表，这是完全外行的『流程』。" },
      { text: "不给。真警察核实身份会通过学校和正规程序，不会向学生本人要课表。", score: 20, kind: "good", feedback: "✅ 清楚正规流程的边界。任何让你『配合』到交出个人信息和行踪的『调查』，都先把电话给家长。" },
      { text: "只发学校名，其他不给。", score: 10, kind: "ok", feedback: "⚠️ 学校名同样是有效情报。配合到这一步本身就已经错了，应该先停下来问家长老师。" },
      { text: "挂断，把聊天记录给爸妈看，一起判断要不要报警。", score: 20, kind: "good", feedback: "✅ 最稳的处理方式。是真是假，家长一通电话给学校就能验证，根本不需要你单方面配合。" }
    ]
  });
  addOpt("我是真爱粉", { text: "先查这个『后援会』账号是不是官方认证的。", score: 15, kind: "good", feedback: "✅ 会查认证信息说明你有核实习惯。不过认证也可能造假，最终还是要回到『官方渠道才有真活动』这条铁律。" });
  addOpt("慌了，我加个QQ怎么就犯法了", { text: "要求他出示警号，并打110核实有没有这个案件。", score: 15, kind: "good", feedback: "✅ 敢核实非常对！110完全可以帮你确认有没有这样的警员和案件——这一问骗子就露馅。" });
  addOpt("按他说的做，早点结束这件事", { text: "反问他：为什么调查不能通过学校和家长进行？", score: 10, kind: "ok", feedback: "⚠️ 他会编出一套『保密条例』。你不需要反驳他的伪逻辑，直接挂断比辩论更有效。" });
})();
