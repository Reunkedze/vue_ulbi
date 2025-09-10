import {createStore} from "vuex";
import {postModule} from "@/store/postModule";

export default createStore({
    state: {
        isAuth: false,
    },
    // getters: {
    //     doubleLikes(state) {
    //         return state.likes * 2;
    //     }
    // },
    // mutations: {
    //     incrementLikes(state, likes) {
    //         state.likes += 1;
    //     },
    //     decrementLikes(state, likes) {
    //         state.likes -= 1;
    //     }
    // },
    // actions: {
    //
    // },
    modules: {
        post: postModule,
    }
})