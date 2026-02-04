const actions = [
  {
    title: 'Publish AI transparency notice for onboarding flow',
    deadline: 'Sep 2, 2026',
    status: 'due-soon',
    severity: 'High',
    owner: 'Compliance Lead',
    evidence: ['Notice draft', 'Product screenshots'],
    evidenceDone: 1,
  },
  {
    title: 'Update GDPR data processing register',
    deadline: 'Aug 22, 2026',
    status: 'due-soon',
    severity: 'Medium',
    owner: 'Ops Manager',
    evidence: ['Updated register', 'DPO sign-off'],
    evidenceDone: 0,
  },
  {
    title: 'Collect vendor DPIA evidence and approvals',
    deadline: 'Aug 18, 2026',
    status: 'overdue',
    severity: 'High',
    owner: 'Legal',
    evidence: ['Vendor DPIA', 'Security review', 'Approval memo'],
    evidenceDone: 1,
  },
  {
    title: 'Implement AI model logging retention policy',
    deadline: 'Oct 10, 2026',
    status: 'in-progress',
    severity: 'Medium',
    owner: 'Engineering',
    evidence: ['Retention policy', 'Log archive'],
    evidenceDone: 1,
  },
  {
    title: 'Complete staff AI governance training',
    deadline: 'Sep 20, 2026',
    status: 'completed',
    severity: 'Low',
    owner: 'People Ops',
    evidence: ['Training log', 'Attendance sheet'],
    evidenceDone: 2,
  },
];

const actionsGrid = document.getElementById('actionsGrid');
const filterButtons = document.querySelectorAll('.filter');
const countOverdue = document.getElementById('countOverdue');
const countDueSoon = document.getElementById('countDueSoon');
const countInProgress = document.getElementById('countInProgress');
const countCompleted = document.getElementById('countCompleted');
const completionRate = document.getElementById('completionRate');
const completionBar = document.getElementById('completionBar');
const riskScore = document.getElementById('riskScore');
const riskSummary = document.getElementById('riskSummary');

const profileCountry = document.getElementById('profileCountry');
const profileSector = document.getElementById('profileSector');
const profileSize = document.getElementById('profileSize');
const profileFocus = document.getElementById('profileFocus');

const countrySelect = document.getElementById('countrySelect');
const sectorSelect = document.getElementById('sectorSelect');
const sizeSelect = document.getElementById('sizeSelect');
const focusSelect = document.getElementById('focusSelect');

const statusLabels = {
  overdue: 'Overdue',
  'due-soon': 'Due Soon',
  'in-progress': 'In Progress',
  completed: 'Completed',
};

const statusClasses = {
  overdue: 'danger',
  'due-soon': 'warning',
  'in-progress': 'info',
  completed: 'success',
};

const defaultConfig = {
  apiBaseUrl: 'https://api.nxtaction.eu',
  storageRegion: 'eu-central-1',
  aiProvider: 'openai',
  ocrProvider: 'tesseract',
  vectorDb: 'pgvector',
  demoMode: true,
};

const appConfig = window.NXT_ACTION_CONFIG ?? defaultConfig;

const progressItems = [
  {
    phase: 'Phase 1 — Foundation',
    status: 'Completed',
    percent: 100,
    highlights: ['Schema drafted', 'Upload flow storyboarded', 'OCR queue mocked'],
  },
  {
    phase: 'Phase 2 — Obligation Extraction',
    status: 'Completed',
    percent: 100,
    highlights: ['Classifier prompts ready', 'Citation mapping UX complete', 'Extraction preview live'],
  },
  {
    phase: 'Phase 3 — Action Board + Proof Vault',
    status: 'Completed',
    percent: 100,
    highlights: ['Action board filters working', 'Evidence cards ready', 'Audit trail layout done'],
  },
  {
    phase: 'Phase 4 — Compliance Bundles',
    status: 'Completed',
    percent: 100,
    highlights: ['Bundle library defined', 'Scope selector wired', 'Coverage summary drafted'],
  },
  {
    phase: 'Phase 5 — Polish + Reporting',
    status: 'In progress',
    percent: 90,
    highlights: ['Export surfaces mocked', 'Onboarding checklist drafted', 'Reminder cadence outlined'],
  },
];

const nextSteps = [
  {
    title: 'Finalize onboarding report export templates',
    owner: 'Design',
    status: 'In progress',
  },
  {
    title: 'Ship reminders + escalation rules',
    owner: 'Product',
    status: 'Next',
  },
  {
    title: 'Complete reporting QA for leadership dashboards',
    owner: 'Analytics',
    status: 'Next',
  },
  {
    title: 'Prep launch checklist + handoff docs',
    owner: 'Program Ops',
    status: 'Planned',
  },
];

const envParameters = [
  { key: 'API_BASE_URL', value: appConfig.apiBaseUrl, description: 'Backend gateway for ingestion.' },
  { key: 'STORAGE_REGION', value: appConfig.storageRegion, description: 'EU-only storage region.' },
  { key: 'AI_PROVIDER', value: appConfig.aiProvider, description: 'LLM extraction provider.' },
  { key: 'OCR_PROVIDER', value: appConfig.ocrProvider, description: 'OCR engine for scans.' },
  { key: 'VECTOR_DB', value: appConfig.vectorDb, description: 'Semantic search datastore.' },
  { key: 'DEMO_MODE', value: appConfig.demoMode ? 'true' : 'false', description: 'Mock data toggle.' },
];

