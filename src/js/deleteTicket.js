export function deleteTicket() {
    const removeBtns = Array.from(document.querySelectorAll('.remove-btn'));
    removeBtns.forEach(removeBtn => removeBtn.addEventListener('click', () => {
        const currentTicket = removeBtn.parentElement.parentElement;
        const removeTicketForm = document.querySelector('.remove-ticket-form');
        removeTicketForm.classList.remove('hide-form');
        removeTicketForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `http://localhost:8080?method=deleteById&id=${currentTicket.id}`);
            xhr.send();
            xhr.addEventListener('load', () => {
                currentTicket.remove();
                removeTicketForm.classList.add('hide-form');
            });
            });
        })
    );
}