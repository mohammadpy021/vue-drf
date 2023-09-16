<template>
  <div class="mx-auto  w-75">
    <div v-if="!articleNotFound">
      <div class="article col-lg-10 mx-auto">
        <!-- {{ this.$route.params }} -->
        <h3>{{ article.title }}</h3>
        <div> {{ article.content }}</div>
        <hr>
        <div class="col-auto" v-if=$store.state.isAuthenticated>
          <button type="submit" class="btn btn-warning mb-3" @click="edit = !edit">Edit</button>
          <button type="submit" class="btn btn-danger mb-3 ms-1" @click="doRemove">Remove</button>
        </div>
      </div>
      <div class="text-center mx-auto alert alert-warning col-lg-10" v-if="errorRemove">
        Something went wrong durin Deleting
      </div>
      <!-- Edit -->
      <div class="text-center mx-auto alert alert-warning col-lg-10" v-if="errorEdit">
        Something went wrong durin Editing
      </div>
      <form class="col-lg-10 mx-auto mb-3 shadow p-4 rounded" @submit.prevent="doEdit" v-if="edit">
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
          <button type="submit" class="btn btn-warning mb-3">Confirm Edit</button>
        </div>
      </form>
    </div>
    <div class="text-center alert alert-warning" v-else>
      Article Not found
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ArticleView',
  data() {
    // let articles = localStorage.getItem("articles")
    // articles = JSON.parse(articles)                 //convert it from string to json
    // let article = articles.find(
    //   article => article.slug === this.$route.params.slug
    // )
    return {
      article: {},
      articleNotFound: false,
      title: "",
      description: "",
      content: "",
      errorEdit: false,
      errorRemove : false,
      edit: false
      // articles : articles, 
      // article: article,
      // title: article.title,
      // description: article.description,
      // content: article.content,
    }
  },
  mounted() {
    axios
      .get(`/articles/${this.$route.params.slug}/`)
      .then((response) => {
        this.article = response.data,
          this.title = this.article.title,
          this.description = this.article.description,
          this.content = this.article.content
      })
      .catch((e) => {
        this.articleNotFound = true
      })

  },
  methods: {
    doEdit() {
      let article = {
        title: this.title,
        slug : this.title.replaceAll(" ", "-").toLowerCase(),
        description: this.description,
        content: this.content
      }
      axios
        .put(`/articles/${this.$route.params.slug}/`, article)
        .then((response) => {
          this.edit = false
          this.article = article
          this.$router.push(`/article/${article.slug}`) //redirect to the new article page
        })
        .catch((e) => {
          this.errorEdit = true
        })
      //   let index = this.articles.findIndex(
      //   article => article.slug === this.$route.params.slug
      // )
      // this.articles[index] = {
      //   title: this.title,
      //   slug : this.title.replaceAll(" ", "-").toLowerCase(),
      //   description: this.description,
      //   content: this.content
      // }
      // let database = JSON.stringify(this.articles)
      // localStorage.setItem("articles", database)
      // this.article = this.articles[index]
      // this.$router.push(`/article/${this.article.slug}`) //redirect to the Edited article page
      // this.edit = false
    },
    doRemove(){
      axios
        .delete(`/articles/${this.$route.params.slug}/`)
        .then((response) => {
          this.$router.push('/') //redirect to Home page
        })
        .catch((e) => {
          this.errorRemove = true
        })
    //   let index = this.articles.findIndex(
    //   article => article.slug === this.$route.params.slug
    // )
    //   this.articles.splice(index, 1) // splice wont gieve us "undefined"
    //   let database = JSON.stringify(this.articles)
    //   localStorage.setItem("articles", database)
      // this.$router.push('/') //redirect to Home page
    }
  }
}
</script>
  