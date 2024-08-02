let containerBtn = document.querySelector(".container-btn")

containerBtn.addEventListener('click', () => {
    containerBtn.innerHTML = `<a class="btn-linkedin btn btn-sm" role="button">https://www.linkedin.com/in/brenndalandim/</a>`

    for (i = 0; i < 10; i++){
        let randomPercem = Math.ceil(Math.random() * 90 + 2) + "%"
        let randomClass = Math.ceil(Math.random() * 3)
        containerBtn.innerHTML += `<i class="spark spark${randomClass} bi bi-linkedin" style="left: ${randomPercem}"></i>`
    }
    
    setTimeout(()=>{
        window.open('https://www.linkedin.com/in/brenndalandim/', '_blank')
    }, 1000)
})
