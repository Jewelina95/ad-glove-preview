/* ============================================================
   i18n + brand bar — shared across index/patient/doctor
   Toggle button:  中 / EN
   Logo:           assets/i-thread-logo.svg
   ============================================================ */

(function () {
  const STRINGS = {
    /* --------- shared brand bar / nav --------- */
    "brand.glove":          { zh: "AD 多智能体手套", en: "AD Multi-Agent Glove" },
    "brand.tagline":        { zh: "I-THREAD · 多模态可穿戴监测", en: "I-THREAD · Multimodal Wearable Monitoring" },
    "nav.home":             { zh: "首页",        en: "Home" },
    "nav.patient":          { zh: "患者端",      en: "Patient" },
    "nav.doctor":           { zh: "医生端",      en: "Clinician" },
    "nav.realtime":         { zh: "实时（本机）", en: "Live (local)" },
    "nav.realtime.tip":     { zh: "实时面板需本机跑 backend，回首页查看说明", en: "Realtime board needs a local backend — see the home page for setup." },
    "lang.toggle.toEN":     { zh: "EN",          en: "中" },
    "lang.toggle.aria":     { zh: "切换语言",     en: "Switch language" },

    /* --------- index.html --------- */
    "index.title":          { zh: "AD 多智能体手套 · Dashboard 入口", en: "AD Multi-Agent Glove · Dashboard" },
    "index.h1":             { zh: "AD 多智能体手套 · Dashboard", en: "AD Multi-Agent Glove · Dashboard" },
    "index.hero":           { zh: "EDA + PPG + IMU + 麦克风的可穿戴手套，搭配多智能体推理引擎，对阿尔兹海默症患者做实时监测与干预。下面分别是患者端和医生端入口。",
                              en: "An EDA + PPG + IMU + microphone wearable glove paired with a multi-agent reasoning engine for real-time monitoring and intervention in Alzheimer's disease. The patient and clinician portals are below." },
    "index.demo":           { zh: "DEMO", en: "DEMO" },
    "index.local":          { zh: "本机", en: "LOCAL" },

    "index.tile.patient.h": { zh: "患者端", en: "Patient" },
    "index.tile.patient.p": { zh: "给本人或家属看。简单、温和，告诉你“今天怎么样”和“接下来该做什么”。",
                              en: "For the patient or family. Simple and gentle — tells them how today is going and what to do next." },
    "index.tile.patient.l1":{ zh: "今日红黄绿状态灯", en: "Today's red / yellow / green status light" },
    "index.tile.patient.l2":{ zh: "心率、活动、睡眠、心情", en: "Heart rate, activity, sleep, mood" },
    "index.tile.patient.l3":{ zh: "吃药 / 散步 / 联系家人", en: "Medication / walk / call family" },
    "index.tile.patient.l4":{ zh: "一键听音乐 / 呼吸放松", en: "One-tap music / breathing relaxation" },
    "index.tile.patient.cta":{ zh: "进入患者端 →", en: "Open patient view →" },

    "index.tile.doctor.h":  { zh: "医生端", en: "Clinician" },
    "index.tile.doctor.p":  { zh: "给临床医生看 mock 数据 + Agent 推理。所有卡片可点开看详情。",
                              en: "Mock data + multi-agent reasoning for clinicians. Every card opens a detailed view." },
    "index.tile.doctor.l1": { zh: "AD 分期 + 置信度（SCD→Severe）", en: "AD stage + confidence (SCD → Severe)" },
    "index.tile.doctor.l2": { zh: "HRV / 步态 / EDA / 语音 可点开", en: "HRV / gait / EDA / voice — drill-down" },
    "index.tile.doctor.l3": { zh: "5 cadence 时间尺度详情", en: "Five cadence time-scales" },
    "index.tile.doctor.l4": { zh: "实际生成临床/家属周报", en: "Auto-generated clinical & family weekly reports" },
    "index.tile.doctor.cta":{ zh: "进入医生端 →", en: "Open clinician view →" },

    "index.tile.rt.h":      { zh: "实时面板", en: "Realtime board" },
    "index.tile.rt.p":      { zh: "给开发/研究自己用。直连本机 backend + ESP32，实时显示真实传感器流。",
                              en: "For developers/researchers — connects to a local backend + ESP32 and streams real sensor data." },
    "index.tile.rt.l1":     { zh: "真实 USB Serial / BLE / WiFi 数据", en: "Real USB Serial / BLE / WiFi data" },
    "index.tile.rt.l2":     { zh: "多通道实时波形（陈哲做的）", en: "Multi-channel live waveforms (built by Chen Zhe)" },
    "index.tile.rt.l3":     { zh: "录制 / 回放 / Claude AI 聊天", en: "Record / replay / Claude AI chat" },
    "index.tile.rt.l4":     { zh: "需要本机跑 backend，点查看说明", en: "Requires a local backend — click for setup" },
    "index.tile.rt.cta":    { zh: "查看本机运行说明 →", en: "See local-run instructions →" },

    "index.aux.bg":         { zh: "研究背景：", en: "Research context:" },
    "index.aux.txt":        { zh: "本系统的临床知识库、Agent 架构、传感器原理、合成数据校准等技术细节，见",
                              en: "For the clinical knowledge base, agent architecture, sensor design, and synthetic-data calibration, see" },
    "index.aux.link":       { zh: "AD Wiki ↗", en: "AD Wiki ↗" },
    "index.aux.tail":       { zh: "。当前页面为可视化原型，数据为脱敏 mock。", en: ". This page is a visual prototype; the data are de-identified mocks." },
    "index.footer":         { zh: "AD 多智能体手套 · 多智能体监测系统 · 原型 v0.1 · 不可替代医生诊断",
                              en: "AD Multi-Agent Glove · Multi-agent monitoring · Prototype v0.1 · Not a substitute for clinical diagnosis" },

    "index.modal.h":        { zh: "📡 实时面板需要本机运行", en: "📡 Realtime board runs locally" },
    "index.modal.lead":     { zh: "实时 ESP32 传感器数据是 React 应用 + FastAPI backend，无法部署到静态 GitHub Pages。需要在你电脑上跑起来：",
                              en: "The live ESP32 sensor stream is a React app + FastAPI backend — it cannot run on static GitHub Pages. Run it locally:" },
    "index.modal.s1":       { zh: "1. Clone 代码", en: "1. Clone the repo" },
    "index.modal.s2":       { zh: "2. 启动 backend（终端 1）", en: "2. Start the backend (terminal 1)" },
    "index.modal.s3":       { zh: "3. 启动 frontend（终端 2）", en: "3. Start the frontend (terminal 2)" },
    "index.modal.s4":       { zh: "4. 插上 ESP32 板，访问 /dashboard", en: "4. Plug in the ESP32 and open /dashboard" },
    "index.modal.if":       { zh: "如果你已经在跑了，点这个直接打开：", en: "If it's already running, jump in:" },
    "index.modal.openbtn":  { zh: "打开 localhost:5173/dashboard ↗", en: "Open localhost:5173/dashboard ↗" },
    "index.modal.readme":   { zh: "看 README ↗", en: "Read the README ↗" },
    "index.modal.close":    { zh: "关闭", en: "Close" },

    /* --------- patient.html --------- */
    "patient.title":        { zh: "患者端 · AD 多智能体手套", en: "Patient · AD Multi-Agent Glove" },
    "patient.hero.h":       { zh: "今天状态很好", en: "You're doing well today" },
    "patient.hero.p":       { zh: "各项指标都在你正常范围内，继续保持。", en: "All readings are within your normal range — keep it up." },
    "patient.hero.ts":      { zh: "最近一次评估：今天 09:42（基于过去 24 小时数据）", en: "Last update: today 09:42 (based on the last 24 hours)" },

    "patient.section.today":{ zh: "今天的几件小事", en: "Today at a glance" },
    "patient.section.todo": { zh: "今天的提醒", en: "Today's reminders" },
    "patient.section.act":  { zh: "需要的时候点一下", en: "Tap when you need" },
    "patient.section.week": { zh: "这一周", en: "This week" },

    "patient.metric.hr.l":  { zh: "心率", en: "Heart rate" },
    "patient.metric.hr.u":  { zh: "次/分", en: "bpm" },
    "patient.metric.hr.d":  { zh: "和平时差不多", en: "About the same as usual" },
    "patient.metric.act.l": { zh: "活动", en: "Activity" },
    "patient.metric.act.u": { zh: "步", en: "steps" },
    "patient.metric.act.d": { zh: "↑ 比昨天多走了 480 步", en: "↑ 480 more steps than yesterday" },
    "patient.metric.sl.l":  { zh: "昨晚睡眠", en: "Last night's sleep" },
    "patient.metric.sl.u":  { zh: "小时", en: "hours" },
    "patient.metric.sl.d":  { zh: "↑ 睡得比较踏实", en: "↑ Slept soundly" },
    "patient.metric.mood.l":{ zh: "心情", en: "Mood" },
    "patient.metric.mood.v":{ zh: "平稳", en: "Steady" },
    "patient.metric.mood.d":{ zh: "没有明显起伏", en: "No noticeable swings" },

    "patient.todo.1.t":     { zh: "早上的药 💊", en: "Morning medication 💊" },
    "patient.todo.1.w":     { zh: "已经按时吃啦 · 08:00", en: "Taken on time · 08:00" },
    "patient.todo.2.t":     { zh: "午饭后散散步 🌳", en: "Short walk after lunch 🌳" },
    "patient.todo.2.w":     { zh: "建议时间：13:30 · 20 分钟左右就够", en: "Suggested 13:30 · about 20 minutes is plenty" },
    "patient.todo.2.b":     { zh: "推荐", en: "Suggested" },
    "patient.todo.3.t":     { zh: "下午 4 点女儿要来 👨‍👩‍👧", en: "Daughter visits at 4 pm 👨‍👩‍👧" },
    "patient.todo.3.w":     { zh: "提前听几首老歌，放松一下心情", en: "Play a few old favourites first to relax" },
    "patient.todo.4.t":     { zh: "晚上的药 💊", en: "Evening medication 💊" },
    "patient.todo.4.w":     { zh: "提醒时间：19:00", en: "Reminder at 19:00" },

    "patient.act.music.t":  { zh: "听音乐", en: "Music" },
    "patient.act.music.s":  { zh: "舒缓 / 怀旧", en: "Soothing / nostalgic" },
    "patient.act.music.toast":{ zh: "正在播放您喜欢的老歌…", en: "Playing your favourite old songs…" },
    "patient.act.breath.t": { zh: "深呼吸", en: "Breathe" },
    "patient.act.breath.s": { zh: "5 分钟", en: "5 minutes" },
    "patient.act.breath.toast":{ zh: "开始 5 分钟深呼吸引导", en: "Starting a 5-minute breathing guide" },
    "patient.act.call.t":   { zh: "打电话", en: "Call" },
    "patient.act.call.s":   { zh: "给家人", en: "Family" },
    "patient.act.call.toast":{ zh: "正在拨号给：女儿（小芳）…", en: "Dialing your daughter (Xiao Fang)…" },

    "patient.week.lbl":     { zh: "📊 本周整体", en: "📊 This week overall" },
    "patient.week.txt":     { zh: "这周睡眠和活动都比上周好，心率也稳定。家属来访的那两天心情格外舒展。",
                              en: "Sleep and activity were better than last week and heart rate was stable. Mood was especially light on the days family visited." },
    "patient.week.s1.pre":  { zh: "", en: "" },
    "patient.week.s1.suf":  { zh: " 天按时吃药", en: " days medication on time" },
    "patient.week.s2.suf":  { zh: " 步", en: " steps" },
    "patient.week.s3.pre":  { zh: "平均睡眠 ", en: "Avg sleep " },
    "patient.week.s3.suf":  { zh: " 小时", en: " h" },

    "patient.emergency":    { zh: "不舒服？一键通知医生和家人", en: "Feeling unwell? Notify your doctor and family with one tap" },
    "patient.emergency.toast":{ zh: "已通知主治医生和紧急联系人", en: "Your doctor and emergency contact have been notified" },
    "patient.disclaimer":   { zh: "提示：", en: "Note: " },
    "patient.disclaimer.txt":{ zh: "这里看到的都是手套实时记录的数据，仅供日常参考，不能替代医生的诊断。如果连续几天感觉不一样，请告诉医生。",
                               en: "Everything shown here comes from the glove and is for daily reference only — it does not replace a clinician's diagnosis. If you feel different for several days, tell your doctor." },

    /* --------- doctor.html — UI chrome --------- */
    "doctor.title":         { zh: "医生端 · AD 多智能体手套", en: "Clinician · AD Multi-Agent Glove" },
    "doctor.sidebar.h":     { zh: "患者列表 (4 案例)", en: "Patient list (4 cases)" },
    "doctor.sidebar.search":{ zh: "🔍 搜索 ID / 姓名", en: "🔍 Search ID / name" },
    "doctor.sidebar.upload":{ zh: "📤 上传你的 progression.csv", en: "📤 Upload your progression.csv" },
    "doctor.sidebar.uploadHint":{ zh: "从 ad-synthetic-generator 或自己的纵向数据导入", en: "Import from ad-synthetic-generator or your own longitudinal data" },
    "doctor.sidebar.sources":{ zh: "数据来源：", en: "Data sources:" },
    "doctor.modal.title":   { zh: "详情", en: "Details" },
    "doctor.modal.close":   { zh: "关闭 ✕", en: "Close ✕" },

    /* doctor — dynamic strings used inside JS templates */
    "doctor.tab.wiki":      { zh: "WIKI 知识库视图", en: "WIKI knowledge view" },
    "doctor.tab.mind":      { zh: "MIND Pipeline 数据", en: "MIND pipeline data" },
    "doctor.loading":       { zh: "从 ad-mind-pipeline + ad-wiki-pages 实时拉取", en: "Loading from ad-mind-pipeline + ad-wiki-pages" },
    "doctor.loadFail":      { zh: "加载失败：", en: "Failed to load: " },
    "doctor.loadFail.hint": { zh: "请确认 https://github.com/Jewelina95/ad-mind-pipeline 是 public", en: "Make sure https://github.com/Jewelina95/ad-mind-pipeline is public" },
    "doctor.years":         { zh: "岁", en: " yr" },
    "doctor.male":          { zh: "男", en: "M" },
    "doctor.female":        { zh: "女", en: "F" },
    "doctor.edu":           { zh: "教育", en: "Edu " },
    "doctor.eduYears":      { zh: " 年", en: " yr" },
    "doctor.bpsdTimes":     { zh: "次", en: "" },
    "doctor.days30":        { zh: "30天", en: "30 days" },
    "doctor.rawOnly":       { zh: "⚠ 仅原始数据", en: "⚠ Raw data only" },
    "doctor.eduFull":       { zh: "教育 ", en: "Education " },
    "doctor.progPattern":   { zh: "进展模式: ", en: "Progression: " },
    "doctor.longitudinal30":{ zh: " · 30 天纵向", en: " · 30-day longitudinal" },
    "doctor.stat.ema":      { zh: "EMA 条数", en: "EMA entries" },
    "doctor.stat.bpsd":     { zh: "BPSD 事件", en: "BPSD events" },
    "doctor.stat.notes":    { zh: "临床 Notes", en: "Clinical notes" },
    "doctor.alert.rawBanner.pre":{ zh: "ad-mind-pipeline 还没对 ", en: "ad-mind-pipeline has not finished a full run for " },
    "doctor.alert.rawBanner.suf":{ zh: " 跑完整流程", en: "" },
    "doctor.alert.rawBanner.detail":{ zh: " — 缺少 dashboard.json / insights_clinical / insights_physio / insights_behavior。当前显示原始 raw 数据。",
                                       en: " — dashboard.json / insights_clinical / insights_physio / insights_behavior are missing. Showing raw data only." },
    "doctor.alert.rawBanner.howto":{ zh: "查看如何运行 pipeline ↗", en: "How to run the pipeline ↗" },
    "doctor.section.persona":{ zh: "Persona", en: "Persona" },
    "doctor.section.bpsdEvents":{ zh: "BPSD 事件", en: "BPSD events" },
    "doctor.section.emaLatest5":{ zh: "EMA 最近 5 条", en: "EMA latest 5" },
    "doctor.section.nextSteps":{ zh: "Next Steps", en: "Next steps" },
    "doctor.col.day":       { zh: "Day", en: "Day" },
    "doctor.col.type":      { zh: "Type", en: "Type" },
    "doctor.col.duration":  { zh: "Duration", en: "Duration" },
    "doctor.col.context":   { zh: "Context", en: "Context" },
    "doctor.col.mood":      { zh: "Mood", en: "Mood" },
    "doctor.col.anxiety":   { zh: "Anxiety", en: "Anxiety" },
    "doctor.col.sleep":     { zh: "Sleep", en: "Sleep" },
    "doctor.col.energy":    { zh: "Energy", en: "Energy" },
    "doctor.minutes":       { zh: " 分钟", en: " min" },
    "doctor.nextSteps.txt": { zh: "本患者已有原始数据（persona + bpsd_events + ema + notes + progression），但还没运行 ad-mind-pipeline 的 PhysioAgent / BehaviorAgent / ClinicalAgent / Narrator 这 4 步推理。",
                              en: "This patient already has raw data (persona + bpsd_events + ema + notes + progression), but the four agent steps (PhysioAgent / BehaviorAgent / ClinicalAgent / Narrator) of ad-mind-pipeline have not been run yet." },
    "doctor.nextSteps.s1":  { zh: "Clone <a href=\"https://github.com/Jewelina95/ad-mind-pipeline\" target=\"_blank\">ad-mind-pipeline</a>",
                              en: "Clone <a href=\"https://github.com/Jewelina95/ad-mind-pipeline\" target=\"_blank\">ad-mind-pipeline</a>" },
    "doctor.nextSteps.s2":  { zh: "设置 ANTHROPIC_API_KEY 环境变量", en: "Set the ANTHROPIC_API_KEY environment variable" },
    "doctor.nextSteps.s3.pre":{ zh: "运行 <code>python 03_physio_agent.py ", en: "Run <code>python 03_physio_agent.py " },
    "doctor.nextSteps.s3.suf":{ zh: "</code> 等 4 个 agent 脚本", en: "</code> and the other three agent scripts" },
    "doctor.nextSteps.s4":  { zh: "commit + push 到 main，刷新这个页面就会看到完整 SOAP 报告",
                              en: "Commit + push to main, then refresh this page to see the full SOAP report" },
    "doctor.btn.github":    { zh: "📂 GitHub 源数据 ↗", en: "📂 GitHub source ↗" },
    "doctor.btn.switchP01": { zh: "↩ 切到 P01 (完整 pipeline 输出)", en: "↩ Switch to P01 (full pipeline output)" },

    /* doctor — view tabs / patient bar */
    "doctor.viewtabs.lbl":  { zh: "数据视图", en: "View" },
    "doctor.viewtabs.wiki": { zh: "WIKI 推理", en: "WIKI reasoning" },
    "doctor.viewtabs.mind": { zh: "MIND Pipeline", en: "MIND pipeline" },
    "doctor.label.alert":   { zh: "告警", en: "Alert" },
    "doctor.label.fullPipe":{ zh: "FULL", en: "FULL" },

    /* doctor — sensor board */
    "doctor.sb.live":       { zh: "LIVE", en: "LIVE" },
    "doctor.sb.label":      { zh: "8 通道实时传感器", en: "8-channel live sensors" },
    "doctor.sb.sr":         { zh: "采样", en: "SR" },
    "doctor.sb.pid":        { zh: "受试者", en: "Subject" },

    /* doctor — bpsd 7 names */
    "bpsd.agitation":       { zh: "激越", en: "Agitation" },
    "bpsd.anxiety":         { zh: "焦虑", en: "Anxiety" },
    "bpsd.apathy":          { zh: "淡漠", en: "Apathy" },
    "bpsd.depression":      { zh: "抑郁", en: "Depression" },
    "bpsd.sleep":           { zh: "睡眠", en: "Sleep" },
    "bpsd.sundowning":      { zh: "日落", en: "Sundowning" },
    "bpsd.wandering":       { zh: "游荡", en: "Wandering" },

    /* doctor — section headers in wiki view */
    "doctor.section.staging":{ zh: "AD 临床分期", en: "AD clinical stage" },
    "doctor.section.cadence":{ zh: "Cadence 多时间尺度", en: "Multi-cadence time-scales" },
    "doctor.section.modal":  { zh: "多模态指标", en: "Multimodal metrics" },
    "doctor.section.reason": { zh: "Agent 推理链", en: "Agent reasoning chain" },
    "doctor.section.bpsd":   { zh: "BPSD 7 维度", en: "BPSD 7 dimensions" },
    "doctor.section.actions":{ zh: "操作", en: "Actions" },
    "doctor.section.soap":   { zh: "📝 临床记录 (SOAP)", en: "📝 Clinical note (SOAP)" },

    "doctor.btn.weekly":    { zh: "📤 发送家属周报", en: "📤 Send family weekly report" },
    "doctor.btn.refer":     { zh: "🩺 转诊神经内科", en: "🩺 Refer to neurology" },
    "doctor.btn.escalate":  { zh: "🚨 即时升级", en: "🚨 Escalate now" },
    "doctor.btn.exportSOAP":{ zh: "📄 导出 SOAP", en: "📄 Export SOAP" },

    /* doctor — pmeta */
    "doctor.pmeta.onGlove":  { zh: "戴手套自 ", en: "Glove since " },
    "doctor.pmeta.lastMMSE": { zh: "上次 MMSE ", en: "Last MMSE " },
    "doctor.pmeta.cdr":      { zh: "CDR ", en: "CDR " },

    /* doctor — patient bar stats */
    "doctor.stat.confidence":{ zh: "置信度", en: "Confidence" },
    "doctor.stat.alertNow":  { zh: "当前告警", en: "Current alert" },
    "doctor.stat.alertNone": { zh: "无", en: "None" },

    /* shared */
    "shared.empty":         { zh: "—", en: "—" }
  };

  const KEY = "ad-glove-lang";
  let LANG = localStorage.getItem(KEY) || "zh";

  function t(key) {
    const row = STRINGS[key];
    if (!row) return key;
    return row[LANG] || row.zh || key;
  }

  function applyDom() {
    document.documentElement.lang = LANG === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      el.textContent = t(k);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const k = el.getAttribute("data-i18n-html");
      el.innerHTML = t(k);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      el.title = t(el.getAttribute("data-i18n-title"));
    });
    // <title>
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) titleEl.textContent = t(titleEl.getAttribute("data-i18n"));
    // toggle button label flips
    document.querySelectorAll("[data-lang-toggle]").forEach(btn => {
      btn.textContent = LANG === "zh" ? "EN" : "中";
      btn.setAttribute("aria-label", t("lang.toggle.aria"));
    });
  }

  function setLang(lang) {
    LANG = lang === "en" ? "en" : "zh";
    localStorage.setItem(KEY, LANG);
    applyDom();
    if (typeof window.onLangChange === "function") {
      try { window.onLangChange(LANG); } catch (e) { console.error(e); }
    }
  }

  function toggle() { setLang(LANG === "zh" ? "en" : "zh"); }

  function getLang() { return LANG; }

  // Build the brand bar HTML (caller can still customize)
  function brandBarHTML(opts) {
    opts = opts || {};
    const links = opts.links || [
      { href: "index.html",   key: "nav.home" },
      { href: "patient.html", key: "nav.patient" },
      { href: "doctor.html",  key: "nav.doctor" },
      { href: "index.html",   key: "nav.realtime", titleKey: "nav.realtime.tip" }
    ];
    const linkHtml = links.map(l => {
      const active = l.active ? " class=\"active\"" : "";
      const title  = l.titleKey ? ` data-i18n-title="${l.titleKey}"` : "";
      return `<a href="${l.href}"${active} data-i18n="${l.key}"${title}></a>`;
    }).join("");
    return `
      <nav class="brandbar">
        <a class="brandbar-logo" href="index.html" aria-label="I-THREAD">
          <img src="assets/i-thread-logo.svg" alt="I-THREAD" />
        </a>
        <span class="brandbar-divider"></span>
        <span class="brandbar-product" data-i18n="brand.glove"></span>
        <span class="brandbar-tag"     data-i18n="brand.tagline"></span>
        <div class="brandbar-pills">${linkHtml}</div>
        <button type="button" class="lang-toggle" data-lang-toggle aria-label="Switch language">中</button>
      </nav>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang-toggle]").forEach(btn => {
      btn.addEventListener("click", toggle);
    });
    applyDom();
  });

  window.I18N = { t, setLang, getLang, toggle, applyDom, brandBarHTML, STRINGS };
})();
