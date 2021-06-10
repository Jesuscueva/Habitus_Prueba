const d = document

const Carousel = ()=>{
        const imagenes = d.querySelectorAll(".slider"),
                btnRigth = d.getElementById("btn_rigth"),
                btnLeft = d.getElementById("btn_left"),
                textos = d.querySelectorAll(".text_slider")
        console.log(textos)
        console.log(imagenes)
        
        
        textos[0].classList.add("active")
        
        let i = 0
        const Next = () => {
            imagenes[i].classList.remove("opacity")
            textos[i].classList.remove("active")
            i++
            if(i >= imagenes.length){
                i = 0
                textos[i].classList.add("active")
            }
            textos[i].classList.add("active")
            imagenes[i].classList.add("opacity")
        }
        const back = ()=>{
            imagenes[i].classList.remove("opacity")
            if(i <= 0){
                i = imagenes.length
            }
            i--
            imagenes[i].classList.add("opacity")
        }

        btnRigth.addEventListener("click", e => {
            Next()
            clearInterval(automatico)
        })

        btnLeft.addEventListener("click", e => {
            back()
        })

        const automatico = setInterval(()=>{
            Next()
        }, 4500)
}

export default Carousel