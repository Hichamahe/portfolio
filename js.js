// responsive barMenu
burger = document.querySelector(".burger");
burger.addEventListener("click",function(){
    nav = document.querySelector("nav");
    nav.classList.toggle("active");
});



// theme dark & light
body = document.querySelector("body")
theme = document.querySelector(".theme").querySelectorAll("i");
image = document.getElementById("portfolio");
image2 = document.getElementById("appline");

theme.forEach(element => {
     element.addEventListener("click", function(){
         theme.forEach(e=>e.classList.add("active"))
         this.classList.remove("active");
         body.classList.toggle("darkTheme");
         if(body.classList.contains("darkTheme")){
            image.src = "images/homeportfoliolight.jpg";
            image2.src = "images/appline-light.jpg";
         }else{
            image.src="images/homeportfolio.jpg";
            image2.src = "images/appline-dark.jpg";
         }
     })
});




// active navbar
navbar = document.querySelectorAll(".navbar .at");

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
});

// scrolling
var navLinks = document.querySelectorAll(".navbar .at");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});

