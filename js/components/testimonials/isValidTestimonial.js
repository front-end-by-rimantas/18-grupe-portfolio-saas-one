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
    }

    if (typeof data.img !== 'string') {
        errors.push('ERROR: background nuoroda turi buti tekstine.');
    } else {
        if (data.img === '') {
            errors.push('ERROR: bakcground nuoroda negali buti tuscia.');
        }
    }

    if (typeof data.name !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis');
    }
    else {
        if (data.name === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
        }
        if (data.name.length < 5) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }

        if (typeof data.profession !== 'string') {
            errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis');
        }
        else {
            if (data.profession === '') {
                errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
            }
            if (data.profession.length < 5) {
                errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
            }

            if (typeof data.color !== 'string') {
                errors.push('ERROR: color nuoroda turi buti tekstine.');
            } else {
                if (data.link === '') {
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
            if (!data.active) {
                return false;
            }

            return true;
        }

        export { isValidTest }