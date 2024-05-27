const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const title = document.querySelector(".header-title");
const text = document.querySelector(".item-text");
const icons = document.querySelector(".sidebar-icons");
const menu = document.querySelector(".sidebar-menu");

const closeSidebar = () => {
     icons.classList.add("show");
     openBtn.style.display = "none";
     closeBtn.style.display = "block"
     menu.classList.add("hidden")
}

const openSidebar = () => {
     icons.classList.remove("show");
     openBtn.style.display = "block";
     closeBtn.style.display = "none"
     menu.classList.remove("hidden")
}

openBtn.addEventListener("click", closeSidebar);
closeBtn.addEventListener("click", openSidebar);