var app1 = new Vue({
    el: '#app-1',
    data: {
        maxCount: 140,
        remainingCount: 140,
        message: '',
        hasError: false
    },
    methods: {
        countdown: function() {
            this.remainingCount = this.maxCount - this.message.length;
            this.hasError = this.remainingCount < 0;
        }
    }
})