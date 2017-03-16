(function() {
    'use strict';

    let timeout;

    Vue.component('tw-tweet', {
        props: ['tweet'],
        template: `
                <div 
                    class="mdl-cell mdl-card mdl-shadow--2dp tweet"
                    v-bind:style="{'background-image':(tweet.extended_entities ? 'url('+tweet.extended_entities.media[0].media_url_https+')' : 'none'), 'background-size':(tweet.extended_entities ? 'cover' : 'inherit')}">
                    <div class="mdl-card__title mdl-card--expand">
                        <h5>{{ tweet.text }}</h5>
                    </div>
                    <div class="mdl-card__actions mdl-card--border mdl-grid more-detail">
                        <span class="mdl-cell mdl-cell--4-col">{{ tweet.retweet_count }} RT</span>
                        <strong class="mdl-cell mdl-cell--4-col user">@{{ tweet.user.screen_name }}</strong>
                        <span class="mdl-cell mdl-cell--4-col time">{{ tweet.created_at | tw-clock }}</span>
                    </div>
                </div>
                `
    });

    Vue.filter('tw-clock', function (value) {
        const dateOfTweet = moment(value, "ddd MMM DD HH:mm:ss +ZZ YYYY");
        return moment().locale("fr").to(dateOfTweet);
    });

    new Vue({
        el: '#tweets',
        data: {
            tweets: []
        },
        methods: {
            fetchTweets: fetchTweets
        },
        created: created,
        beforeDestroy: beforeDestroy,
        components: ['tw-tweet']
    });

    function fetchTweets() {
        this.$http
            .get("http://localhost:3002/api/tweet")
            .then(res => this.tweets = res.data)
            .finally(() => timeout = window.setTimeout(this.fetchTweets, 10000));
    }

    function created() {
        this.fetchTweets();
    }

    function beforeDestroy() {
        window.clearTimeout(timeout);
    }

})();