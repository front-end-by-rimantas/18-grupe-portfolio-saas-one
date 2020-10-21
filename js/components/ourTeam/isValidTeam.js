function isValidTeam(team){
    let errors = [];

    if(typeof team.active !== 'boolean'){
        errors.push('ERROR: komandos nario aktyvumo statusas turi buti boolean.');
    }

    if(typeof team.profilePicture !== 'string'){
        errors.push('ERROR: profilio nuotraukos pavadinimas turi buti tekstinis.');
    } else {
        if(team.profilePicture === ''){
            errors.push('ERROR: profilio nuotraukos pavadinimas negali buti tuscias.');
        }
        if(team.profilePicture.length < 5){
            errors.push('ERROR: profilio nuotraukos pavadinimo ilgis negali būti trumpesnis nei 5 simboliai.');
        }
    }

    if(typeof team.name !== 'string'){
        errors.push('ERROR: vardo reiksme turi buti tekste.');
    } else {
        if(team.name === ''){
            errors.push('ERROR: vardo reiksme negali buti tuscia.');
        }
        if(team.name.length < 2){
            errors.push('ERROR: vardo ilgis negali buti mazesnis nei 2 simboliai.');
        }
        if(team.name.length > 46){
            errors.push('ERROR: vardas negali buti ilgesnis nei 46 simboliai.')
        }
    }

    if(typeof team.surname !== 'string'){
        errors.push('ERROR: pavardes reiksme turi buti tekstine.');
    } else {
        if(team.surname === ''){
            errors.push('ERROR: pavardes reiksme negali buti tuscia.');
        }
        if(team.surname.length < 2){
            errors.push('ERROR: pavardes ilgis negali buti mazesnis nei 2 simboliai.');
        }
        if(team.surname.length > 46){
            errors.push('ERROR: pavarde negali buti ilgesne nei 46 simboliai.')
        }
    }

    if(typeof team.position !== 'string'){
        errors.push('ERROR: pozicijos reiksme turi buti tekstine.');
    } else {
        if(team.position === ''){
            errors.push('ERROR: pozicijos reiksme negali buti tuscia.');
        }
        if(team.position.length < 3){
            errors.push('ERROR: pozicijos ilgis negali buti mazesnis nei 3 simboliai.');
        }
        if(team.position.length > 20){
            errors.push('ERROR: pozicijos pavadinimas negali buti ilgesnis nei 20 simboliu.');
        }
    }

    if(errors.length > 0){
        for(let i=0; i < errors.length; i++){
            console.log(errors[i]);
        }
        return false;
    }
    if(!team.active){
        return false;
    }
    return true;

}

export { isValidTeam };
