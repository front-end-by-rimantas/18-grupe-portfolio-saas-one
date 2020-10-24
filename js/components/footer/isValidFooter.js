function isValidFooter (data)  {
    let errors = [];

    if(typeof data.title !== 'string'){
        errors.push('ERROR: Navigacijos pavadinimas turi buti tekstinis.');
    } else { 
        if(data.title === ''){
            errors.push('ERROR: Navigacijos pavadinimas negali būti tuscias.');
        }
        if(data.title.length > 25){
            errors.push('ERROR: Navigacijos pavadinimas negali buti ilgesnis nei 25 simboliai.');
        }
    }

    if(data.links.length <= 0){
        errors.push('ERROR: Navigacijoje turi buti bent viena nuoroda.');
    }
          
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }
        return false;
    }
    return true;
}

function isValidFooterLink (data) {
    let errors = [];

    if(typeof data.text !== 'string'){
        errors.push('ERROR: Nuorodos pavadinimas turi būti tekstinis.');
    } else {
        if(data.text === ''){
            errors.push('ERROR: Nuorodos pavadinimas negali būti tuscias.');
        }     
        if(data.text.length > 25){
            errors.push('ERROR: Nuorodos pavadinimas negali būti ilgesnis nei 25 simboliai.');
        }
    }


    if(errors.length > 0){
        for(let i = 0; i < errors.length; i++){
            console.error(errors[i]);
        }
        return false;
    }
    return true;
}

export { isValidFooterLink }

export { isValidFooter }
