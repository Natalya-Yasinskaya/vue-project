<template>
    <ul>
      <li v-for="item in news" :key="item.id">
        <RouterLink :to="{ name: 'article', params: { id: item.id }}">
          <p>{{ item.title }}</p>
        </RouterLink>
        <p>{{ item.full_text }}</p>
        <p>Rating: {{ item.rating }}</p>
        <button v-on:click="() => deleteItem(item.id)">X</button>
      </li>
    </ul>
    <Observer @intersect="intersected"/>
</template>

<script>
import Observer from "./Observer.vue";
import { RouterLink } from "vue-router";

const BASE_URL = 'http://127.0.0.1:8000';

export default {
  name: "MyTest",
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
    deleteItem: function(id) {
      const deleteIndex = this.news.findIndex((item) => item.id === id);
      this.news.splice(deleteIndex, 1);
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