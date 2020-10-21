function isValidAddressHTML(address) {
    let errors = [];

    if (typeof address.active !== 'boolean') {
        errors.push('ERROR: Kontaktų laukelių tipas turi būti Boolean.'); 
    }

    // ICON validacija
    if (typeof address.icon !== 'string') {
        errors.push('ERROR: Kontaktų icon tipas turi būti tekstinis.'); 
    }
    if (address.icon === '') {
        errors.push('ERROR: Kontaktų icon negali būti tuščias.');
    }

    // TITLE validacija
    if (typeof address.title !== 'string') {
        errors.push('ERROR: Kontaktų title turi būti tekstinis.');
    }
    if (address.title === '') {
        errors.push('ERROR: Kontaktų title negali būti tušti.');
    }
    if (address.title.length > 30) {
        errors.push('ERROR: Kontaktų title yra per ilgas.');
    }

    // TEXT validacija

    if (typeof address.text !== 'string') {
        errors.push('ERROR: Kontaktų laukelių text tipas turi būti tekstinis.');
    }
    if (address.text === '') {
        errors.push('ERROR: Kontaktų laukelis text negali būti tuščias.');
    }
    if (address.text > 150) {
        errors.push('ERROR: Kontaktų text laukelis per ilgas.');
    }

    // ERRORS

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }

        return false;
    }
    // negeneruojame neaktyviu paslaugu
    if (!address.active) {
        return false;
    }
    return true;
}
function isValidAddressHTML1(address) {

    let errors = [];

    if (typeof address.active !== 'boolean') {
        errors.push('ERROR: Kontaktų laukelių tipas turi būti Boolean.');
    }

    // ICON validacija
    if (typeof address.icon !== 'string') {
        errors.push('ERROR: Kontaktų icon tipas turi būti tekstinis.');
    }
    if (address.icon === '') {
        errors.push('ERROR: Kontaktų icon negali būti tuščias.');
    }

    // TITLE validacija
    if (typeof address.title !== 'string') {
        errors.push('ERROR: Kontaktų title turi būti tekstinis.');
    }
    if (address.title === '') {
        errors.push('ERROR: Kontaktų title negali būti tušti.');
    }
    if (address.title.length > 30) {
        errors.push('ERROR: Kontaktų title yra per ilgas.');
    }

    // EMAIL validacija

    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(address.email)) {
        errors.push('ERROR: Kontaktų email netinkamas.')
    }

    // PHONE validacija

    if (Number(address.phone)) {

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
    if (!address.active) {
        return false;
    }
    return true;
}
function isValidAddressHTML2(address) {
    let errors = [];

    if (typeof address.active !== 'boolean') {
        errors.push('ERROR: Kontaktų laukelių tipas turi būti Boolean.');
    }

    // ICON validacija
    if (typeof address.icon !== 'string') {
        errors.push('ERROR: Kontaktų icon tipas turi būti tekstinis.');
    }
    if (address.icon === '') {
        errors.push('ERROR: Kontaktų icon negali būti tuščias.');
    }

    // TITLE validacija
    if (typeof address.title !== 'string') {
        errors.push('ERROR: Kontaktų title turi būti tekstinis.');
    }
    if (address.title === '') {
        errors.push('ERROR: Kontaktų title negali būti tušti.');
    }
    if (address.title.length > 30) {
        errors.push('ERROR: Kontaktų title yra per ilgas.');
    }

    // TEXT validacija

    if (typeof address.text !== 'string') {
        errors.push('ERROR: Kontaktų laukelių text tipas turi būti tekstinis.');
    }
    if (address.text === '') {
        errors.push('ERROR: Kontaktų laukelis text negali būti tuščias.');
    }
    if (address.text > 150) {
        errors.push('ERROR: Kontaktų text laukelis per ilgas.');
    }

    // FACEBOOK validacija

    if (typeof address.facebook !== 'string') {
        errors.push('ERROR: Kontaktų facebook tipas turi būti tekstinis.');
    }
    if (address.facebook === '') {
        errors.push('ERROR: Kontaktų facebook negali būti tuščias.');
    }

    // TWITTER validacija

    if (typeof address.twitter !== 'string') {
        errors.push('ERROR: Kontaktų Twitter tipas turi būti tekstinis.');
    }
    if (address.twitter === '') {
        errors.push('ERROR: Kontaktų Twitter negali būti tuščias.');
    }

    // LINKEDIN validacija
    if (typeof address.linkedin !== 'string') {
        errors.push('ERROR: Kontaktų LinkedIn tipas turi būti tekstinis.');
    }
    if (address.linkedin === '') {
        errors.push('ERROR: Kontaktų LinkedIn negali būti tuščias.');
    }

    // ERRORS

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }

        return false;
    }
    // negeneruojame neaktyviu paslaugu
    if (!address.active) {
        return false;
    }
    return true;
}

export { isValidAddressHTML }
export { isValidAddressHTML1 }
export { isValidAddressHTML2 }