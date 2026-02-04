const actions = [
  {
    title: 'Publish AI transparency notice for onboarding flow',
    deadline: 'Sep 2, 2026',
    status: 'due-soon',
    severity: 'High',
    owner: 'Compliance Lead',
  },
  {
    title: 'Update GDPR data processing register',
    deadline: 'Aug 22, 2026',
    status: 'due-soon',
    severity: 'Medium',
    owner: 'Ops Manager',
  },
  {
    title: 'Collect vendor DPIA evidence and approvals',
    deadline: 'Aug 18, 2026',
    status: 'overdue',
    severity: 'High',
    owner: 'Legal',
  },
  {
    title: 'Implement AI model logging retention policy',
    deadline: 'Oct 10, 2026',
    status: 'in-progress',
    severity: 'Medium',
    owner: 'Engineering',
  },
];

const actionsGrid = document.getElementById('actionsGrid');
const filterButtons = document.querySelectorAll('.filter');

const statusLabels = {
  overdue: 'Overdue',
  'due-soon': 'Due Soon',
  'in-progress': 'In Progress',
};

function renderActions(filter) {
  actionsGrid.innerHTML = '';
  const filtered = filter === 'all' ? actions : actions.filter((action) => action.status === filter);

  filtered.forEach((action) => {
    const card = document.createElement('article');
    card.className = 'action-card';

  const pill = document.createElement('span');
  const statusClass = {
    overdue: 'danger',
    'due-soon': 'warning',
    'in-progress': 'info',
  }[action.status];
  pill.className = `pill ${statusClass || 'info'}`;
  pill.textContent = statusLabels[action.status] || 'Upcoming';

    const title = document.createElement('h3');
    title.textContent = action.title;

    const meta = document.createElement('div');
    meta.className = 'action-meta';
    meta.innerHTML = `<span>Deadline: ${action.deadline}</span><span>${action.severity}</span>`;

    const owner = document.createElement('div');
    owner.className = 'action-meta';
    owner.innerHTML = `<span>Owner: ${action.owner}</span><span>Evidence: 2 items</span>`;

    const button = document.createElement('button');
    button.className = 'secondary';
    button.textContent = 'Open action';

    card.append(pill, title, meta, owner, button);
    actionsGrid.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderActions(button.dataset.filter);
  });
});

renderActions('all');
