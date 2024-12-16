export function cancelBtns() {
    const cancelBtns = document.querySelectorAll('.cancel-btn');
    cancelBtns.forEach(cancelBtn => cancelBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.classList.add('hide-form');
    }));
}