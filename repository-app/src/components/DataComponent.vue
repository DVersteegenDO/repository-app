<template>

    <div class="container">

        <div v-for="d in data" class="container input-container">
            <v-text-field v-for="a in d" variant="outlined">{{ a }}</v-text-field>
        </div>

    </div>

</template>

<script>

export default {
    props: ['data'],
    data() {
        return {

        }
    }
}

</script>

<style scoped>

.container {
    border: black solid 5px;
}

.input-container {
    padding: 10px;
}

</style>