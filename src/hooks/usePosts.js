import axios from "axios"
import { onMounted, ref } from "vue";

export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(false)
    const fetching = async () => {
        try {
        isPostsLoading.value = true;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
              _page: 1,
              _limit: limit,
            }
          });
          totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);
          posts.value = response.data;
          isPostsLoading.value = false;
        }, 1000)
      } catch (e) {
        alert('Error fetching posts');
      }
    }

    onMounted(fetching)
    
    return {
        posts,
        isPostsLoading,
        totalPages
    }
    
}