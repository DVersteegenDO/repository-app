<template>

    <div id="login-container" class="container">

        <div id="login-container-top">
            <h1>{{ type }}</h1>
        </div>
        <div id="login-container-middle">

            <div v-for="(c, index) in credentials">

                <v-text-field v-if="index.includes('Password')" v-model="credentials[index]" :label="index"
                    variant="outlined" type="password" autocomplete="off" hide-details="auto"
                    class="element"></v-text-field>

                <v-text-field v-else v-model="credentials[index]" :label="index" variant="outlined" autocomplete="off"
                    hide-details="auto" class="element"></v-text-field>

            </div>

            <v-btn variant="outlined" @click="register" class="element">
                Click Me!
                <!-- <template v-slot:loader>
                    <v-progress-linear indeterminate></v-progress-linear>
                </template> -->
            </v-btn>
            <v-btn variant="outlined" @click="testTwo" class="element">
                Test!
                <!-- <template v-slot:loader>
                    <v-progress-linear indeterminate></v-progress-linear>
                </template> -->
            </v-btn>

        </div>

    </div>

</template>

<script>

export default {
    props: ['type', 'credentials'],
    data() {
        return {

        }
    },
    methods: {
        register() {
            this.$emit('register');
        },
        testTwo() {
            this.$emit('peer');
        }
    }
}

</script>

<style scoped>
#login-container {
    background-color: rgb(255, 255, 255, 0.3);
    border: solid 5px green;
    width: 20%;
    margin: 0 auto;
}

#login-container-top {
    text-align: center;
}

#login-container-middle {
    height: auto;
    margin-top: 20px;
}

#login-container-middle>.input {
    width: calc(100% - 20px);
    margin: 0 auto;
}

h1 {
    color: whitesmoke;
    font-weight: bolder;
}

button {
    margin-bottom: 20px;
}
</style>
