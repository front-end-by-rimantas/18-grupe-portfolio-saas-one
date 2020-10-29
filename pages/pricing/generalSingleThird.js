function generalSingleThird() {

    const HTML = `<h2 class="price"> &#36;${data.price} </h2>
                <div class="header">
                <h3> ${data.title}</h3 >
                        <p>${data.paragraph}</p>                        
                    </div >
    <div class="details">
        <div>
            <i class="${data.FirstIcon}"></i>
            <p>Product Recommendations</p>
        </div>
        <div>
            <i class="${data.SecondIcon}"></i>
            <p>Only 10 Users</p>
        </div>
        <div>
            <i class="${data.ThirdIcon}"></i>
            <p>Order Notifications</p>
        </div>
        <div>
            <i class="${data.FourthIcon}"></i>
            <p>Support 24/7</p>
        </div>
        <div>
            <i class="${data.FifthIcon}"></i>
            <p>No Updates</p>
        </div>
        <div class="button"> choose this plan </div>
        <p> use our free product </p>
    </div>`;

    return HTML;

}

export { generalSingleThird }