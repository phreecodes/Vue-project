Vue.component('post-message', {
    props: ['tittle', 'body'],

    data(){
        return {
            isVisible: true
        };
    },
    template: `
    
    <div class = "message" v-show="isVisible">
        <div class = "message-header">
            {{ tittle }}


            <button type="button" @click = hideModel()>x</button>
        </div>
        <div class = "message-body">
            {{ body }}
        </div>
    </div>
    
    `,

    methods: {
        hideModel(){
            this.isVisible = false
        }
    }
});

new Vue({
    el: '#test'
});