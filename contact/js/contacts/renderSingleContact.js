import { isValidContact } from "./isValidContact.js";

function renderSingleContact(contact) {
    if (!isValidContact(contact)) {
        return '';
    }
    const HTML = `<h3 class="adrs-title">${contact.contactTitle}</h3>
                <p class="adrs-paragraph">${contact.text}</p>
                <div class="adrs-box">
                    <p class="adrs-contact">${contact.iconLocation}</i>${contact.contactAddress}</p>
                </div>
                <div class="adrs-box">
                    <a href="" class="adrs-contact">${contact.iconEmail}${contact.contactEmail}</a>
                </div>
                <div class="adrs-box">
                    <a href="" class="adrs-contact">${contact.iconPhone}${contact.contactPhone}</a>
                </div>`;
    return HTML;
}

export { renderSingleContact }