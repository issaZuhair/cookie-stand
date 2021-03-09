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
    tableData.innerText=Math.floor((Math.random()*(this.maxSales-this.minSales-1)+this.minSales)*this.averageSales);
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
tableHead.innerText='Total for the hour';
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
