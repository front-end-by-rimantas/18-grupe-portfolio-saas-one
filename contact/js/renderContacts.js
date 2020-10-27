function renderContacts(address) {
    // if (!isValidAddressHTML(address)) {
    //     return '';
    // }
    const HTML = `<h3 class="adrs-title">${address.title}</h3>
                <p class="adrs-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident eum ab
                    mollitia, excepturi
                    blanditiis saepe cupiditate! Soluta ad delectus minus libero quas. Nisi, cumque!</p>
                <div class="adrs-box">
                    <p class="adrs-contact">${address.icon}</i>PO Box 16122 Collins Street
                        West Victoria 8007 Australia</p>
                </div>
                <div class="adrs-box">
                    <a href="" class="adrs-contact">${address.icon}${address.email}</a>
                </div>
                <div class="adrs-box">
                    <a href="" class="adrs-contact">${address.icon}${address.phone}</a>
                </div>`;
    return HTML;
}