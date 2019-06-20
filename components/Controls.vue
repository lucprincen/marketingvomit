<template>
    <nav class="prev-next">
        <nuxt-link 
            :to="prevPath" 
            v-if="hasPrevious"
            class="button"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Previous Vomit
        </nuxt-link>
        <nuxt-link 
            :to="nextPath" 
            v-if="hasNext"
            class="button"
        >
            Next Vomit
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </nuxt-link>
    </nav>
</template>
<script>

    export default {
        name: 'Controls',
        computed: {
            nextPath(){
                return '/vomit/'+ ( parseInt( this.$store.state.current ) + 1 );
            },
            prevPath(){
                return '/vomit/'+ ( parseInt( this.$store.state.current ) - 1 ); 
            },
            hasPrevious(){
                if( this.$store.state.current > 0 ){
                    return true;
                } 
                
                return false;
            },
            hasNext(){
                if( this.$store.state.current < this.$store.getters.getMax ){
                    return true;
                } 

                return false;
            }
        },
    }
</script>