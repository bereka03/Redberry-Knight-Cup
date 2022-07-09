flatpickr("#date", {
    dateFormat: 'd/m/Y'
});
// validaition
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
let $registerForm = $("#registration");
$(function() {
    if ($registerForm.length){
        $registerForm.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    redberryEmail: true
                },
                phone_number: {
                    required: true,
                    number: true,
                    minlength: 9,
                    maxlength: 9
                },
                date: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Please Enter your name",
                    minlength: "Please enter minimum 2 symbol"
                },
                email: {
                    required: "Please Enter your email address",
                    redberryEmail: "Please Enter valid email"
                },
                phone_number: {
                    required: "Please Enter your phone number",
                    number: "Please enter only numbers",
                    minlength: "Please Enter 9 digit",
                    maxlength: "Please Enter 9 digit"
                    
                },
                date: {
                    required: "Please Enter your date of birth",
                    date: true
                }
            },
            errorPlacement: function(error, element){
                error.insertAfter(element.parent());
            }
        });
        $('.submit').click(function() {
            if ($registerForm.valid()){
                location.href = "../pages/experience.html";
            }
        });
        $('input').change(function(){
            if ($registerForm.valid()){
                $('#pers').html("<img src='../img/box-check.svg' alt='check-icon'>");
                $('.check').addClass('visible');
            }
        });
        let nameInput = $('.name');
        nameInput.change(function(){
            if (nameInput.valid()==true && $('.check').hasClass('valid')==false){
                $('.check').first().addClass('visible');
            }
            else {
                $('.check').first().removeClass('visible');
            }
        });
        let emailInput = $('#email');
        emailInput.change(function(){
            if (emailInput.valid()==true){
                $("#second" ).addClass('visible');
            }
            else {
                $('#second').removeClass('visible');
            }
        });
        let phoneInput = $('#phone');
        phoneInput.change(function(){
            if(phoneInput.valid){
                $('#third').addClass('visible');
            }
            else {
                $('#third').removeClass('visible');
            }
        });
        let dateInput = $('#date');
        dateInput.change(function(){
            if(dateInput.valid){
                $('.check').last().addClass('visible');
            }
            else {
                $('.check').last().removeClass('visible');
            }
        });
    }
    $.validator.addMethod("redberryEmail", function(value, element){
        return this.optional(element) || /^.+@redberry.com$/.test(value);
    }, "Only redberry email adresses are allowed");
    
});
// localstorage
window.onbeforeunload = function() {
    localStorage.setItem("name", $('#name').val());
    localStorage.setItem("email", $('#email').val());
    localStorage.setItem("phone", $('#phone').val());
    localStorage.setItem("date", $('#date').val());    
}
window.onload = function() {
    let name = localStorage.getItem("name");
    if (name !== null) $('#name').val(name);
   
    let email = localStorage.getItem("email");
    if (email !== null) $('#email').val(email);

    let phone = localStorage.getItem("phone");
    if (phone !== null) $('#phone').val(phone);

    let date = localStorage.getItem("date");
    if (date !== null) $('#date').val(date);

}

