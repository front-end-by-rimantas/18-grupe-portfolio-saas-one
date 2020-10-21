class HeaderNav {
    constructor(params) {
        console.log(params);

        this.DOM = document.querySelector(this.selector);

        this.render()
    }

    generateHTML() {
        const HTML = `
            <a class="navbtn" href="#">Home.</a>
        `
        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }
}

export { HeaderNav };