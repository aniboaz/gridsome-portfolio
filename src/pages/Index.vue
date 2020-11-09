<template>
  <Layout>
<!--section>
    <!-- Idea adapted from http://jsfiddle.net/dbushell/32mAb/2/
    var font animation: https://css-irl.info/variable-font-animation-with-css-and-splitting-js/->

    <div class="ring" id="ring">
      <svg class="ring-text-1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600" height="600" viewBox="0 0 300 300">
        <defs>
          <path id="circlePath" d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 " />
          <path id="circlePath2" d=" M 150, 150 m -100, 0 a 100,100 0 0,1 200,0 a 100,100 0 0,1 -200,0 " />
        </defs>

        <g class="group">
          <use xlink:href="#circlePath" fill="none" />
          <text fill="#ff00ff">
            <textPath xlink:href="#circlePath">{{ line1 }}</textPath>
          </text>
        </g>
      </svg>

      <div class="ring">
        <svg class="ring-text-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600" height="600" viewBox="0 0 300 300">
          <defs>

          </defs>

          <g class="group">
            <use xlink:href="#circlePath" fill="none" />
            <text>
              <textPath xlink:href="#circlePath2">{{ line2 }}</textPath>
            </text>
          </g>
        </svg>
      </div>

      <div class="ring">
        <svg class="ring-text-3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600" height="600" viewBox="0 0 300 300">
          <defs>
            <path id="circlePath3" d=" M 150, 150 m -80, 0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0 " />
          </defs>

          <g class="group">
            <use xlink:href="#circlePath" fill="none" />
            <text fill="#ff00ff">
              <textPath xlink:href="#circlePath3">{{ line3 }}</textPath>
            </text>
          </g>
        </svg>
      </div>

      <div class="ring">
        <svg class="ring-text-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600" height="600" viewBox="0 0 300 300">
          <defs>
            <path id="circlePath4" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
          </defs>
          <g class="group">
            <use xlink:href="#circlePath" fill="none" />
            <text fill="#ff00ff">
              <textPath xlink:href="#circlePath4">{{ line4 }}</textPath>
            </text>
          </g>
        </svg>
      </div>
      <img class="ring" src="https://res.cloudinary.com/aniboaz/image/upload/r_max,c_fit,w_400,h_400,dpr_auto,q_auto:best/bgb.png" width="200">
      <style scoped type="css">
      section{width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;}
      .ring {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: none;
        /*border: 1px solid gray;*/
      }
      .ring > svg {
        width: 800px;
        transition: all 2s ease-in-out 1s;
      }

      svg g text {
        fill: black;
        font-variation-settings: "wght" 100, "wdth" 85;
      }

      svg g text {
        font-variation-settings: "wght" 800, "wdth" 100;
        transition: all 1s ease-out;
      }

      .ring:hover text {
        transform: rotate(0deg);
      }

      .ring-text-1,
      img.ring:hover {
        animation: rotate 60s linear infinite reverse;
        z-index: 1;
      }
      /*.ring-text-1 text, .ring-text-3 text{animation: breathe 4s infinite forwards;}
      .ring-text-2 text, .ring-text-4 text{animation: breathe 2s infinite forwards;}*/
      .ring-text-2 {
        animation: rotate 42s linear infinite;
        z-index: 2;
      }
      .ring-text-3 {
        animation: rotate 30s linear infinite reverse;
      }
      .ring-text-4 {
        animation: rotate 20s linear infinite;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }

      @keyframes breathe {
        60% {
          font-variation-settings: "wght" 900, "wdth" 100;
        }

        100% {
          font-variation-settings: "wght" 100, "wdth" 85;
        }
      }
      </style>
</section-->

    <div class="hero bg-ginger mx-auto flex flex-col sm:flex-row justify-between pt-16">
      <div class="pl-16 text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <span class="text-white text-small">Hi there, this is the website of</span>
        <div class="font-serif text-6xl text-black leading-tight">An Interactive designer</div>
        <div class="text-purple leading-tight">Product Designer & Animator called <i>Boaz.</i></div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="https://res.cloudinary.com/aniboaz/image/upload/dpr_auto,q_auto:best/bgb.png" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!--end old hero -->

