

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("header");
    var button = document.getElementById("button");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 320) {
            navbar.style.backgroundColor = "#FFFFFF";
            button.style.backgroundColor = "#1a8917";
            navbar.classList.add("fade-in");
            button.classList.add("fade-in");
        } else {
            navbar.style.backgroundColor = "#ffc017";
            button.style.backgroundColor = "#191919";
            if (navbar.classList.contains("fade-in")) {
                navbar.classList.remove("fade-in");
            }
            if (button.classList.contains("fade-in")) {
                button.classList.remove("fade-in");
            }
        }
    });
});

function mRandom() {
    let m = document.querySelectorAll('g[opacity]');

    m.forEach(element => {
        let randomOpacity = Math.random();
        element.setAttribute('opacity', randomOpacity);
        element.classList.add('randoM');
    });
}

mRandom();
setInterval(mRandom, 800); 