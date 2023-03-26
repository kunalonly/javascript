const openmodal = document.querySelector("#open-model-button");
const closemodal = document.querySelector("#close-model-button");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#model");
const openvideo = document.querySelector("#open-video-button");
const imgwrapper = document.querySelector("#img-wrapper");
const closeVideo = document.querySelector("#close-video-button");

openmodal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("open");
  overlay.classList.add("open");
});
openvideo.addEventListener("click", () => {
  imgwrapper.classList.add("open");
});
closeVideo.addEventListener("click", remove);

closemodal.addEventListener("click", remove);
overlay.addEventListener("click", remove);

function remove() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
  imgwrapper.classList.remove("open");
}
