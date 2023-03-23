const button = document.getElementById("sumbit")
const popup = document.querySelector('.popup1');
const success = document.querySelector(".success")
const confirm = document.getElementById('confirm')
const invoice = document.querySelector('.invoice')

button.addEventListener('click', function(){
    // console.log("clicked");
    if (popup.classList.contains('opacity')) {
        popup.style.opacity = 0;
    } else {
        popup.style.opacity = 1;
    }
})

confirm.addEventListener('click', function(){
    if (success.classList.contains('opacity')) {
        success.style.opacity = 0;
    } else {
        success.style.opacity = 1;
        setTimeout(() => { 
            invoice.style.opacity = 1;
        }, 2000);
    }
})

