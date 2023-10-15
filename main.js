
function dayValidation(dayGiven) {
    if(dayGiven.trim().length == 0){
        document.querySelector('.day_error').innerText = "This field is required";
        const label = document.getElementById('day_label');
        const input = document.getElementById('day');
        label.style.color = 'red';
        input.style.border = 'solid red';
        return false
    }
    if (dayGiven < 1 || dayGiven > 31) {
        document.querySelector('.day_error').innerText = "Must be a valid day";
        const label = document.getElementById('day_label');
        const input = document.getElementById('day');
        label.style.color = 'red';
        input.style.border = 'solid red';
        return false
    }
    else{
        return true
    }
    
}

function monthValidation(monthGiven) {
    if(monthGiven.trim().length == 0){
        document.querySelector('.month_error').innerText = "This field is required";
        const label = document.getElementById('month_label');
        const input = document.getElementById('month');
        label.style.color = 'red';
        input.style.border = 'solid red';
        return false
    }
    if (monthGiven < 1 || monthGiven > 12) {
        document.querySelector('.month_error').innerText = "Must be a valid month";
        const label = document.getElementById('month_label');
        const input = document.getElementById('month');
        label.style.color = 'red';
        input.style.border = 'solid red';
        
        return false

    }
    else{
        return true
    }
    
}

document.getElementById('ageForm').addEventListener('submit', function(event) {
    const daydate = document.getElementById('day').value;
const monthdate = document.getElementById('month').value;
const yeardate = document.getElementById('year').value;

clearValidationError()
    event.preventDefault();
    

    // const birthdate = document.getElementById('birthdate').value;
    if (dayValidation(daydate)) {
        if (monthValidation(monthdate)) {
            
        
        
    const birthDate = new Date(`${yeardate}-${monthdate}-${daydate}`);


    const today = new Date();

    console.log(birthDate)

    if (!isValidDate(birthDate) || birthDate > today) {
        displayValidationError("Invalid Date.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor(ageInMilliseconds / (30 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

    document.querySelector('.year_span').innerText = ageInYears
    document.querySelector('.month_span').innerText = ageInMonths
    document.querySelector('.day_span').innerText = ageInDays
    
    }    
}

});


function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

function displayValidationError(message) {
    document.querySelector('.year_error').innerText = message;

    const label = document.getElementById('year_label');
    const input = document.getElementById('year');
    label.style.color = 'red';
    input.style.border = 'solid red';

}

function clearValidationError() {
    const day_label = document.getElementById('day_label');
    const day_input = document.getElementById('day');
    day_label.style.color = '#717171';
    day_input.style.border = '2px solid #DDDDDD'; 
    
    const month_label = document.getElementById('month_label');
    const month_input = document.getElementById('month');
    month_label.style.color = '#717171';
    month_input.style.border = '2px solid #DDDDDD'; 
    
    const year_label = document.getElementById('year_label');
    const year_input = document.getElementById('year');
    year_label.style.color = '#717171';
    year_input.style.border = '2px solid #DDDDDD'; 
    

    document.querySelector('.year_error').innerText = "";
    document.querySelector('.month_error').innerText = "";
    document.querySelector('.day_error').innerText = "";
}
