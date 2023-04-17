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