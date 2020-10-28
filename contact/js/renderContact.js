import { renderSingleContact } from './renderSingleContact.js'

function renderContact(data) {
    let HTML = '';
    const contactDOM = document.querySelector(data.selectorContact);
    const contactCount = data.contact.length;
    if (!contactDOM) {
        return;
    }
    for (let i = 0; i < contactCount; i++) {
        const contact = data.contact[i]
        HTML += renderSingleContact(contact)
    }
    return contactDOM.innerHTML = HTML
}

export { renderContact }