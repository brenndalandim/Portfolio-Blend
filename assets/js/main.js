let apresentacao = document.querySelector(".apresentacao")
let projetos = document.querySelector(".projetos")
let contato = document.querySelector(".contato")

//behavior do scroll
let estado = "smooth"

//parâmetro que define em qual seção está
var qtdScroll = 1

// scroll suave entre as telas
window.addEventListener('wheel', event => {
    event.preventDefault()

    //alturas das section em relação ao topo da página
    let altProjetos = projetos.offsetTop
    let altContato = contato.offsetTop

    //definição se está indo para cima (> 0) ou para baixo (> 0) 
    if(qtdScroll === 1 && event.deltaY > 0){
        window.scroll({
            top: altProjetos,
            behavior: estado,
        })
        qtdScroll++
    } else if (qtdScroll === 2){
        if(event.deltaY > 0){
            window.scroll({
                top: altContato,
                behavior: estado,
            })
            qtdScroll++
        } else {
            window.scroll({
                top: 0,
                behavior: estado,
            })
            qtdScroll--
        }
    } else if(qtdScroll === 3 && event.deltaY < 0){
        window.scroll({
            top: altProjetos,
            behavior: estado,
        })
        qtdScroll--
    }

    
  },{ passive: false });


// Botão voltar ao topo
let voltarAoTopo = document.querySelector("#voltarAoTopo")

voltarAoTopo.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: estado,
    })
    
    //reset que define que voltou a primeira seção
    qtdScroll = 1
})