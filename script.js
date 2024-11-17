function generateTable() {
  
  const tableNumber = document.querySelector('#tableNumber').value;
  const tableContainer = document.querySelector('#tableContainer');

  if (!tableNumber || tableNumber < 2 || tableNumber > 20) {
    alert('Please enter a number between 2 and 20.');
    return;
  }

  let tableHTML = `<table>`;

  for (let i = 1; i <= 10; i++) {
    tableHTML += `
      <tr>
        <td>${tableNumber} x ${i} = ${tableNumber * i}</td>
      </tr>
    `;
  }

  tableHTML += `</table>`;
  tableContainer.innerHTML = tableHTML;
}

generateTable();