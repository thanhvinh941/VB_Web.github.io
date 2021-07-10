let btnHover = document.querySelectorAll('.shadow-hover');

for(let i=0; i<btnHover.length;i++){
    btnHover[i].addEventListener('mouseover', function(){
        btnHover[i].classList.add("shadow");
    });
    btnHover[i].addEventListener('mouseout', function(){
        btnHover[i].classList.remove("shadow");
    });
}

let btnHoverKP = document.querySelectorAll('.shadow-hoverKP');

for(let i=0; i<btnHoverKP.length;i++){
    btnHoverKP[i].addEventListener('mouseover', function(){
        btnHoverKP[i].classList.add("shadow");
    });
    btnHoverKP[i].addEventListener('mouseout', function(){
        btnHoverKP[i].classList.remove("shadow");
    });
}




