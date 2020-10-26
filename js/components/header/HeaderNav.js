class HeaderNav {
    constructor(params) {
        console.log(params);
        this.DOM = document.querySelector(params.selector);
        this.headerMenu = params.headerMenu;
        console.log(this.headerMenu);
        this.render()
    }

    generateHTML(headerMenu) {
        let navHTML = '';

        for (let menuItem of headerMenu) {
            if (!menuItem.dropdown) {
                navHTML += `
                    <a class="navbtn" href="${menuItem.link}">${menuItem.title}</a>
                `
            }
            if (menuItem.dropdown) {
                navHTML += `<div class="dropdown">`;
                navHTML += `<a class="navbtn" href="${menuItem.link}">${menuItem.title}</a>`;
                navHTML += `<div class="dropdown-content">`;
                navHTML += this.generateHTML(menuItem.dropdown);
                navHTML += `</div>`;
                navHTML += `</div>`;
            }
        }
        return navHTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML(this.headerMenu);
    }
}

export { HeaderNav };