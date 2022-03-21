let tabSlide = [
    "../../../assets/images/hotel.jpg",
    "../../../assets/images/bedroom.jpg",
    "../../../assets/images/background.jpg"
];

let numero = 0;


function ChangeSlide(sens) {

    mySlide = document.getElementById("slide").src = tabSlide[numero];
    numero = numero + sens;
    
    while ( numero > tabSlide.length - 1 )
    {
        numero = 0;
    }  
}
setInterval("ChangeSlide(1)", 3000);

//CREER L EFFET FONDU DU SLIDER