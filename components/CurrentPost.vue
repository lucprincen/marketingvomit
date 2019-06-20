<template>
    <article class="current-post">
        <h2 class="title" v-html="title"></h2>
        <span class="emoji">🤢</span>
        <Controls/>
    </article>
</template>

<script>

    import Controls from './Controls.vue';

    export default {
        name: 'CurrentPost',
        components: { Controls },
        computed: {
            title(){
                let _post = this.$store.getters.getCurrentPost;
                if( typeof( _post ) !== 'undefined' ){
                    return '<i>&ldquo;</i>' + _post.title.rendered + '<i>&rdquo;</i>';
                }else{
                    return '';
                }
            }
        }
    }
</script>