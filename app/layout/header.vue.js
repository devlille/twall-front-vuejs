(function() {
    'use strict';

    Vue.component('tw-toolbar', {
        template: `
            <div class="mdl-layout__header-row">
                <div class="mdl-layout-spacer"></div>
                <div class="live">
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