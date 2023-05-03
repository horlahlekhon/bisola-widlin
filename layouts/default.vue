<template>
    <main>
        <slot/>
    </main>
</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped>
main{
    scroll-behavior: smooth !important;
}
</style>
