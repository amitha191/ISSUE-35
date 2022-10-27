
var name_person=document.getElementById("name");
name_person.addEventListener("focusout",validateName);

function validateName(){
    var message =document.querySelector(".error-message");
    let pattern = /^[A-Za-z *]{5,50}$/;
    if(name_person.value.length==""){
        message.innerHTML= "Please fill out this field";
        name_person.style.border = "1px solid red";
        return false;
    }
    else if(pattern.test(name_person.value)){
        message.innerHTML= "";
        name_person.style.border = "1px solid green";
        return true;
    }
    else{
        message.innerHTML= "Number of letters should be between 5 and 50";
        name_person.style.border = "1px solid red";
        return false;
    }
    // else if((name_person.value.length <6) || (name_person.value.length>50)){
    //         message.innerHTML= "Number of letters should be between 5 and 50";
    //         console.log("number bet")
    //     }
    //     else{
    //         message.innerHTML= "";
    //     }
    }


var company_name=document.getElementById("company-name");
company_name.addEventListener("focusout",validateCompany);

function validateCompany(){
    var message1 =document.querySelector(".error-message-company");
    var check= company_name.value;
    if(check.length==""){
        message1.innerHTML= "Please fill out this field";
        company_name.style.border = "1px solid red";
        return false;
    }
    else if((check.length <6) || (check.length>50)){
        message1.innerHTML = "Number of letters should be between 5 and 50";
        company_name.style.border = "1px solid red";
        return false;
    }
    else{
        message1.innerHTML="";
        company_name.style.border = "1px solid green";
        return true;
    }
}


var dept = document.getElementById("dept");
dept.addEventListener("focusout",validateDept);

function validateDept(){
    var message3 =document.querySelector(".error-message-dept");
    if(dept.value=="Select"){
        message3.innerHTML = "Please fill out this field";
        return false;
    }
    else{
        message3.innerHTML="";
        return true;
    }
}


var email = document.getElementById('email');
email.addEventListener('change',changeLableEmail);

function changeLableEmail()
{
    var email_label = document.querySelector('.emailPhone');
    email_label.innerHTML = "Email";

    
var message = document.querySelector('.emailPhone-error');
let emalWorking = document.getElementById('email-phone-value')
emalWorking.addEventListener('input',validateEmail);
function validateEmail(){
    var check_email = document.getElementById('email-phone-value');
    var regexp = /@/;
    
    if(check_email.value.length==""){
        message.innerHTML = "Required";
        check_email.style.border = "1px solid red";
        return false;
    }
    else if(regexp.test(check_email.value)){
        check_email.style.border = "1px solid green";
        message.innerHTML = "";
        return true;
    }
    else{
        message.innerHTML = "Enter a valid email address";
        check_email.style.border = "1px solid red";
        return false;
    }
}

}

var phone = document.getElementById('phone');
phone.addEventListener('change',changeLabelPhone);

function changeLabelPhone(){
    var phone_label = document.querySelector('.emailPhone');
    phone_label.innerHTML = "Phone";

var check_phone = document.querySelector('#email-phone-value');
check_phone.addEventListener('input', validatePhone);

function validatePhone(){
    var message = document.querySelector('.emailPhone-error');
    var phone_value = document.getElementById('email-phone-value');
    let regex = /^[0-9]{10}$/;
    if(phone_value.value.length==""){
        message.innerHTML = "Required";
        check_phone.style.border = "1px solid red";
        return false;
    }
    else if((regex.test(phone_value.value)) && (!phone_value.value.startsWith("9"))){
        message.innerHTML = "Phone Number should start with 9";
    }
    // else if(!phone_value.value.startsWith("9")){
    //     message.innerHTML = "Phone Number should start with 9";
    // }
    else{
        message.innerHTML = "Should contain exactly 10 digits";
        check_phone.style.border = "1px solid red";
        return false;
    }
}

}


var street = document.getElementById("company-address");
street.addEventListener("focusout",validateStreet);

function validateStreet(){
        var message3 = document.querySelector('.error-message-street');
        if(street.value.length==""){
            message3.innerHTML = "Required";
            street.style.border = "1px solid red";
            return false;
        }
        else{
            message3.innerHTML = "";
            street.style.border = "1px solid green";
            return true;
        }
}
var city = document.getElementById("city");
city.addEventListener("focusout",validateCity);

function validateCity(){
        var message3 = document.querySelector('.error-message-city');
        if(city.value.length==""){
            message3.innerHTML = "Required";
            city.style.border = "1px solid red";
            return false;

        }
        else{
            message3.innerHTML = "";
            city.style.border = "1px solid green";
            return true;

        }
}

