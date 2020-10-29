function isValidForm() {
    let errors = [];
    if (typeof nameDOM.value !== 'string') {
        errors.push('ERROR: Vardo input turi būti tekstinis.');
    }

    // -----------------------------------------------
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
export { isValidForm };