<template>
  <div class="home">
   <article v-for="article in articles">
    <router-link :to="`/article/${article.slug}`" >{{ article.title }}| </router-link>
    <!-- <h3><a :href="`/article/${article.slug}`"> {{ article.title }} </a></h3> -->
    <div> {{article.description }}</div>
    <hr>
  </article>
  </div>
</template>

<script>



export default {
  name: 'HomeView',
  data(){
    //  in console :
    //  artices = [ ..... ] 
    //  articles = JSON.stringify(articles)
    //  localStorage.setItem("articles", articles)
    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles)                 //convert it to json
    return {
      articles : articles
      // articles:[
      //   {
      //     title:"Title1",
      //     slug : "title-1",
      //     description : "title1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae." ,
      //     content : "title1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae."
      //   },
      //   {
      //     title:"Title2",
      //     slug : "title-2",
      //     description : "title2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae." ,
      //     content : "title2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dignissimos ducimus accusamus ratione nobis ea. Nisi, facere accusamus iusto quo alias beatae doloremque porro cum temporibus aspernatur deserunt commodi repudiandae."
      //   }
      // ]
    }
  }

}
</script>
