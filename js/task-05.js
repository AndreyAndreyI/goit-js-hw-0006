const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", (e) => {
	outputName.textContent = e.currentTarget.value|| "Anonymous";
});