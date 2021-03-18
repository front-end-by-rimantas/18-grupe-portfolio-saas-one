class Projects {
    constructor(params) {
        this.selector = params.selector;
        this.insertionPosision = params.insertionPosision || 'beforeend';
        this.data = params.data;

        this.DOM = null;
        this.projectsDOM = null;
        this.projectsNumberDOM = null;

        this.init();

    }

    init() {

        if (!this.isValidSelector()) {
            return "";
        }

        this.render();
        this.addEvents();
        this.scrollAnimation();

    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        let HTML = "";

        for (let num of this.data) {

            HTML += ` <div class="counter">
                        <div class="proj-numb clr" style="color:${num.color}">${num.number}</div>
                        <div class="proj-let clr" style="color:${num.color}">${num.amount}</div>
                          <div ><p> ${num.title}</p> </div>
                    </div >`

        }

        this.DOM.insertAdjacentHTML(this.insertionPosision, HTML);
        this.projectsDOM = this.DOM.querySelectorAll(".counter");
        this.projectsNumberDOM = this.DOM.querySelectorAll('.counter > .proj-numb')
    }

    scrollAnimation() {
        const screenBottomY = scrollY + innerHeight;


        for (let i = 0; i < this.data.length; i++) {
            const num = this.projectsNumberDOM[i];


            if (num.dataset.run) {
                continue;
            }

            const numBottomY = num.offsetTop + num.offsetHeight;
            if (numBottomY < screenBottomY) {
                num.dataset.run = true;

                let currentValue = 0;
                const finalValue = this.data[i].number;
                const timeAmount = 1;                   // seconds
                const fps = 24;                         // frames per second
                let step = 0;
                const totalSteps = timeAmount * fps;

                const timer = setInterval(() => {
                    step++;
                    currentValue = Math.ceil(finalValue / totalSteps * step);
                    this.projectsNumberDOM[i].innerText = currentValue;


                    if (currentValue >= finalValue) {
                        clearInterval(timer);
                    }

                }, 1000 / fps);

            }
        }
    }

    addEvents() {
        addEventListener('scroll', () => {
            this.scrollAnimation();
        })
    }
}
export { Projects }