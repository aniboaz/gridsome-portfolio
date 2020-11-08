<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div v-for="post in $page.posts.edges" :key="post.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ post.node.description }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>

<!--new-->
<section class="text-gray-700 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <article v-for="post in $page.posts.edges" :key="post.id" class="p-12 md:w-1/2 flex flex-col items-start">
 <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="post.node.cover" :alt="post.node.title">
      <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">  <g-link
          :to="tag.path"
          v-for="tag in post.node.tags"
          :key="tag.id"
          class="inline-block py-1 px-3 rounded bg-orange-100 text-orange-500 text-sm font-medium tracking-widest">
          {{ tag.title }}
        </g-link>
</div>
        <h2 class="sm:text-3xl text-2xl title-font font-serif text-gray-900 mt-4 mb-4"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <p class="leading-relaxed mb-8">{{ post.node.description }}</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
          <a class="text-orange-500 inline-flex items-center"><g-link :to="post.node.path" class="font-bold uppercase">Read More...</g-link>
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
            {{ post.node.timeToRead }} min read
          </span>
          <span class="text-gray-600 inline-flex items-center leading-none text-sm">
            {{ post.node.date }}
          </span>
        </div>
        <!--a class="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
            <span class="text-gray-500 text-sm">UI DEVELOPER</span>
          </span>
        </a-->
      </article>

    </div>
  </div>
</section>
<!--end-new-->

  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 4, page: $page) @paginate {
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
        description
        summary
        timeToRead
        cover
        path
        tags {
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  }
}
</script>
