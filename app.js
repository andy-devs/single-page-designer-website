const items = document.body.querySelectorAll(".menu__tag");
const checkbox = document.body.querySelector(".menu-btn");

for (let i of items) {
    i.addEventListener("click", () => {
        checkbox.checked = false;
    });
}
