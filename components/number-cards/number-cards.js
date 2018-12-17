Vue.component('best-prices-card', {
    template: `
    
    <div class="number-cards">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="container best-prices-card">
                            <div>
                                <h1 class="mb-4 numbers" style="color: rgba(66, 0, 189, 0.938);"> <sup>$</sup>57</h1>
                                <h6 class="mb-4">Start</h6>
                                <p class="finto-grey-text">
                                    Business And Finance Analysing <br>
                                    SEO Optimization <br>
                                    Managment and Marketting <br>
                                    24/7 Customer Support.
                                </p>
                                <button type="button" class="btn btn-warning start-now-button mt-4" style="">Start Now</button>
                            </div>       
                        </div>
                        <div class="under-card">
                            <span>Or</span> 
                            <button type="button" class="btn btn-warning text-light get-started-button" style="border: none; height: 45px; margin-left: 2%;">Make Custom Offer</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="container best-prices-card">
                            <div>
                                <h1 class="mb-4 numbers" style="color: rgba(207, 62, 86, 0.938);"> <sup>$</sup>82</h1>
                                <h6 class="mb-4">Professional</h6>
                                <p class="finto-grey-text" style="line-height:25px;">
                                    Strategy and Research <br>
                                    Business And Finance Analysing <br>
                                    SEO Optimization <br>
                                    Managment and Marketting <br>
                                    Website Design and Development <br>
                                    24/7 Customer Support.
                                </p>
                                <button type="button" class="btn btn-warning start-now-button mt-4" style="">Start Now</button>
                            </div>       
                        </div>
                    </div>
                    <div class="col-md-4 last-card">
                        <div class="container best-prices-card">
                            <div>
                                <h1 class="mb-4 numbers" style="color: rgba(52, 153, 221, 0.938);"> <sup>$</sup>133</h1>
                                <h6 class="mb-4">Enterprise</h6>
                                <p class="finto-grey-text">
                                    Business And Finance Analysing <br>
                                    SEO Optimization <br>
                                    Managment and Marketting <br>
                                    24/7 Customer Support.
                                </p>
                                <button type="button" class="btn btn-warning start-now-button mt-4" style="border: 1px solid rgba(52, 153, 221, 0.938);">Start Now</button>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `
})


new Vue({
    el: '#best-prices-card'
})