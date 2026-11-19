/* 场景扩充包 6/6：账号交易局 —— 追加第 4 选项 */
(function () {
  function addOpt(optTextPrefix, opt) {
    SCENARIOS.forEach(function (sc) {
      sc.steps.forEach(function (st) {
        st.options.forEach(function (o) {
          if (o.text.indexOf(optTextPrefix) === 0) st.options.push(opt);
        });
      });
    });
  }
  addOpt("400太香了", { text: "查一下这个账号在官方交易平台的挂牌价。", score: 20, kind: "good", feedback: "✅ 交叉核实价格，是交易前的标准动作。官方渠道查无此号或价格对不上，骗局当场穿帮。" });
  addOpt("解冻金会退的", { text: "让他走游戏官方的仲裁流程处理卡单。", score: 15, kind: "good", feedback: "✅ 把争议交给官方仲裁，是对付一切『私了话术』的终极答案——骗子绝不敢进官方流程。" });
  addOpt("骗爸妈说学校收费", { text: "反问他：正规平台为什么需要我骗家长？", score: 15, kind: "good", feedback: "✅ 用他的荒谬反将一军。需要你对家长撒谎的要求，100%是在害你——然后照旧：保存、举报、坦白。" });
})();
