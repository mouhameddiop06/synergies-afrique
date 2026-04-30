const breadcrumbs = {
  dashboard: ['Tableau de bord'],
  structures: ['Structures'],
  detail: ['Structures', 'Abri Provisoire N°1']
};
const navMap = { dashboard: 0, structures: 1, detail: 1 };

function showPage(name, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.sb-item').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('.sb-item')[navMap[name]].classList.add('active');
  const bc = breadcrumbs[name];
  const crumbs = bc.map((c, i) =>
    i < bc.length - 1
      ? `<span>${c}</span><span class="breadcrumb-sep">›</span>`
      : `<span class="breadcrumb-current">${c}</span>`
  ).join('');
  document.getElementById('breadcrumb').innerHTML = `<span>Synergies Afrique</span><span class="breadcrumb-sep">›</span>${crumbs}`;
}

function filterAll(pill) {
  document.querySelectorAll('.filter-tab').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  document.querySelectorAll('.struct-card').forEach(c => c.style.display = 'flex');
}
function filterStatus(pill, status) {
  document.querySelectorAll('.filter-tab').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  document.querySelectorAll('.struct-card').forEach(c => {
    c.style.display = c.dataset.status === status ? 'flex' : 'none';
  });
}