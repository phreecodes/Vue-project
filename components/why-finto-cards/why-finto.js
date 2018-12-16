
Vue.component('why-finto', {
    props: ['ph'],
    template: `
            <div class="col">
                <div class="container why-finto-cards">
                    <img src="../images/tree.jpg" alt="" style="border-radius:50%; width: 50px; height:50px; margin-bottom:40px;">
                    <h5 style="margin-bottom:30px"> {{ ph }} </h5>
                    <p class="finto-grey-text">{{ ptext }}</p>
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