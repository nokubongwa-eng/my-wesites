// Automatic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(".card,.product,.benefit").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// Hero Animation

const hero=document.querySelector(".hero-text h1");

let visible=true;

setInterval(()=>{

hero.style.opacity=visible?"0.6":"1";

visible=!visible;

},1000);

// Welcome Message
console.log("Welcome to RootedWellness Core");