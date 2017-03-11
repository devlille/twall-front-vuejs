(function() {
    'use strict';

    Vue.component('tw-tweet', {
        props: ['tweet'],
        template: `
                <div class="mdl-grid tweet">
                    <div class="mdl-cell mdl-cell--1-col mdl-cell--middle avatar">
                        <i class="material-icons mdl-list__item-avatar">person</i>
                    </div>
                    <div class="mdl-cell mdl-cell--11-col">
                        <p class="content">
                            played the role of Walter in Breaking Bad. He is also known
                            for playing Hal in Malcom in the Middle.
                        </p>
                        <p class="user">Bryan Cranston</p>
                    </div>
                </div>
                `
    });

    new Vue({
        el: '#tweets',
        data: {
            tweets: [],
            timeout: null
        },
        methods: {
            fetchTweets: fetchTweets
        },
        created: created,
        beforeDestroy: beforeDestroy,
        components: ['tw-tweet']
    });

    function fetchTweets() {
        this.tweets.push('youhou');
    }

    function created() {
        this.fetchTweets();
        this.timeout = window.setInterval(this.fetchTweets, 5000);
        // fetchTweet
        // setInterval
    }

    function beforeDestroy() {
        // clearInterval
        window.clearInterval(this.timeout);
    }

})();