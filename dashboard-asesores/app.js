const body = document.getElementById('asesoresBody');
const template = document.getElementById('filaTemplate');
const periodo = document.getElementById('periodo');
const notas = document.getElementById('notas');

let chartVentas;
let chartMix;
let chartMeta;

const hoy = new Date();
periodo.value = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}`;

function clampNum(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function agregarFila(data = {}) {
  const row = template.content.firstElementChild.cloneNode(true);
  row.querySelector('.nombre').value = data.nombre || '';
  row.querySelector('.ciudad').value = data.ciudad || 'GDL';
  row.querySelector('.tipo').value = data.tipo || 'Referidos';
  row.querySelector('.meta').value = data.meta ?? 0;
  row.querySelector('.ventas').value = data.ventas ?? 0;
  row.querySelector('.anterior').value = data.anterior ?? 0;
  row.querySelector('.referidos').value = data.referidos ?? 0;
  row.querySelector('.cotizaciones').value = data.cotizaciones ?? 0;
  row.querySelector('.axa').value = data.axa ?? 0;
  row.querySelector('.gnp').value = data.gnp ?? 0;

  row.querySelectorAll('input,select').forEach(el => el.addEventListener('input', actualizarTodo));
  row.querySelector('.remove-row').addEventListener('click', () => {
    row.remove();
    if (!body.children.length) agregarFila();
    actualizarTodo();
  });
  body.appendChild(row);
  actualizarTodo();
}

function leerDatos() {
  return [...body.querySelectorAll('tr')].map(row => ({
    nombre: row.querySelector('.nombre').value.trim() || 'Sin nombre',
    ciudad: row.querySelector('.ciudad').value,
    tipo: row.querySelector('.tipo').value,
    meta: clampNum(row.querySelector('.meta').value),
    ventas: clampNum(row.querySelector('.ventas').value),
    anterior: clampNum(row.querySelector('.anterior').value),
    referidos: clampNum(row.querySelector('.referidos').value),
    cotizaciones: clampNum(row.querySelector('.cotizaciones').value),
    axa: clampNum(row.querySelector('.axa').value),
    gnp: clampNum(row.querySelector('.gnp').value)
  }));
}

function formateaPeriodo() {
  if (!periodo.value) return 'Periodo sin definir';
  const [y, m] = periodo.value.split('-').map(Number);
  return new Intl.DateTimeFormat('es-MX', { month: 'long', year: 'numeric' })
    .format(new Date(Date.UTC(y, m - 1, 1)));
}

function actualizarKPIs(datos) {
  const totalVentas = datos.reduce((s, d) => s + d.ventas, 0);
  const totalAnterior = datos.reduce((s, d) => s + d.anterior, 0);
  const totalReferidos = datos.reduce((s, d) => s + d.referidos, 0);
  const conMeta = datos.filter(d => d.meta > 0);
  const sumaMetas = conMeta.reduce((s, d) => s + d.meta, 0);
  const ventasConMeta = conMeta.reduce((s, d) => s + d.ventas, 0);
  const axa = datos.reduce((s, d) => s + d.axa, 0);
  const gnp = datos.reduce((s, d) => s + d.gnp, 0);

  document.getElementById('kpiVentas').textContent = totalVentas;
  document.getElementById('kpiReferidos').textContent = totalReferidos;
  document.getElementById('kpiAvance').textContent = sumaMetas > 0 ? `${Math.round((ventasConMeta / sumaMetas) * 100)}%` : '—';
  document.getElementById('kpiMix').textContent = totalVentas > 0 ? `${Math.round(((axa + gnp) / totalVentas) * 100)}%` : '0%';

  const deltaEl = document.getElementById('kpiVentasDelta');
  if (totalAnterior > 0) {
    const pct = ((totalVentas - totalAnterior) / totalAnterior) * 100;
    deltaEl.textContent = `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}% vs. mes anterior`;
    deltaEl.style.color = pct >= 0 ? '#2f7d5a' : '#a84a4a';
  } else {
    deltaEl.textContent = 'Sin comparación';
    deltaEl.style.color = '';
  }
}

function actualizarInsights(datos) {
  const validos = datos.filter(d => d.nombre !== 'Sin nombre' || d.ventas > 0 || d.referidos > 0);
  const top = [...validos].sort((a, b) => b.ventas - a.ventas)[0];
  document.getElementById('mejorAsesor').textContent = top ? top.nombre : 'Sin datos';
  document.getElementById('mejorAsesorDetalle').textContent = top ? `${top.ventas} ventas · ${top.ciudad}` : 'Agrega información para calcular el ranking.';

  const crecimiento = validos
    .filter(d => d.anterior > 0)
    .map(d => ({ ...d, deltaPct: ((d.ventas - d.anterior) / d.anterior) * 100 }))
    .sort((a, b) => b.deltaPct - a.deltaPct)[0];
  document.getElementById('mayorCrecimiento').textContent = crecimiento ? crecimiento.nombre : 'Sin datos';
  document.getElementById('mayorCrecimientoDetalle').textContent = crecimiento ? `${crecimiento.deltaPct >= 0 ? '+' : ''}${crecimiento.deltaPct.toFixed(1)}% vs. mes anterior` : 'Comparación contra el mes anterior.';

  const metaTop = validos
    .filter(d => d.meta > 0)
    .map(d => ({ ...d, avance: (d.ventas / d.meta) * 100 }))
    .sort((a, b) => b.avance - a.avance)[0];
  document.getElementById('mejorMeta').textContent = metaTop ? metaTop.nombre : 'Sin datos';
  document.getElementById('mejorMetaDetalle').textContent = metaTop ? `${Math.round(metaTop.avance)}% de su meta` : 'Solo considera metas mayores a 0.';
}

function crearOActualizarGraficas(datos) {
  const labels = datos.map(d => d.nombre);
  const ventas = datos.map(d => d.ventas);
  const anteriores = datos.map(d => d.anterior);
  const axa = datos.reduce((s, d) => s + d.axa, 0);
  const gnp = datos.reduce((s, d) => s + d.gnp, 0);
  const totalVentas = datos.reduce((s, d) => s + d.ventas, 0);
  const otras = Math.max(totalVentas - axa - gnp, 0);
  const metaLabels = datos.filter(d => d.meta > 0).map(d => d.nombre);
  const metaData = datos.filter(d => d.meta > 0).map(d => Math.round((d.ventas / d.meta) * 100));

  if (chartVentas) chartVentas.destroy();
  chartVentas = new Chart(document.getElementById('chartVentas'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Actual', data: ventas, backgroundColor: '#244f88', borderRadius: 7 },
        { label: 'Mes anterior', data: anteriores, backgroundColor: '#cfd6e3', borderRadius: 7 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } }
  });

  if (chartMix) chartMix.destroy();
  chartMix = new Chart(document.getElementById('chartMix'), {
    type: 'doughnut',
    data: {
      labels: ['AXA', 'GNP', 'Otras'],
      datasets: [{ data: [axa, gnp, otras], backgroundColor: ['#17345f', '#c99b3b', '#dfe4ec'], borderWidth: 0 }]
    },
    options: { responsive: true, maintainAspectRatio: false, cutout: '66%', plugins: { legend: { position: 'bottom' } } }
  });

  if (chartMeta) chartMeta.destroy();
  chartMeta = new Chart(document.getElementById('chartMeta'), {
    type: 'bar',
    data: { labels: metaLabels, datasets: [{ label: '% de meta', data: metaData, backgroundColor: '#2f7d5a', borderRadius: 7 }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, suggestedMax: 100, ticks: { callback: v => `${v}%` } } } }
  });
}

function actualizarRanking(datos) {
  const list = document.getElementById('rankingList');
  const ranking = [...datos].filter(d => d.nombre !== 'Sin nombre' || d.ventas > 0).sort((a, b) => b.ventas - a.ventas || b.referidos - a.referidos);
  document.getElementById('rankingCount').textContent = `${ranking.length} ${ranking.length === 1 ? 'asesor' : 'asesores'}`;

  if (!ranking.length) {
    list.innerHTML = '<p class="empty-state">Captura resultados para mostrar el ranking.</p>';
    return;
  }

  list.innerHTML = ranking.map((d, i) => {
    let trend = 'Sin comparación';
    let cls = '';
    if (d.anterior > 0) {
      const delta = ((d.ventas - d.anterior) / d.anterior) * 100;
      trend = `${delta >= 0 ? '▲' : '▼'} ${Math.abs(delta).toFixed(1)}%`;
      cls = delta >= 0 ? 'up' : 'down';
    }
    const avance = d.meta > 0 ? ` · ${Math.round((d.ventas / d.meta) * 100)}% meta` : '';
    return `<div class="rank-row">
      <span class="rank-pos">${i + 1}</span>
      <div><div class="rank-name">${escapeHtml(d.nombre)}</div><div class="rank-sub">${escapeHtml(d.ciudad)} · ${escapeHtml(d.tipo)}${avance}</div></div>
      <div class="rank-value">${d.ventas} ventas</div>
      <div class="rank-trend ${cls}">${trend}</div>
    </div>`;
  }).join('');
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[ch]));
}

function actualizarTodo() {
  const datos = leerDatos();
  document.getElementById('tituloReporte').textContent = `Resultados comerciales · ${formateaPeriodo()}`;
  document.getElementById('fechaReporte').textContent = `Actualizado ${new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(new Date())}`;
  actualizarKPIs(datos);
  actualizarInsights(datos);
  crearOActualizarGraficas(datos);
  actualizarRanking(datos);
  guardarLocal(datos);
}

function guardarLocal(datos) {
  try {
    localStorage.setItem('swartz-dashboard-asesores', JSON.stringify({ periodo: periodo.value, notas: notas.value, datos }));
  } catch (_) {}
}

function cargarLocal() {
  try {
    const saved = JSON.parse(localStorage.getItem('swartz-dashboard-asesores'));
    if (!saved?.datos?.length) return false;
    body.innerHTML = '';
    periodo.value = saved.periodo || periodo.value;
    notas.value = saved.notas || '';
    saved.datos.forEach(agregarFila);
    return true;
  } catch (_) { return false; }
}

function cargarEjemplo() {
  body.innerHTML = '';
  [
    { nombre: 'Aylin', ciudad: 'GDL', tipo: 'Independiente', meta: 12, ventas: 9, anterior: 11, referidos: 4, cotizaciones: 28, axa: 3, gnp: 2 },
    { nombre: 'Miguel', ciudad: 'MTY', tipo: 'Referidos', meta: 0, ventas: 5, anterior: 3, referidos: 10, cotizaciones: 12, axa: 2, gnp: 1 },
    { nombre: 'Karen', ciudad: 'CHIH', tipo: 'Referidos', meta: 0, ventas: 4, anterior: 6, referidos: 7, cotizaciones: 9, axa: 1, gnp: 2 },
    { nombre: 'Anel', ciudad: 'TIJ', tipo: 'Referidos', meta: 0, ventas: 6, anterior: 4, referidos: 8, cotizaciones: 11, axa: 3, gnp: 1 }
  ].forEach(agregarFila);
  actualizarTodo();
}

async function exportarCanvas() {
  document.activeElement?.blur();
  await new Promise(r => setTimeout(r, 120));
  return html2canvas(document.getElementById('reporte'), {
    scale: 2,
    backgroundColor: '#ffffff',
    useCORS: true,
    logging: false
  });
}

async function descargarImagen() {
  const canvas = await exportarCanvas();
  const link = document.createElement('a');
  link.download = `reporte-comercial-${periodo.value || 'periodo'}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

