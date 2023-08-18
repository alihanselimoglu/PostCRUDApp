<template>
  <PostForm :post="post" :submitForm="updatePost"/>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
  components: {
    PostForm,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const API_URL = 'http://localhost:5000/posts';

    const post = ref({
      title: '',
      content: '',
      creator: '',
    });

    onMounted(() => {
      getPost();
    });

    async function getPost() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      post.value = json;
    }
    async function updatePost() {
      const { id } = route.params;
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: post.value.title,
            content: post.value.content,
            creator: post.value.creator,
          }),
        });
        const json = await response.json();
        router.push({
          name: 'home',
        });
      } catch (error) {}
    }

    return {
      post,
      updatePost,
    };
  },
};
</script>

<style></style>
