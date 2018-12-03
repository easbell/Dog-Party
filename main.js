
document.getElementById('submit').onclick = function(event) {
    console.log(event);
    event.preventDefault();

    document.querySelector('.js-change-header').innerText = document.
    getElementById('name').value;
}