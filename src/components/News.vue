<template>
    <ul class="news_list">
      <li class="news_item" v-for="item in news" :key="item.id">
        <RouterLink :to="{ name: 'article', params: { id: item.id }}">
          <p>{{ item.title }}</p>
        </RouterLink>
        <p>{{ item.full_text }}</p>
        <p>Rating: {{ item.rating }}</p>
        <button class="news_delete-btn" v-on:click="() => deleteItem(item.id)">Delete</button>
      </li>
    </ul>
    <Observer @intersect="intersected"/>
</template>

<script>
import Observer from "./Observer.vue";
import { RouterLink } from "vue-router";

const BASE_URL = 'http://127.0.0.1:8000';

export default {
  name: "News",
  components: {
    Observer,
  },
  data() {
   return {
     news: [],
     page: 1,
     limit: 5,
   }
  },
  methods: {
    deleteItem: async function(id) {
      try {
        const formData = new FormData();
        formData.append('id', id);
        const data = await fetch(`${BASE_URL}/delete-news`, {
            method: 'POST',
            body: formData,
          }
        );
        if (data.ok) {
          const deleteIndex = this.news.findIndex((item) => item.id === id);
          this.news.splice(deleteIndex, 1);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async intersected() {
      const res = await fetch(`${BASE_URL}/abc?page=${this.page}&limit=${this.limit}`);
      const { data } = await res.json();
      this.page++;
      this.news = [...this.news, ...data];
    },
  },
};
</script>