function isValidFAQ(faq) {
    let errors = [];

    // faq activity type
    if (typeof faq.active !== 'boolean') {
        errors.push('ERROR: klausimo aktyvumo statusas turi buti boolean.');
    }

    // question test
    if (typeof faq.question !== 'string') {
        errors.push('ERROR: klausimas turi buti tekstinis.');
    } else {
        if (faq.question === '') {
            errors.push('ERROR: klausimas negali buti tuscias.');
        }
        if (faq.question.length > 130) {
            errors.push('ERROR: klausimas yra per ilgas.');
        }
    }

    // question type test
    if (typeof faq.category !== 'string') {
        errors.push('ERROR: klausimo tipas turi buti tekstinis.');
    } else {
        if (faq.category === '') {
            errors.push('ERROR: klausimo tipas negali buti tuscias.');
        }
    }

    // answer test
    if (typeof faq.answer !== 'string') {
        errors.push('ERROR: atsakymas turi buti tekstinis.');
    } else {
        if (faq.answer === '') {
            errors.push('ERROR: atsakymas negali buti tuscias.');
        }
        if (faq.answer.length > 1000) {
            errors.push('ERROR: atsakymas yra per ilgas.');
        }
    }

    // error count
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        } return false;
    }

    // inactive questions are not generated
    if (!faq.active) {
        return false;
    } return true;
}

export { isValidFAQ }