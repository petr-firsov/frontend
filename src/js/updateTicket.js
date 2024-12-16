function updateTicketText(e) {
    const editTicketForm = document.querySelector('.edit-ticket-form');
    editTicketForm.classList.remove('hide-form');
    const updateTitle = document.querySelector('.update-title');
    updateTitle.focus();

    const currentTicket = e.target.parentElement.parentElement;
    const currentTitle = currentTicket.querySelector('.ticket-title');
    const currentDescription = currentTicket.querySelector('.ticket-description');
    const currentId = currentTicket.id;

    const titleField = document.querySelector('.update-title');
    titleField.value = currentTitle.textContent;
    const descriptionField = document.querySelector('.update-description');
    descriptionField.value = currentDescription.textContent;

    editTicketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (titleField.value !== currentTitle || descriptionField.value !== currentDescription && 
        !titleField.value.trim()) {
            currentTitle.textContent = titleField.value;
            currentDescription.textContent = descriptionField.value; 
            const updateData = {
              name: titleField.value,
              description: descriptionField.value,
            };
            fetch(`https://backend-rh9i.onrender.com/?method=updateById&id=${currentId}`, {
                method: "POST",
                body: JSON.stringify(updateData)
            })
            .then(() => {
                editTicketForm.classList.add('hide-form');
            })
        }
    });
}

export function updateTicketTextContent() {
    const editBtns = Array.from(document.querySelectorAll('.edit-btn'));
    editBtns.forEach(editBtn => editBtn.addEventListener('click', (e) => updateTicketText(e)));
}