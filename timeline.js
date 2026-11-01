const months = [
  { label: "2026 年 11 月", short: "26/11" },
  { label: "2026 年 12 月", short: "26/12" },
  { label: "2027 年 1 月", short: "27/01" },
  { label: "2027 年 2 月", short: "27/02" },
  { label: "2027 年 3 月", short: "27/03" },
  { label: "2027 年 4 月", short: "27/04" },
  { label: "2027 年 5 月", short: "27/05" },
  { label: "2027 年 6 月", short: "27/06" },
  { label: "2027 年 7 月", short: "27/07" },
  { label: "2027 年 8 月", short: "27/08" },
  { label: "2027 年 9 月", short: "27/09" }
];

const projects = [
  {
    id: "P03",
    name: "气候与住房质量",
    subtitle: "观点 / 综述文章",
    purpose: "完成气候与住房质量的观点 / 综述文章，为后续实证研究建立框架。",
    data: "相关研究文献；具体资料和证据范围待定。",
    model: "文献综合与观点框架；具体方法待确定。",
    connections: "尚未记录可连接数据或合作机会的人脉。",
    milestones: [
      { month: 0, phase: "publish", label: "投稿 / 发布", detail: "11 月底完成稿件，目标投稿或网上发布。" }
    ]
  },
  {
    id: "P01",
    name: "Kenneth · CHQ 更新",
    subtitle: "气候、住房质量与房价",
    purpose: "在 P03 之后更新 CHQ 指标和稿件，研究气候、住房质量与房价的关系。",
    data: "现有 CHQ 数据及房价数据；数据口径、权限和可引荐的数据持有人待确认。",
    model: "更新住房质量指标，并分析气候、住房质量与房价的关系；具体识别方案待明确。",
    connections: "Kenneth 是已知项目联系。需确认已有数据、计算口径、使用权限，以及可引荐的数据持有人或合作者。",
    milestones: [
      { month: 1, phase: "data", label: "CHQ 更新", detail: "启动 CHQ 数据更新与计算。" },
      { month: 2, phase: "data", label: "计算完成", detail: "1 月底前完成 CHQ 数据计算。" },
      { month: 3, phase: "draft", label: "更新稿件", detail: "整理 CHQ 更新结果并推进稿件。" },
      { month: 4, phase: "draft", label: "完稿", detail: "3 月底前完成稿件更新。" },
      { month: 5, phase: "review", label: "修改", detail: "内部审阅和修改。" },
      { month: 6, phase: "review", label: "投稿准备", detail: "完成投稿前准备。" },
      { month: 7, phase: "publish", label: "投稿", detail: "6 月目标投稿。" }
    ]
  },
  {
    id: "P02",
    name: "住房质量与儿童结果",
    subtitle: "全英国测量 · UKHS",
    purpose: "构建全英国住房质量测量，并研究住房质量与儿童长期结果的关系。",
    data: "P01 更新版 CHQ、Airbnb、街景及其他多模态数据；结合 UKHS 儿童与家庭结果。需核对覆盖、使用权限和地理时间匹配。",
    model: "建立可解释的住房质量指标，评估覆盖率、稳定性与地区偏差；结果模型和因果识别方案依实际数据确定。",
    connections: "需要通过合作关系落实多模态数据来源、UKHS 获取权限及地理匹配支持；具体联系人待补充。",
    milestones: [
      { month: 2, phase: "data", label: "扩展指标", detail: "以 CHQ 更新版为基础扩展住房质量指标。" },
      { month: 3, phase: "data", label: "UK 测量", detail: "2 月底前完成全英国住房质量测量。" },
      { month: 4, phase: "data", label: "UKHS 匹配", detail: "整理 UKHS 字段并开展数据匹配。" },
      { month: 5, phase: "data", label: "UKHS", detail: "4 月底前形成可分析的 UKHS 数据。" },
      { month: 6, phase: "draft", label: "分析 / 写稿", detail: "分析测量结果及儿童长期结果。" },
      { month: 7, phase: "draft", label: "初稿", detail: "6 月底前完成初稿。" },
      { month: 8, phase: "review", label: "修改", detail: "修改和完善稿件。" },
      { month: 9, phase: "review", label: "投稿准备", detail: "完成投稿前准备。" },
      { month: 10, phase: "publish", label: "投稿", detail: "9 月目标投稿。" }
    ]
  },
  {
    id: "P04",
    name: "高层景观与房价",
    subtitle: "研究范围待细化",
    purpose: "研究高层建筑景观对房价的影响。具体研究问题待细化。",
    data: "房价、楼层高度与景观数据；数据来源、空间范围和测量方式待确认。",
    model: "待研究问题与数据明确后设计。",
    connections: "尚未记录数据持有人或可引荐的合作伙伴。",
    milestones: []
  },
  {
    id: "P05",
    name: "数据霸权",
    subtitle: "研究问题待确定",
    purpose: "研究主题已提出，具体问题和研究范围待确定。",
    data: "根据研究问题再定义所需数据。",
    model: "待研究问题明确后设计。",
    connections: "尚未记录相关联系人或合作渠道。",
    milestones: []
  }
];

