function isValidFooter (data)  {
    let errors = [];

    if (typeof data.title !== 'string')
    {
        errors.push("ERROR: data. turi buti tekstas");
    }
    if ( data.title.length > 25)
    {
        errors.push('ERROR: data. negali buti toks ilgas');
    }
    if ( data.title === "")
    {
        errors.push('ERROR: irasyk data. pavadinima');
    }


    if ( typeof data.first !== 'string' )
    {
        errors.push('ERROR: I navigations eilute turi buti tekstas');
    } else {
            if (typeof data.second !== "string" ) {
                errors.push('ERROR: II navigations eilute turi buti tekstas');
            }
            if( typeof data.third !== 'string'){
                errors.push('ERROR: III navigations eilute turi buti tekstas');
            }
            if (typeof data.fourth !== 'string' ){
                errors.push( 'ERROR: IV navigations eilute turi buti tekstas');
            }
            if ( typeof data.fifth !== 'string' ){
                errors.push( 'ERROR: V navigations eilute turi buti tekstas');
            }
        }

    if ( data.first.length > 25 )
    {
        errors.push('ERROR: I navigacijos eilute turi buti trumpesnes');
    } else {
            if ( data.second.length > 25){
            errors.push('ERROR: II navigacijos eilute turi buti trumpesnes');
            }
            if ( data.third.length > 25 ){
            errors.push('ERROR: III navigacijos eilute turi buti trumpesnes');
            }
            if ( data.fourth.length > 25 ){
            errors.push('ERROR: IV navigacijos eilute turi buti trumpesnes');
            }
            if ( data.fifth.length > 25)  {
            errors.push('ERROR: V navigacijos eilute turi buti trumpesnes');
            }
        }

    if ( data.first === "" && data.second === "" && data.third === "" && data.fourth === "" && data.fifth === "")
    {
        errors.push('ERROR: I navigacijos eilute negali buti tuscias tekstas');
    } else {
            if( data.second === "") {
                errors.push('ERROR: II navigacijo eilute negali buti tuscias tekstas');
            }
            if (data.third === "" ){
                errors.push('ERROR: III navigacijos eilute negali buti tuscias tekstas');
            }
            if (data.fourth === ""){
                errors.push('ERROR: IV navigacijos eilute negali buti tuscias tekstas');
            }
            if (data.fifth === ""){
                errors.push('ERROR: V navigacijos eilute negali buti tuscias tekstas');
            }
          }

          
    // error count
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        } return false;
    }
    return true;
    // inactive questions are not generated
    // if (!faq.active) {
        // return false;
    // } return true;
        
}


export { isValidFooter }