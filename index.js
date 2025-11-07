//DOM
const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".side-bar")

hamburger.addEventListener("click" , function(){
    sidebar.classList.toggle("active")
})

