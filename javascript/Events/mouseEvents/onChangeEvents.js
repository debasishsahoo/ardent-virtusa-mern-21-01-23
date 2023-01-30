function changeCase(element) {
    element.value = element.value.toUpperCase();
}

function showValue(value) {
    alert("The Value is: " + value);
}


document.getElementById('dept').addEventListener('change', () => {
    let val = document.getElementById('dept').value;
    alert('Selected Value:' + val);
});


function abc() {
    let val = document.getElementById('dept').value;
    alert('Selected Value:' + val);
}