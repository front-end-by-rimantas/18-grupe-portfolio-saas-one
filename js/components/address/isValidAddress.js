function isValidAddress(address) {
    let errors = [];
    let removed = [];

    if (typeof address.active !== 'boolean') {
        errors.push('ERROR: paslaugos aktyvumo statusas turi buti boolean')
    }

    if (typeof address.icon !== 'string') {
        errors.push('ERROR: paslaugos icon turi buti tekstinis')
    }
    else {
        if (address.icon === '') {
            errors.push('ERROR: icon pavadinimas negali buti tuscias.');
        }
    }

    if (typeof address.title !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis')
    }
    else {
        if (address.title === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
        }
        if (address.title.length > 20) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }

    }
    if (typeof address.text !== 'string') {
        errors.push('ERROR: paslaugos aprasymas turi buti tekstinis.');
    } else {
        if (address.text === '') {
            errors.push('ERROR: paslaugos aprasymas negali buti tuscias.');
        }
        if (address.text.length > 80) {
            errors.push('ERROR: paslaugos aprasymas yra per ilgas.');
        }
    }
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i])
        }

        return false;
    }
    // negeneruojame neaktyviu paslaugu
    if (!address.active) {
        return false;
    }
    // for (let i = 0; i < address.lenght; i++) {
    //     console.log(address.length);
    //     if (address[i] == undefined) {
    //         return false;
    //     }
    // }
    return true;
}

export { isValidAddress }