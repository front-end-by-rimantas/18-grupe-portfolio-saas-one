function isValidContact(contact) {
    let errors = [];

    if (typeof contact.active !== 'boolean') {
        errors.push('ERROR: Kontaktų laukelių tipas turi būti Boolean.');
    }

    // ICON validacija
    if (typeof contact.iconLocation && typeof contact.iconEmail && typeof contact.iconPhone !== 'string') {
        errors.push('ERROR: Kontaktų icon tipas turi būti tekstinis.');
    }
    if (contact.iconLocation && contact.iconEmail && contact.iconPhone === '') {
        errors.push('ERROR: Kontaktų icon negali būti tuščias.');
    }

    // TITLE validacija
    if (typeof contact.contactTitle !== 'string') {
        errors.push('ERROR: Kontaktų title turi būti tekstinis.');
    }
    if (contact.contactTitle === '') {
        errors.push('ERROR: Kontaktų title negali būti tušti.');
    }
    if (contact.contactTitle.length > 30) {
        errors.push('ERROR: Kontaktų title yra per ilgas.');
    }

    // TEXT validacija

    if (typeof contact.contactAddress && typeof contact.contactEmail && typeof contact.contactPhone !== 'string') {
        errors.push('ERROR: Kontaktų laukelių text tipas turi būti tekstinis.');
    }
    if (contact.contactAddress && contact.contactEmail && contact.contactPhone === '') {
        errors.push('ERROR: Kontaktų laukelis text negali būti tuščias.');
    }
    if (contact.contactAddress > 150) {
        errors.push('ERROR: Kontaktų address laukelis per ilgas.');
    }
    if (contact.contactEmail > 30) {
        errors.push('ERROR: Kontaktų email laukelis per ilgas.');
    }
    if (contact.contactPhone > 20) {
        errors.push('ERROR: Kontaktų telefono laukelis per ilgas.');
    }

    // ERRORS

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }

        return false;
    }
    // negeneruojame neaktyviu paslaugu
    if (!contact.active) {
        return false;
    }
    return true;
}

export { isValidContact }