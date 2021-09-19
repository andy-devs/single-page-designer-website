const items = document.body.querySelectorAll(".menu__tag");
const checkbox = document.body.querySelector(".menu__btn");

for (let i of items) {
    i.addEventListener("click", () => {
        checkbox.click();
    });
}
