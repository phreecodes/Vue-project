
Vue.component('why-finto', {
    props: ['ph'],
    template: `
    <div class="container why-finto-cards">
        <div class="row">
            <div class="col">
                <div class="container">
                    <img src="" alt="">
                    <h5> {{ ph }} </h5>
                    <p>{{ ptext }}</p>
                </div>
            </div>
        </div>
    </div>
    
    `,
    data () {
        return{
            ptext: 'Again, keeping it realy simple. Exactly the same views were used within a split view. So this only took about two minutes.'
        }
    }

    
})











new Vue({
    el: '#why-finto'
})