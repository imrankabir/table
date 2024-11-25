const get = (k, d) => JSON.parse(localStorage.getItem(`table-${k}`)) ?? d;
const set = (k, v) => localStorage.setItem(`table-${k}`, JSON.stringify(v));

document.querySelector('#t').addEventListener('keyup', e => {
    set('number', document.querySelector('#t').value);
});

const gt = e => {
  const t = document.querySelector('#t').value;
  if (!t || t < 2 || t > 20) {
    alert('Please enter a number between 2 and 20.');
    return;
  }
  let th = '';
  for (let i = 1; i <= 10; i++) {
    th += `<tr><td>${t} x ${i} = ${t * i}</td></tr>`;
  }
  document.querySelector('#tc').innerHTML = th;
};

(e => {
    document.querySelector('#t').value = get('number', 2);
    gt();
})();