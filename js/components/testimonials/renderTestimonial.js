
import { generateSingleTestimonial } from "./generateSingleTestimonial.js";

function renderTestimonial(data) {

    //input validation

    //logic
    let HTML = '';
    const testDOM = document.querySelector(data.selector);
    const testCount = data.testimonial.length;
    if(!testDOM){
        return;
    }
    for (let i = 0; i < 1; i++) {
        const test = data.testimonial[i];
        HTML += generateSingleTestimonial(test);
    }

    // post logic validation

    return testDOM.innerHTML = HTML;
}

export { renderTestimonial }