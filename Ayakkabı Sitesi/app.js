const colors = document.querySelectorAll(".colors div");
const shoepic = document.querySelector(".shoeimage img");
const select = document.querySelector("select");
let sizes=[34,35.5,38,42,44,45,47];

sizes.forEach((size) => {
    select.add(new Option(size));
});

colors.forEach((item) => {
    item.style.background = item.getAttribute("data-color");
    item.addEventListener("click", (e) => {
        colors.forEach((item) => {
            item.classList.remove("mark-color");
        });
        e.target.classList.add("mark-color");
        shoepic.style.animation = "fadeout 0.5s ease";
        shoepic.addEventListener("animationend", () => {
            shoepic.style.animation = "";
            shoepic.style.animation = "fadein 0.5s ease";
            shoepic.src = "/images/" + item.getAttribute ("data-color") + ".jpg";
            shoepic.addEventListener("animationend", () => {
                shoepic.style.animation = ""; 
            })
        })
    });
});