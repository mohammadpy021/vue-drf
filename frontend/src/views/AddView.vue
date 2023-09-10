<template>
    <div class="add">
        <form class="col-lg-5 mx-auto shadow p-4 rounded" @submit.prevent="doAdd">
            <h3> Add a new post</h3>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Confirm</button>
            </div>
        </form>
    </div>
</template>
<script>

export default {
    name: 'AddView',
    data() {
        let articles = localStorage.getItem("articles")
        articles = JSON.parse(articles)
        return {
            articles: articles,
            title: '',
            description: '',
            content: ''

        }
    },
    methods: {
        doAdd() {
           let article = {
            title : this.title,
            slug : this.title.replaceAll(" ", "-").toLowerCase(),
            description: this.description,
            content: this.content
           }
           this.articles.push(article)
           let database = JSON.stringify(this.articles)
           localStorage.setItem("articles", database)
           this.$router.push(`/article/${article.slug}`) //redirect to the new article page
        }
    }

}
</script>
  