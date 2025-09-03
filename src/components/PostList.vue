<script>
  import PostItem from "@/components/PostItem.vue";

  export default{
    components: {PostItem},
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <div>
    <h3>Список пользователей</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
    />
  </div>
</template>

<style scoped>

</style>