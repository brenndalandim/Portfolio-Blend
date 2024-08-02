let nome = document.querySelector("input#nome")
let erroNome = document.querySelector("span#erroNome")

let email = document.querySelector("input#email")
let erroEmail = document.querySelector("span#erroEmail")

let msg = document.querySelector("textarea")
let erroMsg = document.querySelector("span#erroMensagem")

let submit = document.querySelector("#btn-submit")

function trocaClasse(span, input){
    span.classList.toggle("msg-erro")
    span.classList.toggle("animacao-erro")
    input.classList.toggle("erro")
}

function trocaClasseTempo(span, input){
    setTimeout(() => {
        span.classList.toggle("msg-erro")
        span.classList.toggle("animacao-erro")
        input.classList.toggle("erro")
    }, 5000)
}

submit.addEventListener("click", (event) => {
    let validaNome = /[a-zA-Z\u00C0-\u00FF ]+/i.test(nome.value) && nome.value.length >= 3
    
    let validaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)

    let validaMsg = msg.value.length >= 10

    if(validaNome === false){
        event.preventDefault()

        //remove a classe msg-erro no span e add a classe erro no input
        trocaClasse(erroNome, nome)

        erroNome.innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor digite somente seu nome`

        trocaClasseTempo(erroNome, nome)
    }

    if (validaEmail === false) {
        event.preventDefault()
        
        //remove a classe msg-erro no span e add a classe erro no input
        trocaClasse(erroEmail, email)

        erroEmail.innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor digite seu email corretamente`

        trocaClasseTempo(erroEmail, email)
    }

    if(validaMsg === false) {
        event.preventDefault()
        
        //remove a classe msg-erro no span e add a classe erro no input
        trocaClasse(erroMsg, msg)

        erroMsg.innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor digite pelo menos 10 caracteres`

        trocaClasseTempo(erroMsg, msg)
    }
})
