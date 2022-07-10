getData();
async function getData(){
     const response= await fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
     const data= await response.json();
     let ddData = [
    {
        text: data[0].name,
        value: 1,
        selected: false,
        imageSrc: `https://chess-tournament-api.devtest.ge/${data[0].image}`
    },
    {
        text: data[1].name,
        value: 2,
        selected: false,
        imageSrc: `https://chess-tournament-api.devtest.ge/${data[1].image}`
    },
    {
        text: data[2].name,
        value: 3,
        selected: false,
        imageSrc: `https://chess-tournament-api.devtest.ge/${data[2].image}`
    },
    {
        text: data[3].name,
        value: 4,
        selected: false,
        imageSrc: `https://chess-tournament-api.devtest.ge/${data[3].image}`
    }
    ];
     $("#character").ddslick({
        data: ddData,
        width: 392,
        height: 300,
        imagePosition: "right",
        background: '#FFFFFF',
        selectText: "Select your character"
    });
    $('#character .dd-selected-value').attr('name', 'character');
}

let expdata = [
    {
        text: "Beginner",
        value: "Beginner",
        selected: false,
    },
    {
        text: "Intermediate",
        value: "Intermediate",
        selected: false,
    },
    {
        text: "Professional",
        value: "Professional",
        selected: false,
    }
]
$('#experience').ddslick({
    data: expdata,
    width: 392,
    background: '#FFFFFF',
    selectText: "Select your experience level",
});
// validation
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
let $experienceForm = $('#experienceForm');
$(function() {
    if ($experienceForm.length){
        $experienceForm.validate({
            ignore: "",
            rules: {
                exp: {
                    required: true,
                    default: true
                },
                character: {
                    required: true,
                    default: true

                },
                radio: {
                    required: true
                }
            },
            messages: {
                exp: {
                    required: "Choose one option",
                },
                character: {
                    required: "Choose one option",
                },
                radio: {
                    required: "Check yes or no"
                }

            },
            errorPlacement: function(error, element){
                error.insertAfter(element.parent());
            }
        }
            )}
            $.validator.addMethod("default", function(value, element){
                return this.optional(element) || value !== 'default';
            }, "Choose one option");

            $('button').click(function(){
                if ($experienceForm.valid()){
                    // data-ს გაგზავნა
                    location.href = "../pages/onboard.html";
                    localStorage.clear();
                }
            })
    });
$('.dd-selected-value').attr('name', 'exp');

// localstorage
let inputs = document.querySelectorAll('input[type="radio"]');
inputs[0].addEventListener('click', ()=> {
    inputs[0].classList.toggle('true');
    if (inputs[1].className == "true"){
        inputs[1].classList.remove('true');
    }
});
inputs[1].addEventListener('click', ()=> {
    inputs[1].classList.toggle('true');
    if (inputs[0].className == "true"){
        inputs[0].classList.remove('true');
    }
});
// window.onbeforeunload = function() {
//     localStorage.setItem("level", $('.dd-selected-value').val());
//     $('')
// }
// window.onload = function() {
//     let level = localStorage.getItem("level");
//     if (level !== null) $('.dd-selected-value').val(level);
// }
