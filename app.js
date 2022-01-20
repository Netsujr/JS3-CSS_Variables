const inputs = document.querySelectorAll('.controls input');
// querySelectorAll returns an node list not an array
function handleUpdate() {
console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
