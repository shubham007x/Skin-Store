var carr=JSON.parse(localStorage.getItem('cart')) || []
document.addEventListener("DOMContentLoaded", function() {

    var sum=carr.reduce((acc,ele)=>{
        return acc+ +ele.price
    },0)
    
    var ans = document.querySelector("#finalcost");
    ans.textContent = ":-"+"$"+sum;
    // Attach event listener to the form submit event
    var submitBtn = document.querySelector("button");
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var country = document.getElementById("select").value;
        var fullname = document.getElementById("fullname").value;
        var address = document.getElementById("address").value;
        var contact = document.getElementById("contact").value;
        var cardNumber = document.getElementById("number").value;
        var nameOnCard = document.getElementById("name").value;
        var expiryMonth = document.getElementById("month").value;
        var expiryYear = document.getElementById("year").value;
        var securityCode = document.getElementById("cv").value;

        // Validate the form inputs
        if (
            country === "" ||
            fullname === "" ||
            address === "" ||
            contact === "" ||
            cardNumber === "" ||
            nameOnCard === "" ||
            expiryMonth === "Month" ||
            expiryYear === "Year" ||
            securityCode === ""
        ) {
            alert("Please fill all the required fields.");
            return;
        }

        // Save the form data in local storage
        var formData = {
            country: country,
            fullname: fullname,
            address: address,
            contact: contact,
            cardNumber: cardNumber,
            nameOnCard: nameOnCard,
            expiryMonth: expiryMonth,
            expiryYear: expiryYear,
            securityCode: securityCode
        };
        localStorage.setItem("formData", JSON.stringify(formData));

        // Show success message
        alert("Payment completed successfully.");
        return;
    });
});

