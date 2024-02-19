
function getElementById(id){
   const getElement = document.getElementById(id).innerText;
   return getElement;
}
function setElementById(id,value){
    document.getElementById(id).innerText = value;
}

function setBgColor(id){
    const element = document.getElementById(id);
    element.style.background = "green";
    element.style.color = "white";
}

function addDisabledClass(id){
    document.getElementById(id).classList.add("btn-disabled");
}

function setDynamicElement(elementText){
    const dynamicElement = document.getElementById("dynamicElement");
    
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    p1.innerText = elementText;
    const p2 = document.createElement("p");
    p2.innerText = "Economic";
    const p3 = document.createElement("p");
    p3.innerText = 550;
    
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    dynamicElement.appendChild(div);
    dynamicElement.classList.add("dynamic-element");
    
}

function grandTotal(coupon){
    const grandTotalInitial = getElementById("totalPrice");
   if(coupon == "NEW15"){
     const grandTotalFirst = grandTotalInitial * 0.85;
     setElementById("grandTotal",grandTotalFirst);
   }
    if(coupon == "Couple 20"){
     const grandTotalSecond = grandTotalInitial * 0.80;
     setElementById("grandTotal",grandTotalSecond);
    }
      
    
}



