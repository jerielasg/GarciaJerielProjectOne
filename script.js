//HAMBURGER MENU


const hamMenu = {};

hamMenu.button = document.getElementById("hamburger_button");
console.log(hamMenu.button);

hamMenu.hamburger_nav = document.querySelector(".hamburgerMenu");
console.log(hamMenu.hamburger_nav);


hamMenu.button.addEventListener("click", () => {
    hamMenu.hamburger_nav.classList.toggle('.show');
})


//Scroll to top button

const topButton = document.querySelector(".buttonTop");

const buttonVisible = () => {
    if (window.scrollY > 500) {
        topButton.style.visibility = "visible";
    } else {
        topButton.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    buttonVisible();
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*
const topButton = document.getElementById("buttonTop");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction () {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

topButton.buttonTop.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behaviour: "smooth"

    })    
});*/
