Vue.component('win-win', {
    template: `
    <div class="cover">
        <h4>Bring to the table <br> win-win survival strategies</h4>
        <p class="finto-grey-text mt-4 mb-4">
            We work simultaneously to integrate corporate responsibility in our core business and make our expertise available
            for the benefit of the societies where we operate
        </p>
        <p class="finto-grey-text">
            We've been supporting WordPress since the beginning. Perfect for large sites or agencies managing multiple clients.
            Our easy-to-use control panel and API let you spend
        </p>
    </div>
    `,
});

Vue.component('my-percent', {
    props: ['percent', 'conversions'],
    template: `
    <div>
        <p class="finto-grey-text mt-4">
        Upto
        </p>
        <h3 class="forty-five"> {{ percent }} </h3>
        <p class="conversions">
            {{ conversions }}
        </p>
    </div>
    `,
});


new Vue({
    el: '#win-win'
})