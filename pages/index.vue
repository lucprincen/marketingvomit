<template>
    <CurrentPost/>
</template>

<script>

    import CurrentPost from '~/components/CurrentPost.vue'
    import axios from 'axios';

    export default {
        name: 'App',
        components: { CurrentPost },
        async fetch ({ store, params }) {
            let { data } = await axios.get( 'https://staging.lucp.nl/marketingvomit/wp-json/wp/v2/posts?per_page=100' );
            store.commit( 'savePosts', data );
            store.commit( 'setCurrent', 0 );
        }
    }
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
