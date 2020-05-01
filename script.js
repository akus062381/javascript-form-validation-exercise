let form = document.querySelector("#parking-form")

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    validateName();
    validateDate();
    validateDays();
    validateCard();
    validateCvv();
    validateExp();
    validateCar();

})

    function validateName() {
    let nameInput = document.querySelector("#name")
    let nameInfo = nameInput.value 
    let parentEl = nameInput.parentElement

    document.getElementsByTagName("label")[0].setAttribute("id", "name-label");
    let nameLabel = document.querySelector("#name-label")

    if (nameInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        nameLabel.textContent = "Name is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCar() {
    let yearInput = document.querySelector("#car-year")
    let yearInfo = yearInput.value 
    let parentEl = document.querySelector("#car-field")
    let makeInput = document.querySelector("#car-make")
    let makeInfo = makeInput.value
    let modelInput = document.querySelector("#car-model")
    let modelInfo = modelInput.value

    document.getElementsByTagName("label")[1].setAttribute("id", "car-label");
    let carLabel = document.querySelector("#car-label")

    y = document.getElementById("car-year").value

   
    if (isNaN(y) || y < 1900 || y > 2020 || makeInfo === "" || modelInfo === "") {
        //do something else if it is invalid
        console.log("Car field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        carLabel.textContent = "Car information is required"
        formIsValid = false
    } else if (yearInfo !== "" && makeInfo !== "" && modelInfo !== "") {
        //do something if it is valid
        console.log("Car field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    }
}

function validateDate() {
    let dateInput = document.querySelector("#start-date")
    let dateInfo = dateInput.value 
    let parentEl = dateInput.parentElement
    let currentDate = new Date();
    dateInfo = new Date(dateInfo);

    document.getElementsByTagName("label")[2].setAttribute("id", "date-label");
    let dateLabel = document.querySelector("#date-label")

    if (dateInfo > currentDate) {
        console.log("Date field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("Date field invalid")
        parentEl.classList.remove("input-valid")
        dateLabel.textContent = "Enter a date in the future"
        parentEl.classList.add("input-invalid")
        formIsValid = false 
    }
}

function validateDays() {
    let daysInput = document.querySelector("#days")
    let daysInfo = daysInput.value 
    let parentEl = daysInput.parentElement

    document.getElementsByTagName("label")[3].setAttribute("id", "days-label");
    let daysLabel = document.querySelector("#days-label")

    if (daysInfo) {
        //do something if it is valid
        console.log("Days field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Days field invalid")
        parentEl.classList.remove("input-valid")
        daysLabel.textContent = "Number of days is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCard() {
    let cardInput = document.querySelector("#credit-card")
    let cardInfo = cardInput.value 
    let parentEl = cardInput.parentElement

    document.getElementsByTagName("label")[4].setAttribute("id", "card-label");
    let cardLabel = document.querySelector("#card-label")

    if (cardInfo) {
        //do something if it is valid
        console.log("Card field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Card field invalid")
        parentEl.classList.remove("input-valid")
        cardLabel.textContent = "Credit card information is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCvv() {
    let cvvInput = document.querySelector("#cvv")
    let cvvInfo = cvvInput.value 
    let parentEl = cvvInput.parentElement

    document.getElementsByTagName("label")[5].setAttribute("id", "cvv-label");
    let cvvLabel = document.querySelector("#cvv-label")

    if (cvvInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        cvvLabel.textContent = "CVV is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateExp() {
    let expInput = document.querySelector("#expiration")
    let expInfo = expInput.value 
    let parentEl = expInput.parentElement

    document.getElementsByTagName("label")[6].setAttribute("id", "exp-label");
    let expLabel = document.querySelector("#exp-label")

    if (expInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        expLabel.textContent = "Expiration date is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

