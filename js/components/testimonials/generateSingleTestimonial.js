import { isValidTest } from './isValidTestimonial.js'
function generateSingleTestimonial(data) {
    //input validation

    if (!isValidTest(data)) {
        return '';
    }
    //logic

    const HTML = `
                    <h2> ${data.title} </h2>
                    <p class="p">${data.description}</p>
                     <div class="imagin"> <img src=${data.img} alt="profile"> </div>
                    <p class="p name"><b> ${data.name}</b> </p>
                    <p class="p clients">${data.profession}</p>`


    //output
    return HTML;

}
export { generateSingleTestimonial }