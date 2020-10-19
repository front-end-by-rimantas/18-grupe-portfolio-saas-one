import { renderSingleAddress } from './renderSingleAddress.js'

function renderAddress(data) {
    let HTML = '';
    const addressDOM = document.querySelector(data.selector)
    const addressCount = data.address.length;

    for (let i = 0; i < addressCount; i++) {
        const address = data.address[i];
        if (i = 0) {
            HTML += renderSingleAddress(address);
        }
        if (i = 1) {
            HTML += renderSingleAddress1(address);
        }
        if (i = 2) {
            HTML += renderSingleAddress2(address);
        }
    }
}
        return addressDOM.innerHTML = HTML;
    }

export { renderAddress }


// <div class="adrs-box">
// <div class="adrs-icons"><i class="fas fa-map-marker-alt"></i></div>
// <h5 class="adrs-box-titles">Our Location</h5>
// <p class="adrs-paragraphs">Danmondi, 7563 King Meadow <br> Suite 896, USA</p>
// </div>