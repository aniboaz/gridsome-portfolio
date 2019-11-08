<template>
  <Layout>
    <div class="hero bg-gold mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="font-serif text-6xl leading-tight">Boaz Lederer</div>
        <div class="text-blue leading-tight">Product designer</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="https://res.cloudinary.com/aniboaz/image/upload/dpr_auto,q_auto:best/bgb.png" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->


    <div class="container mx-auto px-4">

          <section class="py-12 px-4 text-center">
            <div class="w-full max-w-2xl mx-auto"><span class="text-sm font-semibold">TAGLINE</span>
              <h2 class="text-5xl mt-2 mb-6 leading-tight font-heading">No paper plane can be made without paper</h2><a class="text-blue-700 hover:underline" href="#">Learn more &raquo;</a>
            </div>
          </section>

          <section class="py-8 px-4">
            <div class="flex flex-wrap -mx-4 -mb-6">
              <div class="lg:w-1/3 px-4 mb-6"><img src="placeholders/icons/shield.svg" alt="">
                <h3 class="text-xl my-2 font-heading">High durability</h3>
                <p class="text-gray-500 leading-relaxed">Forget about paper jams with our increased stability product. Ideal for high-quality printing, colour printing and photocopying.</p>
              </div>
              <div class="lg:w-1/3 px-4 mb-6"><img src="placeholders/icons/cloud-tools.svg" alt="">
                <h3 class="text-xl my-2 font-heading">Versatility</h3>
                <p class="text-gray-500 leading-relaxed">Multi-functional paper for various office needs. Snow-white sheets will shine bright like diamond for many years.</p>
              </div>
              <div class="lg:w-1/3 px-4 mb-6"><img src="placeholders/icons/cart.svg" alt="">
                <h3 class="text-xl my-2 font-heading">Value-based price</h3>
                <p class="text-gray-500 leading-relaxed">The best combination of quality and economy comes with Dunder Mifflin paper. The offer includes paper in wide range of density and sizes.</p>
              </div>
            </div>
          </section>

          <section class="py-12 px-4">
            <h2 class="text-3xl text-center mb-8 font-heading">Latest posts</h2>

            <div class="flex flex-wrap -mx-4">
            <div v-for="post in $page.posts.edges" :key="post.id" class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div class="h-full pb-8 rounded shadow-md"><g-link :to="post.node.path" class="text-copy-primary">  <img src="http://placekitten.com/200/300">
                        </g-image>
                    <div class="px-6"><small>{{ post.node.date }}| {{ post.node.timeToRead }} min read</small>
                      <h3 class="text-xl my-3 font-heading">{{ post.node.title }}</h3>
                      <p class="text-gray-500">  {{ post.node.summary }}</p>
                    </div></g-link></div>
              </div>
          </div>
            </div>

          </section>

                    <section class="py-12 px-4">
                      <div class="flex flex-wrap -mx-4">
                        <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                          <div class="flex flex-col h-full p-8 bg-gray-200 rounded">
                            <span class="text-sm font-semibold">more about me</span>
                            <h2 class="text-4xl font-heading font-serif">I have been specializing in graphic design and animation for over 10 years. </h2>
                            <h3 class="text-3xl font-heading">I'm social, autodidact, independent and very creative. </h3>
                            <p class="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed">After studying animation and film at Sapir academic college, I started working as head of graphics @ Mizmor-HD video productions. Studied User Experience design @Netcraft. then got the opportunity to be a full-time GUI expert @ Inkod-hypera. Currently Product designer <a href="#">@ Cloudinary.</a></p>
                          </div>
                        </div>

                            <div class="w-1/2 p-4"><img class="rounded shadow-lg" src="http://res.cloudinary.com/aniboaz/image/upload/c_scale,f_auto,q_90,w_560/buzy.jpg" alt="a pictrure of me"></div>


                      </div>
                    </section>

          <section class="py-12 px-4">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div class="flex flex-col h-full p-8 bg-gray-200 rounded">
                  <h2 class="text-3xl font-heading">Dunder Friends, a.k.a Companies Who Work With Us</h2>
                  <p class="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed">We don’t believe in paperless future - so do our Customers.</p><a class="text-right text-blue-700 hover:underline" href="#">View all Dunder Mifflin customers</a>
                </div>
              </div>
              <div class="lg:w-1/2 px-4">
                <div class="flex flex-wrap -m-2">
                  <div class="w-1/2 p-2"><img class="rounded shadow-md" src="placeholders/pictures/office.jpg" alt=""></div>
                  <div class="w-1/2 p-2"><img class="rounded shadow-md" src="placeholders/pictures/work.jpg" alt=""></div>
                  <div class="w-1/2 p-2"><img class="rounded shadow-md" src="placeholders/pictures/work.jpg" alt=""></div>
                  <div class="w-1/2 p-2"><img class="rounded shadow-md" src="placeholders/pictures/office.jpg" alt=""></div>
                </div>
              </div>
            </div>
          </section>
        </div>


  

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><g-image src="../../static/avatar.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>

        <div class="responsive-container">
        </div>
      </div> <!-- end get-to-know me -->
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Contact me:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <p class="mb-12">Static sites cannot submit forms on their own. However, services like <a href="https://www.netlify.com/docs/form-handling">Netlify Forms</a> or <a href="https://formspree.io">FormSpree</a> can help you do this without a backend.</p>

          <div class="text-lg sm:text-lg mb-16">
            <form action="#" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                  <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                      <label class="block mb-2 text-copy-primary" for="name">
                          Name
                      </label>

                      <input type="text" name="name" id="name" placeholder="Jon Snow" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                  </div>

                  <div class="w-full px-4 md:w-1/2">
                      <label class="block text-copy-primary mb-2" for="email">
                          Email Address
                      </label>

                      <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                  </div>
              </div>

              <div class="w-full mb-12">
                  <label class="block text-copy-primary mb-2" for="message">
                      Message
                  </label>

                  <textarea id="message" rows="5" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Enter your message here." required></textarea>
              </div>

              <div class="flex justify-end w-full">
                  <input type="submit" value="Submit" class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
              </div>
          </form>
          </div>
        </div>
      </div> <!-- end contact-me -->
    </div>

    <div class="newsletter bg-background-tertiary">
      <div class="container-inner mx-auto py-16 pb-8 text-center textl-xl">
        <h2 class="text-2xl font-bold mb-8">Join my Newsletter</h2>

        <div class="w-4/5 mx-auto mb-8">
          <p class="mb-8 text-lg sm:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum. Quam, deleniti nulla.</p>


        </div>
      </div>

      <div class="container-inner mx-auto -mt-32 pb-4 overflow-x-hidden">
      </div>
    </div>

  </Layout>
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
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
