const modalOverlay = document.querySelector('.box_overlay');
const cards = document.querySelectorAll(".recipes_gallery");

for (let card of cards){
    card.addEventListener("click", function(){
        const dados = card.innerHTML
        modalOverlay.querySelector(".box-content").innerHTML = dados;
        modalOverlay.classList.add('active')
    })
}

document.querySelector(".close-box").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector(".box-content").innerHTML = ""
})
