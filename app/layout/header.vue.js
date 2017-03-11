(function() {
    'use strict';

    Vue.component('tw-rubbon', {
        template: `
            <div class="mdl-grid mdl-grid--no-spacing rubbon">
                <div class="mdl-cell mdl-cell--7-offset mdl-cell--1-col shape-triangle"></div>
                <div class="mdl-cell mdl-cell--4-col"></div>
            </div>
            `        
    });

    Vue.component('tw-toolbar', {
        template: `
            <div class="mdl-grid mdl-grid--no-spacing">
                <div class="mdl-cell mdl-cell--2-offset-desktop mdl-cell--6-col mdl-cell--middle">
                    #
                    <img src="content/img/logo_devfestlille.svg" alt="devfestlille 2017" />
                </div>
                <div class="mdl-cell mdl-cell--2-col mdl-cell--middle live">
                    <span class="red-dot"></span>
                    En direct
                </div>
            </div>
            `        
    });

    new Vue({
        el: '#header'
    });
})();