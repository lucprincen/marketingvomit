import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            current: 0,
            posts: []
        },
        getters: {
            getCurrentPost: ( state ) => {
                return state.posts[ state.current ];
            },
            getMax: ( state ) => {
                return state.posts.length - 1;
            }
        },
        mutations: {
            setCurrent(state, current) {
                state.current = current;
            },
            savePosts(state, posts) {
                state.posts = posts
            }
        },
        actions: {

            setCurrent: (context, current ) => {
                context.commit('setCurrent', current );
            },

            savePosts: ( context, posts ) => {
                context.commit( 'savePosts', posts );
            }

        }
    })
}

export default createStore
