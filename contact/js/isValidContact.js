function isValidContact(contact) {
    let errors = [];

    if (typeof contact.active !== 'boolean') {
        errors.push('ERROR: Kontaktų laukelių tipas turi būti Boolean.');
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

    // ICON validacija
    if (typeof contact.iconLocation && typeof contact.iconEmail && typeof contact.iconPhone !== 'string') {
        errors.push('ERROR: Kontaktų icon tipas turi būti tekstinis.');
    }
    if (contact.iconLocation && contact.iconEmail && contact.iconPhone === '') {
        errors.push('ERROR: Kontaktų icon negali būti tuščias.');
    }
    // EMAIL validacija
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(contact.contactEmail)) {
        errors.push('ERROR: Kontaktų email netinkamas.')
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

    // PHONE validacija
    if (Number(contact.contactPhone)) {

    } else {
        errors.push('ERROR: Kontaktų telefono numeris turi būti sudarytas iš skaičių.');
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