<template>
    <h3>Home</h3>
</template>

<script>
export default {
    unmounted(){
        console.log("Unmounted")
    },
    activated(){
        console.log("Activated")
    },
    deactivated(){
        console.log("Deactivated")
    },
};
</script>