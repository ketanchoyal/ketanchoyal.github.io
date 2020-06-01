var modal = document.getElementById('myModal');

var moreScreensMathStar = document.getElementById("more-screens-mathstar");
var moreScreensSPI 		= document.getElementById("more-screens-spi");
var moreScreensNibble 	= document.getElementById("more-screens-nibble");
var moreScreensFitHero 	= document.getElementById("more-screens-fithero");
var modalImg 			= document.getElementById("img01");

moreScreensMathStar.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-mathstar.jpg"
}

moreScreensSPI.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-spi.jpg"
}

moreScreensNibble.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-nibble.jpg"
}

moreScreensFitHero.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/fithero-product.jpg"
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}