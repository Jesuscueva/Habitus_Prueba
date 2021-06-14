
const d = document,
        w = window

const Scroll = ()=>{
    const $home = d.getElementById("home"),
            $header = d.getElementById("_header"),
            $main = d.getElementById("inicio")
    const imgMobiliario = d.querySelector(".img__mobiliario"),
            imgHabitus = d.querySelector(".img__habitus"),
            imgJc = d.querySelector(".img__jc"),
            imgEjecuta = d.querySelector(".img__ejcuta")

    w.addEventListener("scroll", e=>{
        const $scroll = d.documentElement.scrollTop
        console.log($scroll)

        
        if($scroll > 53){
            $home.style.transition = ".4s all ease"
            $home.style.display = "none"
            $header.style.position = "fixed"
            $header.style.boxShadow = "0px 2px 3px 2px #eee"
            $main.style.marginTop = "180px"
        }
        if($scroll > 700){
            imgHabitus.classList.add("active")
        }
        if($scroll >820){
            var time = setTimeout(()=>{
                imgMobiliario.classList.add("active")
                imgJc.classList.add("active")
                imgHabitus.classList.add("active")
                imgEjecuta.classList.add("active")
            },800)
        }else{
            imgHabitus.classList.remove("active")
            imgMobiliario.classList.remove("active")
            imgJc.classList.remove("active")
            imgEjecuta.classList.remove("active")
            $home.style.display = "block"
            $header.style.position = "relative"
            $header.style.boxShadow = "none"
            $main.style.marginTop = "0px"
            clearTimeout(time)
        }
        
    })
}

export default Scroll