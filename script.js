function validateForm()
var firstname=document.getElementById('fname').value;
if(!firstname){
document.getElementById('fname_err').innerHTML="First name is required"
}
var lastname= document.getElementById('lname').value;
if(!lastname){
document.getElementById('lname_err').innerHTML="Last name is required"
}
