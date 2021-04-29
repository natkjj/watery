

let today = new Date();

let hours = today.getHours();

if (hours > 16 || hours < 6) {
document.body.className = "night";
document.querySelectorAll('.gallery__img').forEach (el => el.style.shadow)= "nightT"; 
} else {
document.body.className = "day";
}
// document.querySelectorAll('.gallery__img').className = "night"; 

// document.querySelectorAll('.gallery__img').forEach = "night"; 



