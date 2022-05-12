const listitems = document.querySelectorAll("a");
const dream = document.querySelector("span");
const paragraphs = document.querySelectorAll(".description p");

listitems.forEach((item, index) =>{
    item.style.animation = `moveup 2s ease-in-out forwards ${index / 7}s`;

    item.addEventListener("animationend", () => {
        paragraphs.forEach((item, index) =>{
            item.style.animation=`moveup 1s ease-in-out forwards ${index/10}`;
        })
        dream.style.animation="movetoleft 0.5s ease-in-out forwards"
    })
})