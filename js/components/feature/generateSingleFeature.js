import {isValidFeature }from './isValidFeature.js'
function generateSingleFeature (feature){
    //input validation

    if (!isValidFeature(feature)) {
        return ''; 
    } 
    //logic

    const HTML =  `
    <div class="box">
    <div class="left" style="background-color:#${feature.background};"> <i class= "${feature.icon}" style=" color: #${feature.color};"></i> </div>
    <div class="right">
        <h3> ${feature.title} </h3>
        <p>${feature.description}</p>
    </div>
    </div>`
    
    

    //output
    return HTML;

}
export {generateSingleFeature}
