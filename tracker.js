let ausgabe = [];
let gesamt = 0;
let art = document.getElementById("art");
let betragInput = document.getElementById("betragInput");
let datumInput = document.getElementById("datumInput");
let buttonAdd = document.getElementById("buttonAdd");
let bodyItems = document.getElementById("body-items");
let table = document.getElementById("users");
let tr = document.getElementById("row");


buttonAdd.addEventListener("click", ()=>{
let tbody = document.createElement("TBODY");  
 let tdcategories = document.createElement("TD");
 tbody.appendChild(tdcategories);
 tdcategories.classList.add("td");
 tdcategories.setAttribute("id","categories")
 tr.appendChild(tdcategories);
 tdcategories.innerHTML += art.value;
// ==========================================

let tdamount = document.createElement("TD");
 tbody.appendChild(tdamount);
 tdamount.classList.add("td");
 tdamount.setAttribute("id","amount")
 tr.appendChild(tdamount);
 tdamount.innerHTML += betragInput.value;

 // ==========================================

let tddatum = document.createElement("TD");
tbody.appendChild(tddatum);
tddatum.classList.add("td");
tddatum.setAttribute("id","datum")
tr.appendChild(tddatum);
tddatum.innerHTML = datumInput.value;

 // ==========================================

let tdbuttondelete = document.createElement("TD");
tdbuttondelete.classList.add('td');
let buttondelete = document.createElement('button');
buttondelete.classList.add('button');
tdbuttondelete.appendChild(buttondelete);
tr.appendChild(tdbuttondelete);
buttondelete.innerHTML ="Delete";









   



    




    
})
