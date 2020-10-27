import { generateSingleFeature } from "./generateSingleFeature.js";

function renderFeature(data) {

    //input validation

    //logic
    let HTML = '';
    const featuresDOM = document.querySelector(data.selector);
    const featuresCount = data.features.length;
    if(!featuresDOM){
        return;
    }
    for (let i = 0; i < featuresCount; i++) {
        const feature = data.features[i];
        
        HTML += generateSingleFeature(feature);        
    }

    // post logic validation

    return featuresDOM.innerHTML = HTML;
}

export { renderFeature }

