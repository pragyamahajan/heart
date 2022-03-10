# Project Name
> Outline a brief description of your project.

> [Live demo here](https://heartfit-dsn.netlify.app/).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Usage](#usage)
* [Contact](#contact)

## General Information
- We live in an era where computers can predict weather, stocks, as well as human thoughts too.. Then why are we still lagging back in healthcare, why are we still hearing, “deaths due to sudden cardiac arrest!” 
- Can’t computers predict heart health? No, they can. The only problem is ‘Accessibility’. We are in need of a project wherein a person should be able to check his/her heart health or so called the probability of having Cardiac disease ANYTIME, ANYWHERE, EASILY, FOR FREE. Just with some common inputs!!
- Once the diagnosis is done, the project should also suggest measures accordingly.
- We have developed a web application that can easily predict the possibility of a user having a heart attack.
- With the help of html form we will collect the data from the user, integrate it with javascript and with the help of healthAPI we will showcase the percentage of risk of having cardiac arrest, also suggesting tips accordingly.
- Project also consists of a chatbot that will be used for Hospital appointment booking when the user gets acknowledged as high risk.
- The second major element of the website is the Advanced BMI/BMR calculator.
The calculator will subsequently also show how less or more the weight of the user is, calories required to get in balance, tips according to the BMI, BMR charts, etc.
- Final part of the project displays the various heart diseases linked directly or indirectly, showing its symptoms, precautions, and the best hospital in India for particular disease, locating it with the help of Google Maps API on our website.
- Website will be responsive so as to be accessible on mobile phones, tabs, laptops, and PCs. To make the website function quickly, the website is authentication-free, and there is no database attached and not data has been stored that will also maintain the privacy of the user's medical details. 


## Technologies Used
- HTML5
- CSS3
- Javascript
- healthAPI
- collect.chat
- GoogleMapsAPI

## Screenshots
![hp1](./img/ss1.png)
![hp2](./img/ss2.png)

![hd1](./img/ss3.png)
![hd2](./img/ss4.png)

![bmi](./img/ss5.png)
![bmr](./img/ss6.png)

## Usage

> Its Easy to Use Website
> Input generic information like age, sex, no. of cigarettes smokes per day,cholestrol level, blood pressure,whether diabetic patient, sugar level, and heartrate.
> For BMI, BMR input height, weight, age, and exercise type.

```
setTimeout(() => {
        fetch(`https://heartapi.herokuapp.com/predict?age=${age}&sex=${sex}&cigs=${cigs}&chol=${cholestrol}&sBP=${sBP}&dia=${diabetes}&dBP=${dBP}&gluc=${glucose}&hRate=${heartRate}`)
        .then(res => res.json())
        .then(data => {
          prediction = parseFloat(data['probability'][0][1]).toFixed(5);
          console.log(prediction)
          document.querySelector('.loader').style.display = 'none';
          if (cigs > 0 & prediction > 0.07) {
            document.querySelector('.clearfix').innerHTML = `
            <p class="nl-form">Quit Smoking Today<br>Predicted probability of having a coronary heart disease (Heart Attack)is ${prediction*100} % <br>Please Consult Cardiologist</p>`;
          }
          else if (cigs > 1 & prediction < 0.07){
            document.querySelector('.clearfix').innerHTML = `
            <p class="nl-form">Quit Smoking Today<br>Predicted probability of having a coronary heart disease (Heart Attack) is ${prediction*100} %</p>`;
          }
            else{
              document.querySelector('.clearfix').innerHTML = `
              <p class="nl-form">Predicted probability of having a coronary heart disease (Heart Attack) is ${prediction*100} %</p>`;} 
        })
   ```
        
## Contact
Created by [@pragyamahajan](https://github.com/pragyamahajan) - feel free to contact me!
