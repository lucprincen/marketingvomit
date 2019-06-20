<template>
    <article class="current-post">
        <div class="title"><i>&ldquo;</i><h2 v-html="title"></h2><i>&rdquo;</i></div>
        <span class="emoji">🤢</span>
    </article>
</template>

<script>
    export default {
        name: 'CurrentPost',
        computed: {
            title(){
                let _post = this.$store.getters.getCurrentPost;
                return _post.title.rendered;
            }
        }
    }
</script>
<style>
    .current-post{
        text-align: center;
        max-width: 80%;
        margin: auto;
    }

    .current-post h2{
        font-weight: 400;
        font-size: 4.5rem;
    }

    .current-post .title{
        display: block;
        text-align: center;
    }

    .current-post .title i,
    .current-post .title h2{
        display: inline-block;
    }

    .current-post .emoji{
        font-size: 4rem;
        margin-top: 50px;
    }
</style>