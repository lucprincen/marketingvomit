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
            if( store.state.posts.length == 0 ){
                let { data } = await axios.get( 'https://staging.lucp.nl/marketingvomit/wp-json/wp/v2/posts?per_page=100&order=asc' );
                store.commit( 'savePosts', data );
                store.commit( 'setCurrent', ( data.length - 1 ) );
            }
        }
    }
</script>