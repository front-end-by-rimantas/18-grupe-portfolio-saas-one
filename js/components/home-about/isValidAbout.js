function isValidAbout(about) {
    let errors = [];

    if (typeof about.active !== 'boolean') {
        errors.push('ERROR: paslaugos aktyvumo statusas turi buti boolean');
    }

    if (typeof about.icon !== 'string') {
        errors.push('ERROR: paslaugos icon turi buti tekstinis');
    }
    else {
        if (about.icon === '') {
            errors.push('ERROR: icon pavadinimas negali buti tuscias.');
        }
    }

    if (typeof about.title !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis');
    }
    else {
        if (about.title === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
        }
        if (about.title.length > 30) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }

    }
    if (typeof about.text !== 'string') {
        errors.push('ERROR: paslaugos aprasymas turi buti tekstinis.');
    } else {
        if (about.text === '') {
            errors.push('ERROR: paslaugos aprasymas negali buti tuscias.');
        }
        if (about.text.length > 150) {
            errors.push('ERROR: paslaugos aprasymas yra per ilgas.');
        }
    }
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }

        return false;
    }
    // negeneruojame neaktyviu paslaugu
    if (!about.active) {
        return false;
    }

    return true;
}

export { isValidAbout }