const app = Vue.createApp({
    el: '#app',

    data() {
        return {
            name: '',
            age: null
        }
    },

    computed: {
        isValidAge() {
            return !Boolean(this.age);
        },
        isFormValid() {
            return this.name && this.age
        }
    },

    methods: {
        submit() {
            if (!this.isFormValid) return;

            alert('Submitted');
        }
    }
})

app.mount('#app')

const checkBox = Vue.createApp({
    el: '#v-model-multiple-checkboxes',
    data() {
        return {
            checkedNames: []
        }
    }
})

checkBox.mount('#v-model-multiple-checkboxes')

// new Vue({
//     el: ".vue",
//     data() {
//         return {
//             howAreYouFeeling: "great"
//         };
//     }
// });

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

// Vue.createApp({
//     data() {
//         return {
//             selected: 'A',
//             options: [
//                 { text: 'One', value: 'A' },
//                 { text: 'Two', value: 'B' },
//                 { text: 'Three', value: 'C' }
//             ]
//         }
//     }
// }).mount('#v-model-select-dynamic')