
const d = document,
        w = window

const Scroll = ()=>{
    const $home = d.getElementById("home")
    const $header = d.getElementById("_header")

    w.addEventListener("scroll", e=>{
        const $scroll = d.documentElement.scrollTop

        
        if($scroll > 53){
            $home.style.transition = ".5s all ease"
            $home.style.display = "none"
            $header.style.position = "fixed"
            $header.style.boxShadow = "0px 2px 3px 2px #eee"
        }else{
            $home.style.display = "block"
            $header.style.position = "relative"
            $header.style.boxShadow = "none"
        }
    })
}

export default Scroll