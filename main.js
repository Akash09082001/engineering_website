// // Get all sections that have an ID defined
// const sections1 = document.querySelectorAll("section[id]");

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
  
//   // Get current scroll position
//   let scrollY = window.pageYOffset;
  
//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");
    
//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }







// for vavbar

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("header .header-container2 .navbar ul li");
// const navbar = document.querySelector("header .header-container2 .navbar");

// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id"); }
//   });
  

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");

//       // check if the active li element is visible
//       const liLeft = li.offsetLeft;
//       const liRight = liLeft + li.offsetWidth;
//       const navbarLeft = navbar.scrollLeft;
//       const navbarRight = navbarLeft + navbar.offsetWidth;

//       if (liLeft < navbarLeft || liRight > navbarRight) {
//         navbar.scroll({
//           left: liLeft - navbar.offsetWidth / 2 + li.offsetWidth / 2,
//           behavior: "smooth"
//         });
//       }
//     }
//   });
// };


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header .header-container2 .navbar ul li");
const navbar = document.querySelector("header .header-container2 .navbar");
const firstHeader = document.querySelector("header .header-container1");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - firstHeader.offsetHeight;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");

      // check if the active li element is visible
      const liLeft = li.offsetLeft;
      const liRight = liLeft + li.offsetWidth;
      const navbarLeft = navbar.scrollLeft;
      const navbarRight = navbarLeft + navbar.offsetWidth;

      if (liLeft < navbarLeft || liRight > navbarRight) {
        navbar.scroll({
          left: liLeft - navbar.offsetWidth / 2 + li.offsetWidth / 2,
          behavior: "smooth"
        });
      }
    }
  });
};



// Get all the navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Loop through the links and add an event listener to each link
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the ID of the section to which the link points
    const sectionId = link.getAttribute('href');

    // Get the distance from the top of the page to the section
    const sectionTop = document.querySelector(sectionId).offsetTop;

    // Scroll to the section with some margin
    window.scrollTo({
      top: sectionTop - 120,
      behavior: 'smooth'
    });

    // Remove the 'active' class from all the links
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    link.classList.add('active');
  });
});




let faq = document.getElementsByClassName("year-box-question");
let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");

        // answer
        var body = this.nextElementSibling;
        if (body.style.maxHeight === "150px") {
            body.style.maxHeight = "0px";
        } else {
            body.style.maxHeight = "150px";
        }
    });
}

let faq1 = document.getElementsByClassName("overview-box-question");
let j;
for (j = 0; j < faq.length; j++) {
    faq1[j].addEventListener("click", function () {
        this.classList.toggle("active");

        // answer
        var body = this.nextElementSibling;
        if (body.style.maxHeight === "150px") {
            body.style.maxHeight = "0px";
        } else {
            body.style.maxHeight = "150px";
        }
    });
}