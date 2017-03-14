(function() {
    'use strict';

    Vue.component('tw-tweet', {
        props: ['tweet'],
        template: `
                <div class="mdl-cell mdl-card mdl-shadow--2dp tweet">
                    <div class="mdl-card__title mdl-card--expand user">
                        <h2 class="mdl-card__title-text">@FGruchala</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </div>
                    <div class="mdl-card__actions mdl-card--border time">
                        2 minutes
                    </div>
                </div>
                `
    });

    new Vue({
        el: '#tweets',
        data: {
            tweets: ['', '', '', '', '', '', '', '', '', '']
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
        //this.fetchTweets();
        //timeout = window.setInterval(this.fetchTweets, 5000);
    }

    function beforeDestroy() {
        window.clearInterval(timeout);
    }

})();