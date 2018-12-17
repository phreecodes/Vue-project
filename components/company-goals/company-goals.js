
Vue.component('company-goals', {
    template: `
    
    <div class="cover-company-goals" style="width:50%">
        <h4 class="text-center" style="width:100%;">Let's discuss more details about your company goal and see how we can help</h4>
        <div class="cover-company-goals-form" style="">
            <form action="" class="email-form" style="width:70%;">
                <input type="text" name="email" placeholder="Enter Your Email..." class="email-input">
                <button type="button" class="btn btn-warning text-light get-started-button" style="border: none; border-radius: 0px; width:30%;">Get started</button>
            </form>
        </div>
    </div>
    
    `
})





new Vue({
    el: '#company-goals'
})