
function renderSingleAddress(ourAddressData) {
    return `<div class="adrs-box-wrap">
    <div class="adrs-box">
        <div class="adrs-icons">${ourAddressData.iconTitle}</div>
        <h5 class="adrs-box-titles">${ourAddressData.title}</h5>
        <p class="adrs-paragraphs">${ourAddressData.text}</p>
        </div>  
    </div>`;
}

export default renderSingleAddress;