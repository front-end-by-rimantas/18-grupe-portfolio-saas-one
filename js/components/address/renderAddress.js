import { renderSingleAddress } from './renderSingleAddress.js'

function renderAddress(data) {
    let HTML = '';
    const addressDOM = document.querySelector(data.selector)
    const addressCount = data.address.length;
    console.log(addressDOM);
    console.log(addressCount);

    for (let i = 0; i < addressCount; i++) {
        const address = data.address[i];
        HTML += renderSingleAddress(address);
    }
    return console.log(addressDOM.innerHTML = HTML);
}

export { renderAddress }


{/* <div class="adrs-box">
<div class="adrs-icons"><i class="fas fa-map-marker-alt"></i></div>
<h5 class="adrs-box-titles">Our Location</h5>
<p class="adrs-paragraphs">Danmondi, 7563 King Meadow <br> Suite 896, USA</p>
</div> */}