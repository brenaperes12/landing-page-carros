const darkModeBtn = document.getElementById("darkModeBtn");

const icon = darkModeBtn.querySelector("i");

const temaSalvo = localStorage.getItem("tema");


if (temaSalvo === "dark") {

    document.body.classList.add("dark");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("tema", "dark");

    }

    else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("tema", "light");

    }

});

const cards = document.querySelectorAll(".car-card");


cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        const imagem = card.querySelector("img");

        imagem.style.transform = "scale(1.08)";

    });


    card.addEventListener("mouseleave", function () {

        const imagem = card.querySelector("img");

        imagem.style.transform = "scale(1)";

    });

});