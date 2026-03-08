
// Accesibilidad: actualizar año y gestionar búsqueda con resaltado
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const content = document.getElementById('content');

let lastMarks = [];

function clearHighlights() {
  lastMarks.forEach(m => {
    const parent = m.parentNode;
    parent.replaceChild(document.createTextNode(m.textContent), m);
    parent.normalize();
  });
  lastMarks = [];
}

function highlight(term) {
  if (!term) return;
  const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null, false);
  const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\]/g, '\$&'), 'gi');
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (regex.test(node.nodeValue)) nodes.push(node);
  }
  nodes.forEach(n => {
    const frag = document.createDocumentFragment();
    const parts = n.nodeValue.split(regex);
    const matches = n.nodeValue.match(regex);
    parts.forEach((p, i) => {
      frag.appendChild(document.createTextNode(p));
      if (matches && matches[i]) {
        const mark = document.createElement('mark');
        mark.textContent = matches[i];
        frag.appendChild(mark);
        lastMarks.push(mark);
      }
    });
    n.parentNode.replaceChild(frag, n);
  });
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  clearHighlights();
  const term = input.value.trim();
  if (term.length > 1) {
    highlight(term);
    const first = lastMarks[0];
    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
