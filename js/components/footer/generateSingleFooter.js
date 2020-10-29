import { isValidFooter } from './isValidFooter.js'
function generateSingleFooter(data) {

    if (!isValidFooter(data)) {
        return '';
    }


    const HTML = `
    <p>${data.title}</p>
    <nav>
        <ul><a href="#">${data.first}</a></ul>
        <ul><a href="#">${data.second}</a></ul>
        <ul><a href="#">${data.third} Support</a></ul>
        <ul><a href="#">${data.fourth}</a></ul>
        <ul><a href="#">${data.fifth}</a></ul>
    </nav>`

    return HTML;

}

export { generateSingleFooter }