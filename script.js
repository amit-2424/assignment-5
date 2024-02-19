
const AllBtn = document.getElementsByClassName("single-sit");

let count = parseInt(getElementById("totalSeat"));
let count2 = parseInt(getElementById("sitCount"));
let count3 = 0;
let count4 = 0;



for (const sit of AllBtn) {
    sit.addEventListener("click", function (event) {
        // alert massage
        if (count4 == 4) {
            alert("You parched maximum number seat");
        }
        if (count4 < 4) {
            // count seat
            count = count - 1;
            count2 = count2 + 1;
            count3 = count3 + 550;
            count4 = count4 + 1;
            setElementById("totalSeat", count);
            setElementById("sitCount", count2);
            setElementById("totalPrice", count3);


            // add element
            const elementText = event.target.innerText;
            setBgColor(elementText);

            // set dynamic element
            setDynamicElement(elementText);

            // button disabled;
            addDisabledClass(elementText);

        }

    })
}




// Grand total update

const couponBtn = document.getElementById("couponBtn");

couponBtn.addEventListener("click", function (event) {
    const couponInput = document.getElementById("couponInput").value;
    if (couponInput === "NEW15") {
        grandTotal(couponInput);
        event.target.parentNode.remove(event.target);
    } else if (couponInput === "Couple 20") {
        grandTotal(couponInput);
        event.target.parentNode.remove(event.target);
    }
});


// successBtn

const successBtn = document.getElementById("successBtnFinal");

successBtn.addEventListener("click", function () {

    const phoneNum = parseInt(document.getElementById("phoneNum").value);

    if (count4 == 0) {
        alert("you cannot select seat");
    }else if(phoneNum === NaN){
        alert("please Enter your Number");
    }else if(phoneNum < 0){
        alert("give this positive number");
    }

    if (phoneNum >= 0 && count4 > 0) {
        const mainContent = document.getElementById("mainContent");
        const footer = document.getElementById("footer");
        const popUP = document.getElementById("popUP");

        mainContent.classList.add("hidden");
        footer.classList.add("hidden");
        popUP.classList.remove("hidden");
    }


})