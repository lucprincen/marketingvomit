<template>
    <div class="site-wrapper">
        <header>
            <h1>Marketing Vomit</h1>
            <p>Your daily batch of nauseating bullshit</p>
        </header>
        <main>
            <nuxt />
        </main>
        <footer>
            <strong>
                This site is an hommage to horrible marketing jargon. 
            </strong>
            <p>Disclaimer: this is the dumbest side-project <a href="https://twitter.com/LucP" target="_blank">@LucP</a> has ever created.</p>
            <small>(also my sincerest appologies to the italian community for hijacking their top-level domain)</small>
        </footer>
    </div>
</template>

<style>

    html {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: papayawhip;
    }

    .site-wrapper{
        display: flex;
        flex-flow: column nowrap;
        height: 100%;
        min-height: 100vh;
    }

    header{
        margin: 0 auto 50px auto;
        background: white;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        width: 300px;
        padding: 10px;
        text-align: center;
    }

    header h1{
        padding: 15px 0 0 0;
        color: hotpink;
        font-size: 1.85rem;
        text-transform: uppercase;
    }

    header p{
        font-size: 1rem;
        padding-bottom: 5px;
    }

    footer{
        margin-top: auto;
        background: white;
        border-top: 2px solid rgba(0,0,0,.2);
        padding: 30px;
        text-align: center;
    }

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    margin: 0;
    }
</style>
