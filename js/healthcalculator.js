console.log("Connected");

let centimeterBox = document.getElementById('centimeterBox');
let inchBox = document.getElementById('inchBox');

let heightRadios = document.querySelectorAll("input[name='heightType']");
let inputAge = document.getElementById('inputAge');
let inputWeight = document.getElementById('inputWeight');
let inputCentimeter = document.getElementById('inputCentimeter');

let inputFoot = document.getElementById('inputFoot');
let inputInch = document.getElementById('inputInch');


let calculate = document.getElementById('calculate');
let result = document.getElementById('result');

let settingsBtn = document.getElementById('settingsBtn');
let settingSection = document.getElementById('settingSection');
settingsBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if (settingSection.style.display === "none"){
        settingSection.style.display = "block"
        settingsBtn.innerHTML = "<i class='fa fa minus'></i> settings"
    } else {
        settingSection.style.display = "none"
        settingsBtn.innerHTML = "<i class='fa fa minus'></i> settings"
    }
}) ;

let introAlert = document.getElementById('introAlert');
setTimeout(() => {
    introAlert.classList.add('hide')
    introAlert.classList.add('show')
    introAlert.classList.add('d-none')
}, 5000)

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var  currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("navbar").style.top = "0";
    }else {
        document.getElementById("navbar").style.top = "-50px";
    }
prevScrollpos = currentScrollpos;
scrollFunction();
}

let topBtn = document.getElementById('topBtn');

function scrollFunction(){
    if (document.body.scrollTop >30 || document.documentElement.scrollTop > 30) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function scrollFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
topBtn.addEventListener('click', () => {
    goTop();
});

let click = 0;

function darkMode() {
    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }
    var element = document.body;
    var element = document.querySelectorAll('.card');
    var element = document.querySelectorAll('.card-body');
    var element = document.querySelectorAll('h5');
    var element = document.querySelectorAll('h4');
    var element = document.querySelectorAll('.form-control');
    var element = document.querySelectorAll('aa');
    var element = document.querySelectorAll('label');
    var element = document.querySelectorAll('select');
    var element = document.querySelectorAll('span');
    var element = document.querySelectorAll('ul');
    var element = document.querySelectorAll('nav');
    var element = document.querySelectorAll('.list-group-item');
    var element = document.querySelectorAll('.text-muted');

}

function copyCalorie() {
    var copyText = document.getElementById("calorieResult");

    copyText.select();
    copyText.setSelectionRange(0, 4567);

    document.execCommand("copy");

    alert("copied text: " + copyText.value);
}


for (const item of heightRadios) {
    item.addEventListener('click', (e) => {
        if (e.target.value === "centimeter") {
            inchBox.style.display = 'none';
            centimeterBox.style.display = 'block';
        } else if (e.target.value === "inches&foot"){
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
    let gender = document.querySelector("input[name='gender']: checked").value;
    let physicalState = document.getElementById('physicalState').value;
    let height;

    if (heightType === "centimeter") {
        let centimeter = Number(inputCentimeter.value);
        height = centimeter;
    } else {
        console.log("You used inch section");
        let foot = Number(inputFoot.value);
        let inches = Number(inputInch.value);
        let totalInches = Number()
    }

}