var state = document.getElementById("state");
state.addEventListener("focusout",validateState);

function validateState(){
        var message3 = document.querySelector('.error-message-state');
        if(state.value.length==""){
            message3.innerHTML = "Required";
            state.style.border = "1px solid red";
            return false;
        }
        else{
            message3.innerHTML = "";
            state.style.border = "1px solid green";
            return true;
        }
}

var zip = document.getElementById("pincode");
zip.addEventListener("focusout",validateZip);

function validateZip(){
        var message3 = document.querySelector('.error-message-zip');
        var pattern = /^[0-9]{6}$/;
        if(zip.value.length==""){
            message3.innerHTML = "Required";
            zip.style.border = "1px solid red";
            return false;

        }
        else if(pattern.test(zip.value)){
            message3.innerHTML = "";
            zip.style.border = "1px solid green";
            return true;

        }
        else{
            message3.innerHTML = "Only 6 numbers are allowed";
            zip.style.border = "1px solid red";
            return false;
        }
}

var country = document.getElementById("country");
country.addEventListener("focusout",validateCountry);

function validateCountry(){
        var message3 = document.querySelector('.error-message-country');
        if(country.value.length==""){
            message3.innerHTML = "Required";
            country.style.border = "1px solid red";
            return true;

        }
        else{
            message3.innerHTML = "";
            country.style.border = "1px solid green";
            return true;
        }
}

var website = document.getElementById('Company-website');
website.addEventListener('focusout', validateWebsite);

function validateWebsite(){
    // let pattern = /^$/;
    var message = document.querySelector('.error-message-website');
    if(website.value.length==""){
        message.innerHTML = "Required";
        website.style.border = "1px solid red";
        return false;

    }
    else if(website.value.startsWith("http")){
        message.innerHTML = "";
        website.style.border = "1px solid green";
        return true;

    }
    else{
        message.innerHTML = "company website shouls start with http";
        website.style.border = "1px solid red";
        return false;

    }
}

var additional = document.getElementById('additional-data');
additional.addEventListener('focusout', validateAdditional);

function validateAdditional(){
    var message = document.querySelector('.error-message-additional');
    if(additional.value.length==""){
        message.innerHTML = "Required";
        additional.style.border = "1px solid red";
        return false;

    }
    else if(additional.value.length>200){
        message.innerHTML = "Should not exceed 200 characters";
        additional.style.border = "1px solid red";
        return false;

    }
    else{
        message.innerHTML = "";
        additional.style.border = "1px solid green";
        return true;
    }
}

const date_min = document.querySelector('#billing-date');
date_min.min = new Date().toLocaleDateString('en-ca');

var billing_date = document.querySelector('.billing-date');

billing_date.addEventListener('change',validateDate);


function validateDate(){
    var months_arr = ['Jan', 'Feb','Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    date = new Date();
    var todays_date = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    var input_date = document.getElementById('billing-date').value;
    var arr_date = input_date.split('-');
    y=arr_date[0];
    m=arr_date[1];
    d=arr_date[2];
    
    if((y<year) || (m<month+1) || (d<todays_date)){
        document.querySelector('#date').value= "";
        return false;
    }
    else if(((d)%10)==1){
            document.querySelector('#date').value= arr_date[2]+ "st"+ " "+ months_arr[arr_date[1]] +" "+arr_date[0];
            return true;

        }
        else if(((d)%10)==2){
            document.querySelector('#date').value= arr_date[2]+ "nd"+ " "+ months_arr[arr_date[1]] +" "+arr_date[0];
            return true;
        }
        else if(((d)%10)==3){
            document.querySelector('#date').value= arr_date[2]+ "rd"+ " "+ months_arr[arr_date[1]] +" "+arr_date[0];
            return true;
        }
        else{

        document.querySelector('#date').value= arr_date[2]+ "th"+ " "+ months_arr[arr_date[1]] +" "+arr_date[0];
        return true;
        }
}

function formValidation(){
    if((validateName()==true) && (validateCompany()==true)&& (validateDept()==true)&&(changeLabelPhone()==true) && (changeLableEmail()==true) && (validateStreet()==true) &7
        (validateCity()==true)&& (validateState()==true) && (validateZip()==true) && (validateCountry()==true) && (validateWebsite()==true) && (validateAdditional()==true) && (validateDate()==true)){
        return true;
    }
    else{
        alert('Please fill all the mandatory details');
    }
}

