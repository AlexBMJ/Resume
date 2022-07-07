<template>
    <head>
        <meta name="description" content="The resume of Alexander Jacobsen, also known as AlexBMJ. This is a CV detailing my work life as software developer with a list of skills within information technology.">
    </head>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app {
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
