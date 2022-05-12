const main = document.querySelector(".main");

//Creating Header Element

let header = document.createElement("div");
header.style.minHeight = "8vh";
header.style.minWidth = "100vw";
header.style.background = "rgba(0,0,0,0.5)";
header.style.position = "fixed";
header.style.zIndex = "1";

let logo = document.createElement("h2");
logo.textContent = "LOGO";
logo.style.fontSize = "2rem";
logo.style.letterSpacing = "5px";
logo.style.marginLeft = "20px";
logo.style.color = "white";

header.appendChild(logo);
main.appendChild(header);

//Creating image section with a button

let image = document.createElement("section");
image.id="home";
image.style.position = "absolute";
image.style.top = "0";
//image.style.zIndex = "-1";
image.style.minHeight = "50vh";
image.style.minWidth = "100vw";
image.style.background = "linear-gradient(rgba(0,0,0,-1),transparent), url('./image/image.jpg') no-repeat";
image.style.backgroundSize = "cover";
image.style.backgroundPosition = "center";
image.style.objectFit = "cover";
image.style.display = "flex";
image.style.justifyContent = "center";
image.style.alignItems = "center";

main.appendChild(image);

//creating slogan

let slogan = document.createElement("h1");
slogan.textContent = "Explore Your Nearest Forest With A Single Reservation.";
slogan.style.fontSize = "2rem";
slogan.style.color = "white";
slogan.style.letterSpacing = "2px";
slogan.style.minWidth = "100vw";
slogan.style.textAlign = "center";
slogan.style.textShadow = "5px 5px 5px black";

image.appendChild(slogan);

//Create reservation button

let button = document.createElement("div");
button.style.position = "absolute";
button.style.top = "70%";
button.style.padding = "0.5rem 1rem";
button.style.color = "white";
button.style.fontSize = "1.5rem";
button.style.border = "1px solid white";
button.style.cursor = "pointer";
button.textContent = "Explore Now";

image.appendChild(button);

//Creating Reservation Section

let sectionbooking = document.createElement("section");
sectionbooking.style.position = "absolute";
sectionbooking.style.top = "50%";
sectionbooking.style.minHeight = "40vh";
sectionbooking.style.minWidth = "100vw";

main.appendChild(sectionbooking);

let booking = document.createElement("div");
booking.style.height = "100%";
booking.style.width = "50%";
booking.style.margin = "auto";
booking.style.display = "flex";
booking.style.justifyContent = "center";
sectionbooking.appendChild(booking);

let imagediv = document.createElement("div");
imagediv.style.div = "600px";
imagediv.style.borderRight = "1px solid rgba(0,0,0,0.2)";
booking.appendChild(imagediv);

let imagebooking = document.createElement("img");
imagebooking.src = "./image/imageBooking.jpg";
imagebooking.style.height = "100%";
imagebooking.style.padding = "0.5rem 0.5rem";
imagediv.appendChild(imagebooking); 

let inputdiv = document.createElement("div");
inputdiv.style.width = "600px";
inputdiv.style.padding = "0.5rem 2rem";
inputdiv.style.display = "flex";
inputdiv.style.flexDirection = "column";
inputdiv.style.justifyContent = "center";
inputdiv.style.alignItems = "center";

let inputinfos = ["Name","Surname","Phone","E-mail"];

for (let i = "1"; i<= 4; i++)
{
    let input = document.createElement("input");
    input.placeholder = inputinfos[i-1];
    input.style.padding = "0.5rem";
    input.style.outline = "none";
    input.style.border = "1px solid rgba(0,0,0,0.2)";
    input.style.fontSize = "1.5rem";
    input.style.marginTop = "20px";
    inputdiv.appendChild(input);
    booking.appendChild(inputdiv);
}

let submitbutton = document.createElement("div");
submitbutton.textContent = "SUBMIT";
submitbutton.style.padding = "0.5rem 5rem";
submitbutton.style.marginTop = "50px";
submitbutton.style.background = "green";
submitbutton.style.color = "white";
submitbutton.style.fontSize = "1.2rem";
submitbutton.style.fontWeight = "bold";
submitbutton.style.letterSpacing = "5px";
submitbutton.style.cursor = "pointer";
inputdiv.appendChild(submitbutton);

//Creating contact section

let sectioncontact = document.createElement("section");
sectioncontact.style.position = "absolute";
sectioncontact.style.minHeight = "50vh";
sectioncontact.style.minWidth = "50vw";
sectioncontact.style.left = "50%";
sectioncontact.style.transform = "translateX(-50%)";
sectioncontact.style.top = "90%";
sectioncontact.style.marginTop = "200px";
sectioncontact.style.borderTop = "1px solid rgba(0,0,0,0.2)";
main.appendChild(sectioncontact);

let contact = document.createElement("div");
contact.style.position = "absolute";
contact.style.minWidth = "50vw";
contact.style.minHeight = "100%";
contact.style.display = "flex";
contact.style.flexDirection = "column";
contact.style.textAlign = "center";
contact.style.alignItems = "center";

sectioncontact.appendChild(contact);

let contactHeader = document.createElement("h1");
contactHeader.style.letterSpacing = "3px";
contactHeader.style.fontSize = "2rem";
contactHeader.style.opacity = "0.4";
contactHeader.textContent = "Contact With US";

contact.appendChild(contactHeader);

let adressparagraph = document.createElement("p");
adressparagraph.textContent = "SILICON VALLEY STREET NO:123,BLOCK FLOOR 4 CA123-555 USA";
adressparagraph.style.width = "30%";

contact.appendChild(adressparagraph);

let phoneparagraph = document.createElement("p");
phoneparagraph.textContent = "Phone (pbx): (555) 123-123";
phoneparagraph.style.width = "30%";

contact.appendChild(phoneparagraph);

let email = document.createElement("p");
email.textContent = "E-mail: info@worldtravel.com";
email.style.width = "40%";

contact.appendChild(email);

document.querySelectorAll("p").forEach((item) => {
    item.style.marginTop = "20px";
});