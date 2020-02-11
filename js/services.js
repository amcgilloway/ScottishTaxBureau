const modalHeading = document.querySelector('.modal-title');
const modalContent = document.querySelector('.modal-body');
function changeIt(_src) {
    const url = _src;
    const data = ServiceDescription[url];
    modalHeading.textContent = data.title;
    modalContent.innerHTML = data.description;
    }