const board = document.querySelector("#timeline-board");
const detail = document.querySelector("#project-detail");

function renderBoard() {
  const monthHead = months.map((month) => `<span>${month.short}</span>`).join("");
  const lanes = projects.map((project, projectIndex) => {
    const milestones = new Map(project.milestones.map((item) => [item.month, item]));
    const cells = months.map((month, monthIndex) => {
      const item = milestones.get(monthIndex);
      if (!item) return '<span class="month-cell-empty" aria-hidden="true"></span>';
      const ariaLabel = `${project.id}，${month.label}，${item.detail}`;
      return `<button class="month-cell phase-${item.phase}" type="button" data-project="${project.id}" data-month="${monthIndex}" aria-label="${ariaLabel}" aria-pressed="false" title="${ariaLabel}"><span>${item.label}</span></button>`;
    }).join("");
    const pressed = projectIndex === 0 ? "true" : "false";
    const selected = projectIndex === 0 ? " is-selected" : "";
    const status = project.milestones.length ? "已排期" : "待排期";
    return `<div class="timeline-lane">
      <button class="project-select${selected}" type="button" data-project="${project.id}" aria-pressed="${pressed}">
        <span class="project-id">${project.id}</span>
        <span class="project-label"><strong>${project.name}</strong><small>${project.subtitle}</small></span>
        <span class="project-status">${status}</span>
      </button>
      <div class="lane-months">${cells}</div>
    </div>`;
  }).join("");

  board.innerHTML = `<div class="timeline-head"><strong>研究项目 / 月份</strong><div class="timeline-months">${monthHead}</div></div>${lanes}`;
}

function renderDetail(projectId, monthIndex = null) {
  const project = projects.find((item) => item.id === projectId);
  const milestone = monthIndex === null ? null : project.milestones.find((item) => item.month === monthIndex);
  const timing = milestone
    ? `${months[monthIndex].label} · ${milestone.detail}`
    : project.milestones.length
      ? `目标投稿：${months[project.milestones.at(-1).month].label}`
      : "时间节点待定";

  detail.innerHTML = `<div class="detail-heading"><span class="detail-id">${project.id}</span><div><h3>${project.name}</h3><p class="detail-timing">${timing}</p></div></div>
    <dl class="detail-grid">
      <div><dt>研究目的</dt><dd>${project.purpose}</dd></div>
      <div><dt>数据</dt><dd>${project.data}</dd></div>
      <div><dt>模型</dt><dd>${project.model}</dd></div>
      <div><dt>合作关系</dt><dd>${project.connections}</dd></div>
    </dl>`;
}

board.addEventListener("click", (event) => {
  const control = event.target.closest("[data-project]");
  if (!control) return;
  const projectId = control.dataset.project;
  board.querySelectorAll(".project-select").forEach((button) => {
    const selected = button.dataset.project === projectId;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  board.querySelectorAll(".month-cell").forEach((button) => {
    const selected = button === control;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderDetail(projectId, control.dataset.month === undefined ? null : Number(control.dataset.month));
});

renderBoard();
