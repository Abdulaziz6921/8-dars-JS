const Img = document.querySelectorAll("ul img");
const image = document.querySelector("main >img");

console.log(Img.length);
// for loop
const remove = () => {
  for (let i = 0; i < Img.length; i++) {
    console.log(Img[i]);
    Img[i].classList.remove("active");
    image.style.transform = "translateX(-1000px)";
  }
};
for (let i = 0; i < Img.length; i++) {
  Img[i].addEventListener("click", () => {
    remove();
    // Set time out Transition uchun javascriptda ishlatiladi
    setTimeout(() => {
      console.log("Set time out!");
      image.style.transform = "translateX(0)";
    }, 500);
    Img[i].classList.add("active");
    image.src = Img[i].src;
    console.log("Img >>>", Img[i].src);
  });
}
