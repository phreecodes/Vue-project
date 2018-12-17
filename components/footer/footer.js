Vue.component('first-column', {
    template: `
    <div>
    <h6 class="mb-4">finto</h6>
    <div class="finto-grey-text" style="line-height:20px;"> 
        Simple UI kits that includes assortment of <br>
        Cards that can be easily modified <br>
        and used for anything
    </div>
    </div>
    
    `
});
Vue.component('second-column', {
    template: `
    <div>
    <h6 class="mb-4">FOR WHOM?</h6>
    <div class="finto-grey-text" style="line-height:20px;"> 
        Autonomous <br>
        Business <br>
        Advice <br>
        Control of expenses <br>
        Mobile app
    </div>
    </div>
    
    `
});
Vue.component('third-column', {
    template: `
    <div>
    <h6 class="mb-4">PRODUCT</h6>
    <div class="finto-grey-text" style="line-height:20px;"> 
        Billing <br>
        Accounting <br>
        Taxes <br>
        Control of expenses <br>
        Mobile app
    </div>
    </div>
    
    `
});
Vue.component('forth-column', {
    template: `
    <div>
    <h6 class="mb-4">COMPANY</h6>
    <div class="finto-grey-text" style="line-height:20px;"> 
        Blog <br>
        About us <br>
        Terms of use <br>
        Privacy policy <br>
        Cookies policy
    </div>
    </div>
    
    `
});

new Vue({
    el: '#footer'
})