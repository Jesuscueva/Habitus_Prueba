
const text = document.querySelector(".text_habitus")
const circleOne = document.getElementById("circle_one")
const circleTwo = document.getElementById("circle_two")
const circleTree = document.getElementById("circle_tree")
console.log(circleOne)
const textPie = document.querySelector(".text_pie")


const navbar = document.getElementById("menu_header")
const navMenu = document.querySelector(".nav_menu")


document.addEventListener("DOMContentLoaded", e => {
    text.classList.toggle("animation")
    circleOne.classList.toggle("anima")
    setTimeout(()=>{
    circleTwo.classList.toggle("anima")
    },300)
    setTimeout(()=>{
        circleTree.classList.toggle("anima")
    },400)
    textPie.classList.toggle("anima")


    navbar.addEventListener("click", e => {
        navMenu.classList.toggle("responsive_active")
    })
})

