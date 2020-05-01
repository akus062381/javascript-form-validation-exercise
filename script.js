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
        nameLabel.textContent = "Name is Required!"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCar() {
    let yearInput = document.querySelector("#car-year")
    let yearInfo = yearInput.value 
    let parentEl = yearInput.parentElement
    let makeInput = document.querySelector("#car-make")
    let makeInfo = makeInput.value
    let modelInput = document.querySelector("#car-model")
    let modelInfo = modelInput.value

    if (yearInfo !== "" && makeInfo !== "" && modelInfo !== "") {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateDate() {
    let dateInput = document.querySelector("#start-date")
    let dateInfo = dateInput.value 
    let parentEl = dateInput.parentElement

    if (dateInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Date field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateDays() {
    let daysInput = document.querySelector("#days")
    let daysInfo = daysInput.value 
    let parentEl = daysInput.parentElement

    if (daysInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCard() {
    let cardInput = document.querySelector("#credit-card")
    let cardInfo = cardInput.value 
    let parentEl = cardInput.parentElement

    if (cardInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCvv() {
    let cvvInput = document.querySelector("#cvv")
    let cvvInfo = cvvInput.value 
    let parentEl = cvvInput.parentElement

    if (cvvInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateExp() {
    let expInput = document.querySelector("#expiration")
    let expInfo = expInput.value 
    let parentEl = expInput.parentElement

    if (expInfo) {
        //do something if it is valid
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        //do something else if it is invalid
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

