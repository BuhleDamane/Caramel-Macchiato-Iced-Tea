function  IcedCaramelMacchiato(){
    let name = prompt("What is your Name🤷🏿?");
    let email = prompt("What is your email🤷🏿‍♀️?");
    let emoji = prompt("What is your favourite emoji?")
    alert("Thank you, " +
    name +
     "! We'll be in touch by email, meanwhile have lots of Iced Caramel Macchiato! "
   + emoji
    );
    }
    
    let buyIcedCaramelMacchiatoButton = document.querySelector("button");
    buyIcedCaramelMacchiatoButton.addEventListener("click", IcedCaramelMacchiato);