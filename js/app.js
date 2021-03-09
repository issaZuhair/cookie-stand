'use strict';
let hours=['','6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
let houlrySum=0;
let locationSum=0;
let main=document.getElementById('sales');
let tableHead=document.createElement('th');
let tableRow=document.createElement('tr');
let table=document.createElement('table');
let tableData=document.createElement('td');
let footer=document.createElement('tfoot');
main.appendChild(table);
table.appendChild(tableRow);
tableRow.appendChild(tableHead);

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
    tableData.innerText=Math.floor(Math.random()*(this.maxSales-this.minSales)+this.minSales);
    houlrySum+=parseInt(tableData.innerText);
    if(i===2){
      locationSum=houlrySum;
      console.log(locationSum);
    }
    tableRow.appendChild(tableData);
    tableData=document.createElement('td');
  }
};
tableRow=document.createElement('tr');
tableHead=document.createElement('th');
table.appendChild(footer);
footer.appendChild(tableRow);
tableRow.appendChild(tableHead);
tableData.innerText=locationSum;
tableRow.appendChild(tableData);
tableData=document.createElement('td');
tableHead.innerText='issa';
let Seattle= new CookieStand(10,100,15,'Seattle');
Seattle.data();
let Tokyo=new CookieStand(25,50,10,'Tokyo');
Tokyo.data();
let Dubai=new CookieStand(25,50,10,'Dubai');
Dubai.data();
let Paris=new CookieStand(25,50,10,'Paris');
Paris.data();
let Lima=new CookieStand(25,50,10,'Lima');
Lima.data();
// 'use strict';
// let hours=['','6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
// let houlrySum=0;
// let locationSum=0;
// let main=document.getElementById('sales');
// let tableHead=document.createElement('th');
// let tableRow=document.createElement('tr');
// let table=document.createElement('table');
// let tableData=document.createElement('td');
// let x=[];
// main.appendChild(table);
// table.appendChild(tableRow);
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
//     if(i===0){
//       tableHead.innerText=this.location;
//       tableRow.appendChild(tableHead);
//     }
//     if(i===hours.length-1){
//       tableData.innerText=houlrySum;
//       tableRow.appendChild(tableData);
//       tableData=document.createElement('td');
//       break;
//     }
//     tableData.innerText=Math.floor(Math.random()*(this.maxSales-this.minSales)+this.minSales);
//     houlrySum+=parseInt(tableData.innerText);
//     tableRow.appendChild(tableData);
//     tableData=document.createElement('td');
//   }
// };
// let Seattle= new CookieStand(10,100,15,'Seattle');
// Seattle.data();
// let Tokyo=new CookieStand(25,50,10,'Tokyo');
// Tokyo.data();
// let Dubai=new CookieStand(25,50,10,'Dubai');
// Dubai.data();
// let Paris=new CookieStand(25,50,10,'Paris');
// Paris.data();
// let Lima=new CookieStand(25,50,10,'Lima');
// Lima.data();
// let Total=new CookieStand(0,0,0,'sum');
// Total.data();
