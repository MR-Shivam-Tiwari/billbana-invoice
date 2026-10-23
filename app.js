// BillBana — original client-side GST invoice generator
const tbody = document.querySelector('#items tbody');
const fmt = n => '₹' + n.toFixed(2);
function addRow(item = '', qty = 1, rate = 0, gst = 18) {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><input class="i-name" value="${item}" placeholder="Item description"></td>
    <td><input class="i-qty" type="number" min="0" value="${qty}"></td>
    <td><input class="i-rate" type="number" min="0" value="${rate}"></td>
    <td><input class="i-gst" type="number" min="0" value="${gst}"></td>
    <td class="i-amt">₹0.00</td>
    <td><button class="del" title="Remove">✕</button></td>`;
  tr.querySelectorAll('input').forEach(el => el.addEventListener('input', calc));
  tr.querySelector('.del').addEventListener('click', () => { tr.remove(); calc(); });
  tbody.appendChild(tr); calc();
}
function calc() {
  let sub = 0, tax = 0;
  tbody.querySelectorAll('tr').forEach(tr => {
    const q = parseFloat(tr.querySelector('.i-qty').value) || 0;
    const r = parseFloat(tr.querySelector('.i-rate').value) || 0;
    const g = parseFloat(tr.querySelector('.i-gst').value) || 0;
    const base = q * r, t = base * g / 100;
    sub += base; tax += t;
    tr.querySelector('.i-amt').textContent = fmt(base + t);
  });
  document.querySelector('#sub').textContent = fmt(sub);
  document.querySelector('#tax').textContent = fmt(tax);
  document.querySelector('#grand').textContent = fmt(sub + tax);
}
document.querySelector('#addRow').addEventListener('click', () => addRow());
document.querySelector('#printBtn').addEventListener('click', () => window.print());
document.querySelector('#invdate').valueAsDate = new Date();
addRow('Web development services', 1, 25000, 18);