<div class="container mx-auto px-4">
        <Advantages />
</div>
          <section class="bg-background-tertiary py-12 px-4"><div class="flex flex-wrap -mx-4">
      <div class="lg:w-1/4 px-4 mb-8 lg:mb-0"><h2 class="text-3xl text-center mb-8 font-heading">Latest from my blog</h2>
</div>

            <div v-for="post in $page.posts.edges" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
                <div class="h-full bg-background-primary pb-8 rounded shadow-md"><g-link :to="post.node.path" class="text-copy-primary"> <img :src="post.node.cover" :alt="post.node.title">
                    <div class="px-6"><small>{{ post.node.date }}| {{ post.node.timeToRead }} min read</small>
                      <h3 class="text-xl my-3 font-heading">{{ post.node.title }}</h3>
                      <p class="text-copy-secondary">  {{ post.node.description }}</p>
                    </div></g-link></div>
              </div>
          </div>
            </div>

          </section>

                    <section>
                      <div class="container mx-auto px-4">
                      <div class="flex flex-wrap -mx-4">
                        <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                          <div class="flex flex-col h-full p-8 rounded">
                            <span class="text-sm font-semibold text-purple">more about me</span>
                            <h2 class="text-4xl mb-2 font-heading font-serif">I have been specializing in graphic design and animation for over 10 years. </h2>
                            <h3 class="text-3xl mb-2 font-heading">I'm social, autodidact, independent and very creative. </h3>
                            <p class="max-w-sm mt-auto mb-8 text-copy-secondary leading-relaxed">After studying animation and film at Sapir academic college, I started working as head of graphics @ Mizmor-HD video productions. Studied User Experience design @Netcraft. then got the opportunity to be a full-time GUI expert @ Inkod-hypera. Currently Product designer <a href="#">@ Cloudinary.</a></p>
                          </div>
                        </div>

                            <div class="lg:w-1/2 p-4"><img class="rounded shadow-lg hover:shadow-xl" src="https://res.cloudinary.com/aniboaz/image/upload/c_scale,f_auto,q_90,w_560/buzy.jpg" alt="a pictrure of me"></div>

</div>
                      </div>
                    </section>


        </div>


    <!--div class="overflow-x-hidden">
      <section class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">

          <div class="py-12 px-4">
	<div class="flex flex-wrap -mx-4">
		<div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
			<div class="flex flex-col h-full p-8 bg-gray-200 rounded">
				<h2 class="text-3xl font-heading">Dunder Friends, a.k.a Companies Who Work With Us</h2>
				<p class="max-w-sm mt-auto mb-8 text-copy-secondary leading-relaxed">We don’t believe in paperless future - so do our Customers.</p><a class="text-right text-blue-700 hover:underline" href="#">View all Dunder Mifflin customers</a>
			</div>
		</div>
	</div>
	<div class="lg:w-1/2 px-4">

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

						<input type="email" name="email" id="email" placeholder="email@example.com" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
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
</div-->
	<!-- end contact-me -->
	</div>
	</div></div>
</section>

<section id="logos" class="py-12 px-4 text-center">
  <span class="text-sm font-semibold">sub</span>
    <h1 class="text-purple text-4xl font-serif font-heading"> Proud to work with</h1>

<div class="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1" id="logo-grid">

  <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
    <img src="https://res.cloudinary.com/aniboaz/image/upload/f_auto/logos/cloudinary_logo_text.svg"><!-- Column Content -->
  </div>

  <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
    <!-- Column Content -->
  </div>

  <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
    <!-- Column Content -->
  </div>

  <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/4">
    <!-- Column Content -->
  </div>

</div>

</section>


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
        description
        timeToRead
        path
        cover
      }
    }
  }
}
</page-query>

<script>

import Advantages from '../components/advantages';
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Advantages
  },
  data: {
    line1: "people focused product designer",
    line2: "product designer @ cloudinary",
    line3: "animator, UX designer, redhead",
    line4: "My name is Boaz Lederer 👋"
  }
}
</script>
