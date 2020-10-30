class HeaderNav {
    constructor(params) {
        this.DOM = document.querySelector(params.selector);
        this.headerMenu = params.headerMenu;
        this.render()
    }


    // DATA VALIDATION FUNCTION
    isValidHeader(headerMenu) {
        let errors = [];


        if (headerMenu.title === "") {
            errors.push("ERROR: Title negali but tuscias tekstas");
        }
        if (typeof headerMenu.title !== 'string') {
            errors.push("ERROR: Title turi but tekstas");
        }
        if (headerMenu.title.length > 20) {
            errors.push("ERROR: Title negali but ilgesnis nei 15 simboliu");
        }
        if (errors.length > 0) {
            for (let i = 0; i < errors.length; i++) {
                console.error(errors[i]);
            }
            return false;
        }
        return true;
    }

    generateHTML(headerMenu) {
        let navHTML = '';

        // DATA VALIDATION
        for (let menuItem of headerMenu) {
            if (!this.isValidHeader(menuItem)) {
                return '';
            }

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
