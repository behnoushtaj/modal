let btnElem = document.querySelector("button");
let modalElem = document.querySelector(".modal-parent");
let mainpage = document.querySelector(".center");
let XElem = document.querySelector(".X");

btnElem.addEventListener("click", function () {
  modalElem.style.display = "block";
  document.body.classList.add("blur");
  mainpage.style.display = "none";
});
XElem.addEventListener("click", function () {
  modalElem.style.display = "none";
  document.body.classList.remove("blur");
  mainpage.style.display = "flex";
});
