const selectdynamic = Vue.createApp({
    el: 'v-model-select-dynamic',
    data() {
        return {
            selected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    }
}).mount('#v-model-select-dynamic')
