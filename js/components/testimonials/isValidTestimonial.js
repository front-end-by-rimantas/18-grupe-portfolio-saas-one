function isValidTest(data) {
    let errors = [];

    if (typeof data.active !== 'boolean') {
        errors.push('ERROR: paslaugos aktyvumo statusas turi buti boolean');
    }

    if (typeof data.title !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis');
    }
    else {
        if (data.title === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
        }
        if (data.title.length > 30) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }
        if (data.title.length < 6) {
            errors.push('ERROR: paslaugos pavadinimas yra per trumpas.');
        }
    }

    if (typeof data.description !== 'string') {
        errors.push('ERROR: paslaugos aprasymas turi buti tekstinis.');
    } else {
        if (data.description === '') {
            errors.push('ERROR: paslaugos aprasymas negali buti tuscias.');
        }
        if (data.description.length > 150) {
            errors.push('ERROR: paslaugos aprasymas yra per ilgas.');
        }
        if (data.description.length < 20) {
            errors.push('ERROR: paslaugos aprasymas yra per trumpas.');
        }

    }

    if (typeof data.img !== 'string') {
        errors.push('ERROR: profilio nuotraukos nuoroda turi buti tekstine.');
    } else {
        if (data.img === '') {
            errors.push('ERROR: profilio nuotraukos nuoroda negali buti tuscia.');
        }
    }

    if (typeof data.name !== 'string') {
        errors.push('ERROR: vardas ir pavarde turi buti tekstiniai');
    }
    else {
        if (data.name === '') {
            errors.push('ERROR: vardas ir pavarde negali buti tuscias.');
        }
        if (data.name.length < 5) {
            errors.push('ERROR: vardas ir pavarde yra per trumpas.');
        }
    }

    if (typeof data.profession !== 'string') {
        errors.push('ERROR: profesijos pavadinimas turi buti tekstinis');
    }
    else {
        if (data.profession === '') {
            errors.push('ERROR: profesijos pavadinimas negali buti tuscias.');
        }
        if (data.profession.length < 5) {
            errors.push('ERROR: profesijos pavadinimas yra per trumpas.');
        }
        if (data.profession.length > 30) {
            errors.push('ERROR: profesijos pavadinimas yra per ilgas.');
        }
    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }

        return false;
    }
    // negeneruojame neaktyviu paslaugu
    if (!data.active) {
        return false;
    }

    return true;
}


export { isValidTest }