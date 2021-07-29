let time = 2000
    currentImageIndex = 0
    images = document.querySelectorAll('.slide img')
    max = images.length;


    function nextImage(){
        images[currentImageIndex].classList.remove("selected")
        currentImageIndex++
        
        if(currentImageIndex >= max){
            currentImageIndex = 0
        }
        images[currentImageIndex].classList.add("selected")
        
    }

    //troca de imagem
    function start(){setInterval(() => {nextImage()}, time)}

    window.addEventListener("load", start)