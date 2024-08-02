let caard = document.querySelectorAll(".caard")

caard.forEach(el => {
    el.addEventListener('click', () => {
        // separando o elemento iframe
        let iframe = document.querySelector(".modal iframe")

        // pega o título do card clicado e tira o espaço após o nome
        let conteudo = (el.children[1].children[0].textContent).trim()

        //utiliza o nome para definir o src do iframe e mostrar o site
        if (conteudo === "Pokedex"){
            iframe.src = "https://brenndalandim.github.io/Projeto-Pokedex/"
        } else if (conteudo === "Câmara dos Deputados"){
            iframe.src = "https://brenndalandim.github.io/Projeto_Camara_Deputados/"
        } else {
            iframe.src = "https://brenndalandim.github.io/Projeto_C/"
        }

        //abertura do modal
        new bootstrap.Modal(".modal").show()
    })
})
