let lightboxContainer = document.getElementById ("lightboxContainer");
let lightboxBackground = document.getElementById ("lightboxBackground");
let lightbox = document.getElementById ("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

//gallery1
function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let gallery1 = document.getElementById ("gallery1");
    gallery1.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove("display");
    lightbox.src = "" ;
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//gallery2
function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let gallery2 = document.getElementById ("gallery2");
    gallery2.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove("display");
    lightbox.src = "" ;
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//gallery3
function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let gallery3 = document.getElementById ("gallery3");
    gallery3.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove("display");
    lightbox.src = "" ;
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//gallery4
function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let gallery4 = document.getElementById ("gallery4");
    gallery4.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove("display");
    lightbox.src = "" ;
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

//gallery5
function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let gallery5 = document.getElementById ("gallery5");
    gallery5.onclick = openLightbox;

function closeLightbox(){
    lightboxContainer.classList.remove("display");
    lightbox.src = "" ;
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;