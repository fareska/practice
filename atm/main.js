
const res = fetch('atm_enboi.csv', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
    .then((res)=> res.text())
    .then(data => {
        successFunction(data); 
    }) 
    .catch(err => console.log(err));

const fillSpaces = (row) => {
  console.log(row);
}

const adjustData = data => {
    let counter = data[0].split(',').length; 
    let newData = [];
    data.forEach( d=>{
      d.split(',').length === counter 
      ? newData.push(d)
      : fillSpaces(d);
        
    });
      
    return newData;
}

function successFunction(data) {
  const pEl = document.createElement('p');
  pEl.innerText = data;
  $('#container').append(pEl);

  var allRows = data.split(/\r?\n|\r/);

  console.log(allRows);
}

/* 
var allRows = data.split(/\r?\n|\r/);
allRows = adjustData(allRows);
var table = '<table id="example" class="display" style="width:100%">';
for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
  if (singleRow === 0) {
    table += '<thead>';
    table += '<tr>';
  } else {
    table += '<tr>';
  }
  var rowCells = allRows[singleRow].split(',');
  for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
    if (singleRow === 0) {
      table += '<th >';
      table += rowCells[rowCell];
      table += '</th>';
    } else {
      table += '<td>';
      table += rowCells[rowCell];
      table += '</td>';
    }
  }
  if (singleRow === 0) {
    table += '</tr>';
    table += '</thead>';
    table += '<tbody>';
  } else {
    table += '</tr>';
  }
} 
table += '</tbody>';
table += '</table>';

$('#container').append(table);
$('#example').DataTable();
 */
