let ausgabe = [];
let gesamt = 0;
let art = document.getElementById("art");
let betragInput = document.getElementById("betragInput");
let datumInput = document.getElementById("datumInput");
let buttonAdd = document.getElementById("buttonAdd");
let totalAcount = document.getElementById("totalAcount");

let listsBody = document.querySelector(".listsBody");



buttonAdd.addEventListener("click", ()=>{
    let amount = Number(betragInput.value);

    let listBody = document.createElement("div");
    listBody.classList.add("listBody")

    let bodyContentCategories = document.createElement("div");
    bodyContentCategories.classList.add('listcontent');
    listBody.appendChild(bodyContentCategories);
    bodyContentCategories.innerHTML += art.value;
    

    // =========================================================
    let bodyContentAmount = document.createElement("div");
    bodyContentAmount.classList.add('listcontent');
    listBody.appendChild(bodyContentAmount);
    bodyContentAmount.innerHTML += " €"+  amount   ;
   

    // =========================================================
    let bodyContentDatum = document.createElement("div");
    bodyContentDatum.classList.add('listcontent');
    listBody.appendChild(bodyContentDatum);
    bodyContentDatum.innerHTML += datumInput.value;
   

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
        totalAcount.innerHTML = "€" +gesamt

    })

 gesamt +=amount;
totalAcount.innerHTML = "€" +gesamt


    


    betragInput.value = "";
    datumInput.value = "";

});
