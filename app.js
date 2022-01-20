const inputs = document.querySelectorAll('.controls input');
// querySelectorAll returns an node list not an array
function handleUpdate() {
// console.log(this.value);
const suffix = this.dataset.sizing; // targeting sizing, if you have more than one data attribute
// takes everything that has 'data-', puts it into an object
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
