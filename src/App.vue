<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
    />
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'html', body: 'about html'},
        {id: 2, title: 'css', body: 'about css'},
        {id: 3, title: 'javaSctipt', body: 'about js'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    }
  }
}
</script>

<style scoped>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 .app {
   padding: 20px;
 }
</style>