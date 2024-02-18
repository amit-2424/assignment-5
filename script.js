
const AllBtn = document.getElementsByClassName("single-sit");

let count = parseInt(getElementById("totalSeat"));
let count2 = parseInt(getElementById("sitCount"));
let count3 = 0;
let count4 = 0;


    for(const sit of AllBtn){
        sit.addEventListener("click",function(event){
            // count sit
            count = count - 1;
            count2 = count2 + 1;
            count3 = count3 + 5500;
            setElementById("totalSeat",count);
            setElementById("sitCount",count2);
            setElementById("totalPrice",count3);
    
            // add element
            const elementText = event.target.innerText;
            setBgColor(elementText);
            console.log(elementText);
    
            // set dynamic element
            const dynamicElement = document.getElementById("dynamicElemint");
            
            const div = document.createElement("div");
    
            const p1 = document.createElement("p");
            p1.innerText = elementText;
    
            const p2 = document.createElement("p");
            p2.innerText = "Ecomomic";
    
            const p3 = document.createElement("p");
            p3.innerText = 5500;
            
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
    
            dynamicElement.appendChild(div);
            dynamicElement.classList.add("dynamic-element");
    
            sit.disabled = true;
        })
    }