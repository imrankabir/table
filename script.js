const getNumber = e => localStorage.getItem('table-number') ?? 2;
const saveNumber = number => localStorage.setItem('table-number', number);

document.querySelector('#t').addEventListener('keyup', e => {
    saveNumber(document.querySelector('#t').value);
});

const gt = e => {
  const t = document.querySelector('#t').value;
  const tc = document.querySelector('#tc');
  if (!t || t < 2 || t > 20) {
    alert('Please enter a number between 2 and 20.');
    return;
  }
  let th = '';
  for (let i = 1; i <= 10; i++) {
    th += `<tr><td>${t} x ${i} = ${t * i}</td></tr>`;
  }
  tc.innerHTML = th;
};

(e => {
    document.querySelector('#t').value = getNumber();
    gt();
})();