function renderActions(filter) {
  actionsGrid.innerHTML = '';
  const filtered = filter === 'all' ? actions : actions.filter((action) => action.status === filter);

  filtered.forEach((action) => {
    const card = document.createElement('article');
    card.className = 'action-card';

    const pill = document.createElement('span');
    pill.className = `pill ${statusClasses[action.status] || 'info'}`;
    pill.textContent = statusLabels[action.status] || 'Upcoming';

    const title = document.createElement('h3');
    title.textContent = action.title;

    const meta = document.createElement('div');
    meta.className = 'action-meta';
    meta.innerHTML = `<span>Deadline: ${action.deadline}</span><span>${action.severity}</span>`;

    const owner = document.createElement('div');
    owner.className = 'action-meta';
    owner.innerHTML = `<span>Owner: ${action.owner}</span><span>Evidence needed: ${action.evidence.length}</span>`;

    const evidence = document.createElement('div');
    evidence.className = 'evidence-list';
    evidence.innerHTML = action.evidence.map((item) => `• ${item}`).join('<br />');

    const evidenceMeta = document.createElement('div');
    evidenceMeta.className = 'action-evidence';
    evidenceMeta.innerHTML = `<span>Evidence uploaded: ${action.evidenceDone}/${action.evidence.length}</span><span>Status: ${statusLabels[action.status]}</span>`;

    const button = document.createElement('button');
    button.className = 'secondary';
    button.textContent = 'Open action';

    card.append(pill, title, meta, owner, evidence, evidenceMeta, button);
    actionsGrid.appendChild(card);
  });
}

function updateInsights() {
  const counts = actions.reduce(
    (acc, action) => {
      acc[action.status] = (acc[action.status] || 0) + 1;
      return acc;
    },
    { overdue: 0, 'due-soon': 0, 'in-progress': 0, completed: 0 }
  );

  countOverdue.textContent = counts.overdue;
  countDueSoon.textContent = counts['due-soon'];
  countInProgress.textContent = counts['in-progress'];
  countCompleted.textContent = counts.completed;

  const completion = Math.round((counts.completed / actions.length) * 100);
  completionRate.textContent = `${completion}%`;
  completionBar.style.width = `${completion}%`;

  const risk = Math.max(0, 100 - counts.completed * 15 - counts['in-progress'] * 8 + counts.overdue * 12);
  riskScore.textContent = risk;

  const riskLabel = risk > 75 ? 'High' : risk > 45 ? 'Medium' : 'Low';
  riskSummary.textContent = `${riskLabel} risk — ${counts.overdue} overdue, ${counts['due-soon']} due soon.`;
}

function updateProfile() {
  profileCountry.textContent = countrySelect.value;
  profileSector.textContent = sectorSelect.value;
  profileSize.textContent = sizeSelect.value;
  profileFocus.textContent = focusSelect.value;
}

function renderProgress() {
  const progressList = document.getElementById('progressList');
  if (!progressList) return;

  progressList.innerHTML = '';
  progressItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'progress-card';

    const header = document.createElement('div');
    header.className = 'progress-header';
    header.innerHTML = `<h3>${item.phase}</h3><span class="pill info">${item.status}</span>`;

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.innerHTML = `<span style="width: ${item.percent}%"></span>`;

    const meta = document.createElement('div');
    meta.className = 'progress-meta';
    meta.textContent = `${item.percent}% complete`;

    const list = document.createElement('ul');
    list.className = 'progress-highlights';
    list.innerHTML = item.highlights.map((highlight) => `<li>${highlight}</li>`).join('');

    card.append(header, bar, meta, list);
    progressList.appendChild(card);
  });
}

function renderEnvList() {
  const envList = document.getElementById('envList');
  if (!envList) return;

  envList.innerHTML = '';
  envParameters.forEach((param) => {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${param.key}</strong> <span>${param.value}</span><p>${param.description}</p>`;
    envList.appendChild(item);
  });
}

function renderNextSteps() {
  const nextStepsList = document.getElementById('nextStepsList');
  const nextPhase = document.getElementById('nextPhase');
  if (!nextStepsList) return;

  nextStepsList.innerHTML = '';
  nextSteps.forEach((step) => {
    const item = document.createElement('li');
    item.innerHTML = `<span>${step.title}</span><span>${step.owner}</span><span>${step.status}</span>`;
    nextStepsList.appendChild(item);
  });

  if (nextPhase) {
    nextPhase.textContent = progressItems[3]?.phase ?? 'Phase 4 — Compliance Bundles';
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderActions(button.dataset.filter);
  });
});

[countrySelect, sectorSelect, sizeSelect, focusSelect].forEach((select) => {
  select.addEventListener('change', updateProfile);
});

renderActions('all');
updateInsights();
updateProfile();
renderProgress();
renderEnvList();
renderNextSteps();
