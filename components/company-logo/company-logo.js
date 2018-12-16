
Vue.component('company-logo', {
    template: `
    <div class="container">
        <div class="company-logos-cover">
                <img src="../images/universal.png" alt="" class="company-logos">
                <img src="../images/johnson.png" alt="" class="company-logos">
                <img src="../images/veolia.png" alt="" class="company-logos">
                <img src="../images/seatgeek_logo.png" alt="" class="company-logos2">
                <img src="../images/vevo.png" alt="" class="company-logos2">
                <img src="../images/airliquide.png" alt="" class="company-logos2">
            </div>
        </div>
    </div>
    
    `

    
})











new Vue({
    el: '#company-logo'
})