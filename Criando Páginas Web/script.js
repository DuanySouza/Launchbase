const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll(".card");

for (let card of cards){
    card.addEventListener("click", function(){
        const video_ativo = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_ativo}`
    })
}

document.querySelector(".close_modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

