function changeVisibility(id) {
    if (document.getElementById(id)) {
        let element = document.getElementById(id);

        if (element.style.display != 'none') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    }
}

function changePosition(a, b) {

    if (document.getElementById(a) &&
        document.getElementById(b)) {
        let elementA = document.getElementById(a);
        let elementB = document.getElementById(b);

        if (elementA.style.order == '0' ||
            !elementA.style.order) {
            elementA.style.order = '1';
            elementB.style.order = '0';
        } else {
            elementA.style.order = '0';
            elementB.style.order = '1';
        }
    }
}

function ready() {
    alert("Привет, мир!")
}
document.addEventListener('DOMContentLoaded', ready())