export function updateTicket() {
    const editBtns = Array.from(document.querySelectorAll('.edit-btn'));
    editBtns.forEach(editBtn => editBtn.addEventListener('click', () => {
        const editTicketForm = document.querySelector('.edit-ticket-form');
        editTicketForm.classList.remove('hide-form');

        const currentTicket = editBtn.parentElement.parentElement;
        const currentTitle = currentTicket.querySelector('.ticket-title').textContent;
        const currentDescription = currentTicket.querySelector('.ticket-description').textContent;
        const currentId = currentTicket.id;

        const titleField = document.querySelector('.update-title');
        titleField.value = currentTitle;
        const descriptionField = document.querySelector('.update-description');
        descriptionField.value = currentDescription;

        editTicketForm.addEventListener('submit', () => {
            if (titleField.value !== currentTitle || descriptionField.value !== currentDescription && 
            !titleField.value.trim()) {
                const updateData = {
                  name: titleField.value,
                  description: descriptionField.value,
                };
                fetch(`https://petr-firsov.github.io/backend?method=updateById&id=${currentId}`, {
                    method: "POST",
                    body: JSON.stringify(updateData)
                })
            }
        });
    }));

}