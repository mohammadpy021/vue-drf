<template>
    <div class="article">
{{this.$route.params}}
      <h3>{{ article.title }}</h3>
      <div> {{article.content }}</div>
      <hr>
    </div>
  </template>
  
  <script>
  
  
  
  export default {
    name: 'ArticleView',
    data(){
      let articles = localStorage.getItem("articles")
      articles = JSON.parse(articles)                 //convert it from string to json
      let article = articles.find(
        article => article.slug === this.$route.params.slug
      )
      return {
        // articles : articles,
        article : article
      
      }
    }
  
  }
  </script>
  