<template><div>
        <button @click="onClickAge">Update Age</button>
        <button @click="ageChangeFn(3)">Update Age CB</button>
        <p>The user is {{age}} years old</p>
        <p>{{ ageDoubled }}</p>
    </div>
</template>

<script>
export default{
    name: 'User',
    props: ["age"],
    emites: ['ageChange'],
    props:{
        age:{
        type: Number,
        // default: 20,
        validator(value){
            return value < 130
        }
        },
        ageChangeFn: Function
    },
    computed:{
        ageDoubled(){
            return this.age * 2
        }
    },
    methods: {
        onClickAge(){
            this.$emit('ageChange',3)
        }
    }
}
</script>