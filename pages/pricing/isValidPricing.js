function isValidPricing(data) {
    let errors = [];

    if (typeof image !== "string") {
        errors.push("ERROR: image turi buti tekstinis");
    } else {
        if (image === "") {
            errors.push("ERROR: image negali buti tuscias");
        }
    }

    if (typeof title !== "string") {
        errors.push("ERROR: Paskyros pavadinimas turi buti tekstinis");
    } else {
        if (title === "") {
            errors.push("ERROR: Iveskite paskyros pavadinima");
        }
        if (title.length < 5) {
            errors.push("ERROR: paskyros pavdinimas per trumpas");
        }
        if (title.length > 30)
            errors.push("ERROR: paskyros pavdinimas per trumpas");
    }
}

if (typeof paragraph !== "string") {
    errors.push("ERROR: paskyros aprasymas turi buti tekstinis");
} else {
    if (paragraph === "") {
        errors.push("ERROR: irasykite paskyros aprasyma turi buti tekstinis");
    }
    if (paragraph < 5) {
        errors.push("ERROR: paskyros aprasyma per trumpas");
    }
}

if (typeof price !== "string")




}

import { isValidPricing }