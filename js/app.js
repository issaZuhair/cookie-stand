'use strict';
let form=document.getElementById('additionForm');
let hours=['','6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
let houlrySum=0;
let locationSum=[];
let main=document.getElementById('sales');
let tableHead=document.createElement('th');
let tableRow=document.createElement('tr');
let table=document.createElement('table');
let tableData=document.createElement('td');
let footer=document.createElement('tfoot');
let header=document.createElement('thead');
let count=0;
main.appendChild(table);
table.appendChild(tableRow);
tableRow.appendChild(tableHead);

table.appendChild(header);
header.appendChild(tableRow);
tableRow.appendChild(tableHead);
form.addEventListener('submit',addition);
function addition(event){
  event.preventDefault(event);
  let standLocation=event.target.location.value;
  let minimumCustomers=parseInt(event.target.minimumCustomers.value);
  let maximumCustomers=parseInt(event.target.maximumCustomers.value);
  let averageSales=parseInt(event.target.averageSales.value);

  let newStand= new CookieStand(minimumCustomers,maximumCustomers,averageSales,standLocation);
  newStand.data();
}
for(let i=0;i<=hours.length;i++){
  if(i<hours.length){
    tableHead.innerText=(hours[i]);
    tableHead=document.createElement('th');
    tableRow.appendChild(tableHead);
  }else if(i===hours.length){
    tableHead.innerText=('Total sales for the day' );
  }
}
function CookieStand(minSales,maxSales,averageSales,location){
  this.minSales=minSales;
  this.maxSales=maxSales;
  this.averageSales=averageSales;
  this.location=location;
}
CookieStand.prototype.data=function(){
  tableRow=document.createElement('tr');
  table.appendChild(tableRow);
  tableHead=document.createElement('th');
  houlrySum=0;
  for(let i=0;i<hours.length;i++){

    if(i===hours.length-1){
      tableData.innerText=houlrySum;
      tableRow.appendChild(tableData);
      tableData=document.createElement('td');
      break;
    }
    if(i===0){
      tableHead.innerText=this.location;
      tableRow.appendChild(tableHead);
    }
    tableData.innerText=Math.floor((Math.random()*(this.maxSales-this.minSales-1)+this.minSales)*this.averageSales);
    locationSum.push(parseInt(tableData.innerText));
    houlrySum+=parseInt(tableData.innerText);
    tableRow.appendChild(tableData);
    tableData=document.createElement('td');
  }

};
let Seattle= new CookieStand(23,65,6.3,'Seattle');
Seattle.data();
let Tokyo=new CookieStand(3,24,1.2,'Tokyo');
Tokyo.data();
let Dubai=new CookieStand(11,38,3.7,'Dubai');
Dubai.data();
let Paris=new CookieStand(20,38,2.3,'Paris');
Paris.data();
let Lima=new CookieStand(2,16,4.6,'Lima');
Lima.data();
table.appendChild(footer);
tableRow=document.createElement('tr');
footer.appendChild(tableRow);
tableHead=document.createElement('th');
tableRow.appendChild(tableHead);
tableHead.innerText='total';
for(let j=0;j<hours.length-1;j++){
  count=0;
  for(let i=0+j;i<locationSum.length;i+=15){

    count+=locationSum[i];
  }
  tableData=document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.innerText=count;
}
houlrySum=0;
for(let i=0;i<locationSum.length;i++){
  houlrySum+=locationSum[i];
}
tableData=document.createElement('td');
tableRow.appendChild(tableData);
tableData.innerText=houlrySum;
console.log(locationSum.length);
//-------------------------------------------------------------------------------
// 'use strict';
// let hours=['','6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
// let houlrySum=0;
// let locationSum=[];
// let main=document.getElementById('sales');
// let tableHead=document.createElement('th');
// let tableRow=document.createElement('tr');
// let table=document.createElement('table');
// let tableData=document.createElement('td');
// let footer=document.createElement('tfoot');
// let header=document.createElement('thead');
// main.appendChild(table);
// table.appendChild(tableRow);
// tableRow.appendChild(tableHead);

// table.appendChild(header);
// header.appendChild(tableRow);
// tableRow.appendChild(tableHead);
// for(let i=0;i<=hours.length;i++){
//   if(i<hours.length){
//     tableHead.innerText=(hours[i]);
//     tableHead=document.createElement('th');
//     tableRow.appendChild(tableHead);
//   }else if(i===hours.length){
//     tableHead.innerText=('Total sales for the day' );
//   }
// }
// function CookieStand(minSales,maxSales,averageSales,location){
//   this.minSales=minSales;
//   this.maxSales=maxSales;
//   this.averageSales=averageSales;
//   this.location=location;
// }
// CookieStand.prototype.data=function(){
//   tableRow=document.createElement('tr');
//   table.appendChild(tableRow);
//   tableHead=document.createElement('th');
//   houlrySum=0;
//   for(let i=0;i<hours.length;i++){

//     if(i===hours.length-1){
//       tableData.innerText=houlrySum;
//       tableRow.appendChild(tableData);
//       tableData=document.createElement('td');
//       break;
//     }
//     if(i===0){
//       tableHead.innerText=this.location;
//       tableRow.appendChild(tableHead);
//     }
//     tableData.innerText=Math.floor((Math.random()*(this.maxSales-this.minSales-1)+this.minSales)*this.averageSales);
//     locationSum.push(parseInt(tableData.innerText));
//     houlrySum+=parseInt(tableData.innerText);

//     tableRow.appendChild(tableData);
//     tableData=document.createElement('td');
//   }

// };

// let Seattle= new CookieStand(23,65,6.3,'Seattle');
// Seattle.data();
// let Tokyo=new CookieStand(3,24,1.2,'Tokyo');
// Tokyo.data();
// let Dubai=new CookieStand(11,38,3.7,'Dubai');
// Dubai.data();
// let Paris=new CookieStand(20,38,2.3,'Paris');
// Paris.data();
// let Lima=new CookieStand(2,16,4.6,'Lima');
// Lima.data();
// table.appendChild(footer);
// tableRow=document.createElement('tr');
// footer.appendChild(tableRow);
// tableHead=document.createElement('th');
// tableRow.appendChild(tableHead);
// tableHead.innerText='total';
// for(let j=0;j<15;j++){
//   let count=0;
//   for(let i=0+j;i<75;i+=15){

//     count+=locationSum[i];
//   }
//   tableData=document.createElement('td');
//   tableRow.appendChild(tableData);
//   tableData.innerText=count;
// }
// houlrySum=0;
// for(let i=0;i<locationSum.length;i++){
//   houlrySum+=locationSum[i];
// }
// tableData=document.createElement('td');
// tableRow.appendChild(tableData);
// tableData.innerText=houlrySum;