async function generarPDF() {
  const canvas = await exportarCanvas();
  const imgData = canvas.toDataURL('image/jpeg', .95);
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = 210;
  const pageH = 297;
  const margin = 8;
  const usableW = pageW - margin * 2;
  const imgH = (canvas.height * usableW) / canvas.width;
  let remaining = imgH;
  let y = margin;

  pdf.addImage(imgData, 'JPEG', margin, y, usableW, imgH);
  remaining -= (pageH - margin * 2);

  while (remaining > 0) {
    pdf.addPage();
    y = margin - (imgH - remaining);
    pdf.addImage(imgData, 'JPEG', margin, y, usableW, imgH);
    remaining -= (pageH - margin * 2);
  }

  pdf.save(`reporte-comercial-${periodo.value || 'periodo'}.pdf`);
}

document.getElementById('btnAgregar').addEventListener('click', () => agregarFila());
document.getElementById('btnEjemplo').addEventListener('click', cargarEjemplo);
document.getElementById('btnLimpiar').addEventListener('click', () => {
  body.innerHTML = '';
  notas.value = '';
  agregarFila();
  localStorage.removeItem('swartz-dashboard-asesores');
  actualizarTodo();
});
document.getElementById('btnImagen').addEventListener('click', descargarImagen);
document.getElementById('btnPdf').addEventListener('click', generarPDF);
periodo.addEventListener('change', actualizarTodo);
notas.addEventListener('input', actualizarTodo);

if (!cargarLocal()) {
  agregarFila();
  agregarFila();
  agregarFila();
  agregarFila();
}
actualizarTodo();
