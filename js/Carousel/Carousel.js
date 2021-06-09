

const d = document

const Carousel = ()=>{
        const imagenes = d.querySelectorAll(".slider"),
                btnRigth = d.getElementById("btn_rigth"),
                btnLeft = d.getElementById("btn_left")
        
        console.log(imagenes)
        
        let i = 0
        const Next = () => {
            imagenes[i].classList.remove("opacity")
            i++
            if(i >= imagenes.length){
                i = 0
            }
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
        }, 3000)

}

export default Carousel