
import { generateSingleTestimonial } from "./generateSingleTestimonial.js";

function renderTestimonial(data) {

    //input validation

    //logic
    let HTML = '';
    const testDOM = document.querySelector(data.selector);
    const testCount = data.testimonial.length;
    if (!testDOM) {
        return;
    }
    for (let i = 0; i < testCount; i++) {
        const test = data.testimonial[i];
        HTML += generateSingleTestimonial(test);
    }

    function left() {
        if (i < testCount) {
            i = i + 1;
        } else {
            i = 1;
        }
        testDOM.innerHTML = data.testimonial[i - 1];
    }

    function right() {
        if (i < testCount + 1 && i > 1) {
            i = i - 1;
        } else {
            i = testCount;
        }
        testDOM.innerHTML = data.testimonial[i - 1];

    }

    // for (let i = 0; i < testCount; i++) {
    //     const test = data.testimonial[i];
    //     HTML += generateSingleTestimonial(test);
    // }

    // post logic validation

    testDOM.innerHTML = HTML;



    const slide = document.querySelectorAll(".testimonial")
    console.log(slide[2]);

    var i = slide.length;

    return;
}

export { renderTestimonial }