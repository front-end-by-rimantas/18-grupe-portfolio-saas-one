function isValidFeature(feature) {
    let errors = [];

    if (typeof feature.active !== 'boolean') {
        errors.push('ERROR: paslaugos aktyvumo statusas turi buti boolean');
    }

    if (typeof feature.icon !== 'string') {
        errors.push('ERROR: paslaugos icon turi buti tekstinis');
    }
    else {
        if (feature.icon === '') {
            errors.push('ERROR: icon pavadinimas negali buti tuscias.');
        }
    }

    if (typeof feature.title !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis');
    }
    else {
        if (feature.title === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
        }
        if (feature.title.length > 30) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }

    }
    if (typeof feature.description !== 'string') {
        errors.push('ERROR: paslaugos aprasymas turi buti tekstinis.');
    } else {
        if (feature.description === '') {
            errors.push('ERROR: paslaugos aprasymas negali buti tuscias.');
        }
        if (feature.description.length > 150) {
            errors.push('ERROR: paslaugos aprasymas yra per ilgas.');
        }
    }

    if (typeof feature.background !== 'string') {
        errors.push('ERROR: background nuoroda turi buti tekstine.');
    } else {
        if (feature.link === '') {
            errors.push('ERROR: bakcground nuoroda negali buti tuscia.');
        }
    }
    if (typeof feature.color !== 'string') {
        errors.push('ERROR: color nuoroda turi buti tekstine.');
    } else {
        if (feature.link === '') {
            errors.push('ERROR: color nuoroda negali buti tuscia.');
        }
    }
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }

        return false;
    }
    // negeneruojame neaktyviu paslaugu
    if (!feature.active) {
        return false;
    }

    return true;
}

export { isValidFeature }
