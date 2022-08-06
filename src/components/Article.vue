<template>
    <div>
        Some article
        <h1>Новость номер {{ newsId }}</h1>
    </div>
</template>


<script>

export default {
    name: 'article',
    computed: {
        newsId () {
            return +this.$route.params.id;
        }
    },
	props: ['id', 'title', 'full_text', 'rating'],
	data() {
		return {

		}
	}
}
</script>