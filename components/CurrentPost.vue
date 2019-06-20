<template>
    <article class="current-post">
        <h2 v-html="title"></h2>
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
        margin: 25vh auto;
    }

    .current-post h2{
        font-weight: 400;
        font-size: 4.5rem;

    }

    .current-post .emoji{
        font-size: 4rem;
        margin-top: 50px;
    }
</style>