// for vavbar

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header .header-container2 .navbar ul li");
const navbar = document.querySelector("header .header-container2 .navbar");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
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