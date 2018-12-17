
Vue.component('our-clients', {
    template: `
    <div class="container">
            <div class="why-finto">
                <h4 class="clients-say">What Our Clients Are Saying About Us</h4>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="cover-image">
                        <img src="../images/images.jpg" alt="" class="man-image">  
                    </div>
                    <div class="arrow-icons">
                        <i style="font-size:30px;" class="fa fa-long-arrow-left left-arrow" aria-hidden="true"></i>
                        <i style="font-size:30px; margin-left: 15px;" class="fa fa-long-arrow-right right-arrow "></i>
                </div>                 
                </div>
                <div class="col-md-7">
                    <div class="container cover-text">
                        <div style="width:70%;">
                                <i style="color:grey; font-size:50px;" class="fa fa-quote-left quote"></i>
                            <p class="finto-grey-text">
                                A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration
                                and summary or something withing a review of the latest book on Chaucer.
                            </p>
                            <div class="founder">
                                <div>
                                    <h6>Major Leen.</h6>
                                    <p class="finto-grey-text">
                                        Founder, CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
    
    `,

});

    Vue.component('best-price', {
        template: `
        
        <div class="best-price">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Find how we <br> offer the best prices in this era</h3>
                    </div>
                    <div class="col-md-6">
                        <div class="cover-date">
                            <span class="monthly">
                                <input type="radio" name="date" id="monthly"> <span> Monthly </span>
                            </span>
                            <span class="yearly">
                                <input type="radio" name="date" id="yearly"> <span> Yearly </span>
                            </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        `
    })



new Vue({
    el: '#clients'
})