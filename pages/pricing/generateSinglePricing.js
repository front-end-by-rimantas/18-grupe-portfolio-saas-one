function generateSinglePricing(data) {


    const HTML = `<div class="header">
                    <img src="${data.image}" alt="paveikslelis">
                        <h3>${data.title}</h3>
                        <p>${data.paragraph}</p>
                        <h2 class="price"> &#36;${data.price} </h2>
                        <p> ${data.priceTitle} </p>
                        <div class="button"> choose this plan </div>
                    </div>
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
                </div>`;

    return HTML;
}

export { generateSinglePricing }