<template>

    <CurrentPost/>
</template>

<script>

    import CurrentPost from '~/components/CurrentPost.vue'
    import axios from 'axios';

    export default {
        name: 'Vomit',
        components: { CurrentPost },
        created () {
            setTimeout( () => {
                this.setCurrent()
            }, 100 );
            
        },
        methods: {
            setCurrent(){
                this.$store.commit( 'setCurrent', this.$route.params.id );
            }
        },
        async fetch ({ store, params }) {
            if( store.state.posts.length == 0 ){
                let { data } = await axios.get( 'https://staging.lucp.nl/marketingvomit/wp-json/wp/v2/posts?per_page=100&order=asc' );
                store.commit( 'savePosts', data );
                store.commit( 'setCurrent', 999 ); 
            }
        }
    }
</script>
