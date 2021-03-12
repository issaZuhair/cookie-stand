'use strict';
let Seattle	={
  minSeattleCust:23,
  maxSeattleCust:65,
  averageSales:6.3,
  salesSeattle:function(min,max){
    return Math.ceil(Math.random() * (max - min ) ) + min;
  },
};
let Tokyo={
  minTokyoCust:3,
  maxTokyoCust:24,
  averageSalesTokyo:6.3,
  salesTokyo:function(min,max){
    return Math.ceil(Math.random() *(max-min)+min);
  },
};
let Dubai	={
  minDubaiCust:11,
  maxDubaiCust:38,
  averageSalesDubai:6.3,
  salesDubai:function(min,max){
    return Math.ceil(Math.random() *(max-min)+min);
  },
};
let Paris	={
  minParisCust:20,
  maxParisCust:38,
  averageSalesParis:6.3,
  salesParis:function(min,max){
    return Math.ceil(Math.random() *(max-min)+min);
  },
};
let Lima	={
  minLimaCust:2,
  maxLimaCust:16,
  averageSalesLima:6.3,
  salesLima:function(min,max){
    return Math.ceil(Math.random() * (max - min + 1) ) + min;
  },
};
let seattleTotal=0;
let seattleSalesHourly=[0];
let main=document.getElementById('sales');
let tokyo=document.getElementById('sales');
let dubai=document.getElementById('sales');
let paris=document.getElementById('sales');
let lima=document.getElementById('sales');
let ulist=document.createElement('ul');
let utlist=document.createElement('ul');
let uvlist=document.createElement('ul');
let uxlist=document.createElement('ul');
let uylist=document.createElement('ul');
let list=document.createElement('li');
main.appendChild(ulist);
for(let i=6;i<=12;i++){
  ulist.appendChild(list);
  seattleSalesHourly[i-6]=Math.floor(Seattle.salesSeattle(Seattle.minSeattleCust,Seattle.maxSeattleCust)*Seattle.averageSales);
  list.innerText=i+'am:seattle '+seattleSalesHourly[i-6];
  list=document.createElement('li');
  seattleTotal+=seattleSalesHourly[i-6];
}
for(let i=1;i<=7;i++){
  ulist.appendChild(list);
  seattleSalesHourly[7+i]=Math.floor(Seattle.salesSeattle(Seattle.minSeattleCust,Seattle.maxSeattleCust)*Seattle.averageSales);
  list.innerText=i+'pm:seattle '+seattleSalesHourly[7+i];
  list=document.createElement('li');
  seattleTotal+=seattleSalesHourly[7+i];
}
ulist.appendChild(list);
list.innerText='seattle'+seattleTotal;
list=document.createElement('li');
let tokyoTotal=0;
let tokyoSalesHourly=[0];
tokyo.appendChild(utlist);
for(let i=6;i<=12;i++){
  utlist.appendChild(list);
  tokyoSalesHourly[i-6]=Math.floor(Tokyo.salesTokyo(Tokyo.minTokyoCust,Tokyo.maxTokyoCust)*Tokyo.averageSalesTokyo);
  list.innerText=i+'am: tokyo '+tokyoSalesHourly[i-6];
  list=document.createElement('li');
  tokyoTotal+=tokyoSalesHourly[i-6];
}
for(let i=1;i<=7;i++){
  utlist.appendChild(list);
  tokyoSalesHourly[7+i]=Math.floor(Tokyo.salesTokyo(Tokyo.minTokyoCust,Tokyo.maxTokyoCust)*Tokyo.averageSalesTokyo);
  list.innerText=i+'pm: tokyo '+ tokyoSalesHourly[7+i];
  list=document.createElement('li');
  tokyoTotal+= tokyoSalesHourly[7+i];
}
utlist.appendChild(list);
list.innerText='tokyo'+tokyoTotal;
list=document.createElement('li');
dubai.appendChild(uvlist);
let dubaiTotal=0;
let dubaiSalesHourly=[0];
for(let i=6;i<=12;i++){
  uvlist.appendChild(list);
  dubaiSalesHourly[i-6]=Math.floor(Dubai.salesDubai(Dubai.minDubaiCust,Dubai.maxDubaiCust)*Dubai.averageSalesDubai);
  list.innerText=i+'am: Dubai '+dubaiSalesHourly[i-6];
  list=document.createElement('li');
  dubaiTotal+=dubaiSalesHourly[i-6];
}
for(let i=1;i<=7;i++){
  uvlist.appendChild(list);
  dubaiSalesHourly[7+i]=Math.floor(Dubai.salesDubai(Dubai.minDubaiCust,Dubai.maxDubaiCust)*Dubai.averageSalesDubai);
  list.innerText=i+'pm: Dubai '+dubaiSalesHourly[7+i];
  list=document.createElement('li');
  dubaiTotal+=dubaiSalesHourly[7+i];
}
uvlist.appendChild(list);
list.innerText='Dubai'+dubaiTotal;
list=document.createElement('li');
paris.appendChild(uxlist);
let parisSalesHourly=[0];
let parisTotal=0;
for(let i=6;i<=12;i++){
  uxlist.appendChild(list);
  parisSalesHourly[i-6]=Math.floor(Paris.salesParis(Paris.minParisCust,Paris.maxParisCust)*Paris.averageSalesParis);
  list.innerText=i+'am: paris '+parisSalesHourly[i-6];
  list=document.createElement('li');
  parisTotal+=parisSalesHourly[i-6];
}
for(let i=1;i<=7;i++){
  uxlist.appendChild(list);
  parisSalesHourly[i+7]=Math.floor(Paris.salesParis(Paris.minParisCust,Paris.maxParisCust)*Paris.averageSalesParis);
  list.innerText=i+'pm: paris '+parisSalesHourly[i+7];
  list=document.createElement('li');
  parisTotal+=parisSalesHourly[i+7];
}
uxlist.appendChild(list);
list.innerText='paris'+(parisTotal);
list=document.createElement('li');
lima.appendChild(uylist);
let limaTotal=0;
let limaSalesHourly=[0];
for(let i=6;i<=12;i++){
  uylist.appendChild(list);
  limaSalesHourly[i-6]=Math.floor(Lima.salesLima(Lima.minLimaCust,Lima.maxLimaCust)*Lima.averageSalesLima);
  list.innerText=i+'am: lima '+limaSalesHourly[i-6];
  list=document.createElement('li');
  limaTotal+=limaSalesHourly[i-6];
}
for(let i=0;i<7;i++){
  uylist.appendChild(list);
  limaSalesHourly[i+7]=Math.floor(Lima.salesLima(Lima.minLimaCust,Lima.maxLimaCust)*Lima.averageSalesLima);
  list.innerText=i+'pm: lima '+limaSalesHourly[7+i];
  list=document.createElement('li');
  limaTotal+=limaSalesHourly[7+i];
}
uylist.appendChild(list);
list.innerText='lima'+limaTotal;
list=document.createElement('li');
console.log(limaSalesHourly);
