function isValidAddress(address) {
    let errors = [];

    if (typeof address.active !== 'boolean') {
        errors.push('ERROR: adreso korteles aktyvumo statusas turi buti boolean');
    }

    if (typeof address.icon !== 'string') {
        errors.push('ERROR: adreso korteles icon turi buti tekstinis');
    }
    else {
        if (address.icon === '') {
            errors.push('ERROR: adreso korteles icon negali buti tuscia.');
        }
    }

    if (typeof address.title !== 'string') {
        errors.push('ERROR: adreso korteles pavadinimas turi buti tekstinis');
    } else {
        if (address.title === '') {
            errors.push('ERROR: adreso korteles pavadinimas negali buti tuscias.');
        }
        if (address.title.length > 20) {
            errors.push('ERROR: adreso korteles pavadinimas yra per ilgas.');
        }
    }
    
    if (typeof address.email === 'undefined') {
        return '';
    } else {
        if (typeof address.email !== 'string') {
            errors.push('ERROR: adreso korteles email turi buti tekstinis');
        }
        if (address.email === '') {
            errors.push('ERROR: adreso korteles email negali buti tuscias.');
        }
        if (address.email.length > 30) {
            errors.push('ERROR: adreso korteles email yra per ilgas.');
        }
    }

    if (typeof address.text === 'undefined') {
        return '';
    } else {
        if (typeof address.text !== 'string') {
            errors.push('ERROR: adreso korteles aprasymas turi buti tekstinis.');
        }
        if (address.text === '') {
            errors.push('ERROR: adreso korteles aprasymas negali buti tuscias.');
        }
        if (address.text.length > 80) {
            errors.push('ERROR: adreso korteles aprasymas yra per ilgas.');
        }
    }
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

export { isValidAddress }