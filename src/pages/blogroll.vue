<template>
  <section class="bg-background-tertiary py-12 px-4"><div class="flex flex-wrap -mx-4">
<div class="lg:w-1/4 px-4 mb-8 lg:mb-0"><h2 class="text-3xl text-center mb-8 font-heading">Latest from my blog</h2>
</div>

  <div v-for="post in $page.posts.edges" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
      <div class="h-full bg-background-primary pb-8 rounded shadow-md"><g-link :to="post.node.path" class="text-copy-primary"> <img :src="post.node.cover" :alt="post.node.title">
          <div class="px-6"><small>{{ post.node.date }}| {{ post.node.timeToRead }} min read</small>
            <h3 class="text-xl my-3 font-heading">{{ post.node.title }}</h3>
            <p class="text-gray-500">  {{ post.node.summary }}</p>
          </div></g-link></div>
    </div>
</div>
  </div>

</section>
</template>


<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>
<script>
import PaginationPosts from '../components/PaginationPosts'
</script>
