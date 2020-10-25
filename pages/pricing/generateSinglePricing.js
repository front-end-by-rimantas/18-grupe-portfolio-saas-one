function generateSinglePricing(data) {


    const HTML = ` <img src=${image} alt="paveikslelis">
                        <h3>${title}</h3>
                        <p>${paragraph}</p>
                        <h2 class="price"> &#36; ${price} </h2>
                        <p> ${priceTitle} </p>
                        <div class="button"> choose this plan </div>
                    </div>
                    <div class="details">
                        <div>
                            <i class=${FirstIcon}></i>
                            <p>Product Recommendations</p>
                        </div>
                        <div>
                            <i class=${SecondIcon}></i>
                            <p>Only 10 Users</p>
                        </div>
                        <div>
                            <i class=${ThirdIcon}></i>
                            <p>Order Notifications</p>
                        </div>
                        <div>
                            <i class=${FourthIcon}></i>
                            <p>Support 24/7</p>
                        </div>
                        <div>
                            <i class=${FifthIcon}></i>
                            <p>No Updates</p>
                        </div>
                    </div> `

    return HTML;
}

export { generateSinglePricing }