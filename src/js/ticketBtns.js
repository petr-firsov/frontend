export function ticketBtns() {
    const addTicketBtn = document.querySelector('.add-ticket-btn');
    addTicketBtn.addEventListener('click', () => {
        const form = document.querySelector('.ticket-form');
        form.classList.remove('hide-form');
    });

    const cancelBtns = document.querySelectorAll('.cancel-btn');
    cancelBtns.forEach(cancelBtn => cancelBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.classList.add('hide-form');
    }));

}