<template>
    <div class="text-center mx-auto col-lg-5 alert alert-warning" v-if="error">
        Couldn't create a new post
    </div>
    <div class="add" v-else>
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
import axios from 'axios'
export default {
    name: 'AddView',
    mounted(){//after completely page loaded
        if(!this.$store.state.isAuthenticated){
            this.$router.push("/login")
        }
    },
    data() {
        // let articles = localStorage.getItem("articles")
        // articles = JSON.parse(articles)
        return {
            // articles: articles,
            title: '',
            description: '',
            content: '',
            error: false,
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
           axios                                
            .post(`/articles/`, article)
            .then((response) => {
            this.$router.push(`/article/${article.slug}`) //redirect to the new article page
            })
            .catch((e) => {
                this.false = true
            })
        // this.$store.commit("login", `${this.username}:${this.password}`)
        // this.$router.push("/profile")    
        //    this.articles.push(article)
        //    let database = JSON.stringify(this.articles)
        //    localStorage.setItem("articles", database)
        }
    }

}
</script>
  