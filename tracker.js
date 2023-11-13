
let gesamt = 0;
let art = document.getElementById("art");
let betragInput = document.getElementById("betragInput");
let datumInput = document.getElementById("datumInput");
let buttonAdd = document.getElementById("buttonAdd");
let totalAcount = document.getElementById("totalAcount");
let listsBody = document.querySelector(".listsBody");



let ausgabe =  JSON.parse(localStorage.getItem("arrayAusgabe"));
let datum = JSON.parse(localStorage.getItem("arrayDatum"));
let categories = JSON.parse(localStorage.getItem("arrayCategories"));
if (datum === null) datum = [];
if(categories === null) categories = [];
if(ausgabe === null) ausgabe = [];




buttonAdd.addEventListener("click", ()=>{
     let amount = Number(betragInput.value);

    let listBody = document.createElement("div");
    listBody.classList.add("listBody")

    let bodyContentCategories = document.createElement("div");
    bodyContentCategories.classList.add('listcontent');
    listBody.appendChild(bodyContentCategories);
    bodyContentCategories.innerHTML += art.value;
     // =========================================================

     categories.push(art.value);
     localStorage.setItem("arrayCategories", JSON.stringify(categories));
        // =========================================================
    

    // =========================================================
     bodyContentAmount = document.createElement("div");
    bodyContentAmount.classList.add('listcontent');
    listBody.appendChild(bodyContentAmount);
    bodyContentAmount.innerHTML +=  " €"+  amount   ;
    // =========================================================

    ausgabe.push(amount);
    localStorage.setItem("arrayAusgabe", JSON.stringify(ausgabe));
       // =========================================================
   

    // =========================================================
    let bodyContentDatum = document.createElement("div");
    bodyContentDatum.classList.add('listcontent');
    listBody.appendChild(bodyContentDatum);
    bodyContentDatum.innerHTML += datumInput.value;
    // =========================================================

    datum.push(datumInput.value);
    localStorage.setItem("arrayDatum", JSON.stringify(datum));
   

    // =========================================================
    let buttonContentDelete = document.createElement("div");
    buttonContentDelete.classList.add('listcontent');
    listBody.appendChild(buttonContentDelete);
    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btnDelete');
    buttonContentDelete.appendChild(btnDelete);
    btnDelete.innerHTML = "Delete";
    listsBody.appendChild(listBody);

    btnDelete.addEventListener("click",()=>{
        listsBody.removeChild(listBody);
        gesamt -=amount;
        totalAcount.innerHTML = "€" +gesamt;

    })

 gesamt +=amount;
totalAcount.innerHTML = "€" +gesamt;


    


    betragInput.value = "";
    datumInput.value = "";

});
localStorage.removeItem("arrayAusgabe");
localStorage.removeItem("arrayDatum");
localStorage.removeItem("arrayCategories");

