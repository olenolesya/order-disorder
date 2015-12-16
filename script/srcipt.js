var block = document.querySelector(".open-text");
var block2 = document.querySelector(".open-text-2");
var popup = document.querySelector(".text");
var popup2 = document.querySelector(".text-2");

         
block.addEventListener("click", function () {
    event.preventDefault();
    popup.classList.toggle("text-show");
});
         
block2.addEventListener("click", function () {
    event.preventDefault();
    popup2.classList.toggle("text-show");
});