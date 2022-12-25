function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  isColorEl: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body')
}
refs.changeColorBtn.addEventListener('click',changeColorForBody);

function changeColorForBody(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.isColorEl.textContent = getRandomHexColor();

}
