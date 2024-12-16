export function cancelBtns() {
    const cancelBtns = document.querySelectorAll('.cancel-btn');
    cancelBtns.forEach(cancelBtn => cancelBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.classList.add('hide-form');
        const thisForm = e.target.closest('.ticket-form');
        if (thisForm.classList.contains('add-ticket-form') || thisForm.classlist.contains('edit-ticket-form')) {
            const thisFormFields = Array.from(thisForm.querySelectorAll('.form-field'));
            thisFormFields.forEach(formField => formField.value = '');
        }
    }));
}