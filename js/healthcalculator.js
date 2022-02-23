console.log("Connected");

let centimeterBox = document.getElementById('centimeterBox');
let inchBox = document.getElementById('inchBox');

let heightRadios = document.querySelectorAll("input[name='heightType']");
let inputAge = document.getElementById('inputAge');
let inputWeight = document.getElementById('inputWeight');
let inputCentimeter = document.getElementById('inputCentimeter');

let InputInch = document.getElementById('InputInch');
let inputFoot = document.getElementById('inputFoot');


let calculate = document.getElementById('calculate');
let result = document.getElementById('result');

let settingsBtn = document.getElementById('settingsBtn');
let settingSection = document.getElementById('settingSection');
settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (settingSection.style.display === "none") {
        settingSection.style.display = "block"
        settingsBtn.innerHTML = "<i class='fa fa-minus'></i> Settings"
    } else {
        settingSection.style.display = "none"
        settingsBtn.innerHTML = "<i class='fa fa-plus'></i> Settings"
    }
});

let introAlert = document.getElementById('introAlert');
setTimeout(() => {
    introAlert.classList.add('hide')
    introAlert.classList.remove('show')
    introAlert.classList.add('d-none')
}, 5000);

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    scrollFunction();
}

let topBtn = document.getElementById('topBtn');

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
topBtn.addEventListener('click', () => {
    goTop();
});

let click = 0;
//TODO: Dark mode 
function darkMode() {
    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }
    var element = document.body;
    var element2 = document.querySelectorAll('.card');
    var element3 = document.querySelectorAll('.card-body');
    var h5s = document.querySelectorAll('h5');
    var h4s = document.querySelectorAll('h4');
    var inputs = document.querySelectorAll('.form-control');
    var anchors = document.querySelectorAll('a');
    var labels = document.querySelectorAll('label');
    var selects = document.querySelectorAll('select');
    var spans = document.querySelectorAll('span');
    var uls = document.querySelectorAll('ul');
    var lis = document.querySelectorAll('.list-group-item');
    var navs = document.querySelectorAll('nav');
    var textMuted = document.querySelectorAll('.text-muted');

}

function copyCalorie() {
    var copyText = document.getElementById("calorieResult");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);
}

//TODO: show to height input box according to height measuring type
for (const item of heightRadios) {
    item.addEventListener('click', (e) => {
        if (e.target.value === "centimeter") {
            inchBox.style.display = 'none';
            centimeterBox.style.display = 'block';
        } else if (e.target.value === "inches&foot") {
            inchBox.style.display = 'block';
            centimeterBox.style.display = 'none';
        }
    });
}

calculate.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = "#result";
    calculateHealth();
})

function calculateHealth() {
    let heightType = document.querySelector("input[name='heightType']:checked").value;
    let calculateItemChecked = document.querySelector("input[name='calculate']:checked").value;
    let age = Number(inputAge.value);
    let weight = Number(inputWeight.value);
    let gender = document.querySelector("input[name='gender']:checked").value;
    let physicalState = document.getElementById('physicalState').value;
    let height;
    //Convert Inches to centimeter for get the height in cm scale 
    if (heightType === "centimeter") {
        let centimeter = Number(inputCentimeter.value);
        height = centimeter;
    } else {
        console.log("You used inch section");
        let foot = Number(inputFoot.value);
        let inches = Number(inputInch.value);
        let totalInches = Number((foot * 12) + inches);
        let convertToCentimeter = Number(totalInches * 2.54);
        console.log(foot, inches, totalInches, convertToCentimeter);
        height = convertToCentimeter;
    }

    console.log(`Height ${height}, Weight ${weight}, Age ${age}, gender ${gender}, physical state ${physicalState}`);
    //TODO: Add a verification for calculation

    if (age == 0 || height == null || height === undefined || weight == 0 || physicalState === "none") {
        errorAlert.style.display = "block";
        successAlert.style.display = "none";
        result.innerHTML = `
        <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>`
        setTimeout(() => {
            result.innerHTML = `
            <h5 class="alert alert-danger d-block font-weight-bolder text-center">404 Error <i class="fa fa-exclamation-circle"></i> <br> No values has been given</h5>`
        }, 5000);
    }
    //! When all values is correct
    else {
        // !Calculate BMR (Heris BeneDict law)
        //According to gender
        let BMR;
        let calories;
        let kilojoules;
        let icon;
        if (gender === "male") {
            BMR = `${(66 + (13.7 * weight) + (5 * height)) - (6.8 * age)}`
            icon = 'male';
        } else {
            BMR = `${(655 + (9.6 * weight) + (1.8 * height)) - (4.7 * age)}`
            icon = 'female';
        }
        console.log(`Your BMR ${BMR}`);

        //TODO: Calculate  calorie according to physical state 
        let multipicationValue;
        if (physicalState === 'low') {
            multipicationValue = 1.2;
        } else if (physicalState === 'normal') {
            multipicationValue = 1.375;
        } else if (physicalState === 'medium') {
            multipicationValue = 1.55;
        } else if (physicalState === 'high') {
            multipicationValue = 1.725;
        } else if (physicalState === 'veryHigh') {
            multipicationValue = 1.9;
        } else {
            multipicationValue = "Choose the physical state"
        }
        calories = (BMR * multipicationValue);

        // TODO: Calculate KiloJoules from calories
        kilojoules = calories * 4.184;
        calories = Number(calories).toFixed(2);
        kilojoules = Number(kilojoules).toFixed(1);
        BMR = Number(BMR).toFixed(2);
        console.log(`Your calorie need ${calories}`);

        //TODO: Show the bodyBurnsValue let 
        let bodyBurning;
        let bodyBurningText;
        let multipicationValue2;
        let resultTypeChecked = document.querySelector("input[name='resultIn']:checked").value;
        if (resultTypeChecked === "kiloJoules") {
            bodyBurning = kilojoules;
            bodyBurningText = "kiloJoules";
            multipicationValue2 = "X 4.184";
        } else {
            bodyBurning = calories;
            bodyBurningText = "calories";
            multipicationValue2 = "";
        }

        // !Calculate BMI according to height and weight
        heightInMeter = `${height / 100}`;
        let BMI = `${weight / (heightInMeter**2)}`
        BMI = Number(BMI).toFixed(1);
        console.log(BMI, heightInMeter);
    }
}