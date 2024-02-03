const vm = Vue.createApp({
    data() {
        return{
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank" >Google</a>',
            age: 20,
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            this.age++
        },
        updateLastName(message,event){
            console.log(message)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        },
    }
}).mount('#app')

// setTimeout(() =>{
//     vm.firstName = 'Bob'
// },2000)
// Vue.createApp({
//     data() {
//         return{
//             firstName: 'Jari',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')
