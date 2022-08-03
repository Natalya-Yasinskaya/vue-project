<template>
  <ul>
    <li v-for="item in news" :key="item.id">
      <p>{{ item.title }}</p>
      <p>{{ item.full_text }}</p>
      <p>Rating: {{ item.rating }}</p>
      <button v-on:click="() => deleteItem(item.id)">X</button>
    </li>
  </ul>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export default {
  name: "MyTest",
  components: {
    Paginate,
  },
  data() {
    return {
      news: [
        // {
        //   id: 1,
        //   title: 'Google title',
        //   description: 'Google description',
        //   link: 'www.google.com',
        //   rating: 1,
        // },
        // {
        //   id: 2,
        //   title: 'Yandex title',
        //   description: 'Yandex description',
        //   link: 'www.yandex.com',
        //   rating: 2,
        // },
        // {
        //   id: 3,
        //   title: 'Yahoo title',
        //   description: 'Yahoo description',
        //   link: 'www.yahoo.com',
        //   rating: 3,
        // }
      ]
    }
  },
  methods: {
    deleteItem: function(id) {
      const deleteIndex = this.news.findIndex((item) => item.id === id);
      this.news.splice(deleteIndex, 1);
    },
  },
  mounted() {
    axios
      .get(`${BASE_URL}/abc`)
      .then(response => this.news = response.data.data);
  }
};
</script>