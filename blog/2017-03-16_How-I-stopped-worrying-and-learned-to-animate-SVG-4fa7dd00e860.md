---
title: How I stopped worrying and learned to animate SVG
author: Boaz Lederer
description: So you want to create animated icons for your site?
date: '2017-03-16T06:32:00.543Z'
categories: ["code"]
keywords: ["Tag:SVG","Tag:CSS","Tag:Design"]
slug: /@aniboaz/animate-svg-4fa7dd00e860
cover: https://res.cloudinary.com/aniboaz/image/upload/f_auto,q_auto/Blog/animate-svg.jpg
---

![](https://cdn-images-1.medium.com/max/2560/1*XcpTycdmawe56y0OMnLkHw.jpeg)

So you want to create animated icons for your site?

after illustrating some icons for my personal site, I had the notion of animating them. icons should be relatively small part of the site, so lets make a GIF.

![original illustration](https://cdn-images-1.medium.com/max/600/0*ocjqupMkx_lCPpNi.jpg)
original illustration

_\- sigh -_

> Oh man, that means recreating all my vectors to after effects and then exporting animation to photoshop only to come up with a pixelated ugliness..

That was the time I started seeing that web developers who knows what their doing, are using inline svg’s as icons. some are creating [very neat stuff](https://tympanus.net/codrops/2016/03/16/interactive-animated-svg-drum-kit/) [using only live](https://codyhouse.co/gem/animate-svg-icons-with-css-and-snap/) SVG.

#### that’s nice but why should I use SVG?

### SVG’s advantages

first, I’ll have to say, SVG’s arent good for everything. and as always you should ask yourself what about alternaties like [GIF or video.](https://bitsofco.de/optimising-gifs/) the first big advantage is the “scale”, using svg inline also means you can change and twik other properties on top of width or height. (more on that coming up…) Another advantage is creating an svg and coding it means less HTTP requests which usually means your page performs better. but why should I handle [messy code, Im a designer!](https://medium.com/search?q=should%20designers%20code&ref=opensearch)

### The shortcut — [Bodymovin](https://www.behance.net/gallery/27390219/BODYMOVIN)’

It was roughly the same time that Airbnb Design announced [Lottie](http://airbnb.design/lottie/)  
(based on the great [bodymovin](https://github.com/bodymovin/bodymovin) plugin)it reminded me of the good old [swiffy](https://developers.google.com/swiffy/) days. I was amazed someone actually solved my problem and magicly turned animation to code. I Prefered this method mainly because I already work with After effects. So during one of the projects I played around with it and no doubt the resault is not bad at all.

However, Is this the best method for what I need? and whats all this in the json file?

![Bodymovin **scary** code output](https://cdn-images-1.medium.com/max/800/0*sUbxRG00yMakJVmG.jpg)
Bodymovin **scary** code output

It made me realize this solution (with its [limited](https://github.com/bodymovin/bodymovin/wiki/) support) Is not right for me. this massive code and Js add-on is exactly what I wanted to avoid.

The Idea behind Bodymovin is to help export complex animation to code, But what if I just want a simple animation?

Turns out, from a Front end developer point of view there are many alternatives, [Chriss Gannon](https://gannon.tv/) even recreated Lottie’s animation with pure GSAP code, just to prove a point.

So lets try to see more about animating svg without opening any animation program. I looked it up and turns out there are many articles written on the subject.

> the biggest best guide to anything SVG is [Here](https://svgontheweb.com/)

![vector illustration made with (surprise) illustrator](https://cdn-images-1.medium.com/max/800/0*YT1cfvZdiL1ppZF8.png)
vector illustration made with (surprise) illustrator

### What’s SVG anyway?

So After I exported my icons from [illustrator](https://css-tricks.com/using-svg/) (or [Sketch](https://medium.com/sketch-app-sources/exploring-ways-to-export-clean-svg-icons-with-sketch-the-correct-way-752e73ec4694#.nebaa6ybt)). I saw that I can view the same svg file as source in my browser. While there still were many many 1’s and zeros, I saw some familiar faces.

There’s **<Path> **, **Fill**, a **pattern**, even groups (**<g>**). hmm, not so complicated. And turns out all of the bloated code of numbers is a real issue, and the easy fix for it is called SVG-Optimize. And beginners can even use its amazing gui version [SVGOMG](https://jakearchibald.github.io/svgomg/) — a must for anyone working with svg.

Ok now the code is lighter and I can see whats what in the html. This means will be able to manipulate stuff like “fill”, Stroke, width and so on..

So lets try to give it motion

### Easy peasy animation — animate.css

So how can I animate it with minimum fuss? On my website I use the (now conventional) [animate.css](https://daneden.github.io/animate.css/).  
Because I made a Heart icon, i’ll add it a pulsing animation like this:

<path class="**animated pulse infinite**">

And that’s all folks. that’s as simple as it gets.

Animate.css is just the most popular solution. You can find more ‘user friendly ‘ tools on the web. I found two neat online animation editors — the first is svg circus.

### Advanced — CSS animation

The main idea of **animate.css** is a ready-made animation library. First we define the duration:

```css
.animated {-webkit-animation-duration: 1s;animation-duration: 1s;}
```

1s means one second. Then, each animation like ‘pulse’ has its key-frames defined. Telling us from which attributes to which should the animation take place.

```css
@-webkit-keyframes pulse {  from {    -webkit-transform: scale3d(1, 1, 1);    transform: scale3d(1, 1, 1);  }
```

```css
  50% {    -webkit-transform: scale3d(1.05, 1.05, 1.05);    transform: scale3d(1.05, 1.05, 1.05);  }
```

```css
  to {    -webkit-transform: scale3d(1, 1, 1);    transform: scale3d(1, 1, 1);  }}
```

Here we have 3 keyframes playing looped. The first and last has the object regular size, and in half a second (50% of the duration) the size increases.

This is css animation in a nutshell. Its not just easy to understand, its also very recognizable to any animator, just draw it in a timeline.

![here’s [chrome developer timeline](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations) that is very nice to use with web timing and animation:](https://cdn-images-1.medium.com/max/800/0*Gxr58bE3aeqVyQQm.jpg)
here’s [chrome developer timeline](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations) that is very nice to use with web timing and animation:

The use of % also means that changing _animation duration_ wont harm the animation from happening so we can play around with that, or even use same animation with different timing on two separate objects.

Second, this method means we can create our own css animations, and do something a bit more advanced.

Lets say I made this animation of an eye opening and closing.

```css
@keyframes eye { 0% { transform: scale(1, 1); stroke-width: 2px; } 100%{ transform: scale(1, 0); stroke-width: 20px; } }
```

If I want to change the timing so it will blink fast and stay opened I’ll play around with the %

```css
@keyframes eye { 5%, 20% { transform: scale(1, 1); stroke-width: 2px; } 10%, 15% { transform: scale(1, 0); stroke-width: 20px; } }
```

Using the same principle means I can make the eye move left and right and more..

```css
@keyframes pupil {  100%, 30% { transform: scale(1, 1); } 2%, 20% { transform: scale(1.2, 1.2); } 9%, 16% { transform: scale(0, 0); } 75%, 50%, 35% { transform: translate(20px, -4px); } 55%, 65% { transform: translate(-20px, 5px);  }  }
```

### The final animation:
{% codepen https://codepen.io/Aniboaz/pen/WpvpKO %}
<p class="codepen" data-height="727" data-theme-id="light" data-default-tab="html,result" data-user="Aniboaz" data-slug-hash="WpvpKO" data-editable="true" style="height: 727px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG animations for portfolio">
  <span>See the Pen <a href="https://codepen.io/Aniboaz/pen/WpvpKO">
  SVG animations for portfolio</a> by Boaz (<a href="https://codepen.io/Aniboaz">@Aniboaz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
### Pro — use animation libraries and Javascript

The libraries give more animation power as well as interactivity goodness. Right now the top animation libraries that I know of are:

*   [SVGsnap](http://snapsvg.io/)
*   [anime.js](http://anime-js.com/)
*   [https://greensock.com/](https://greensock.com/)
*   [http://mojs.io/](http://mojs.io/)
*   Dont forget Lottie and Bodymovin!

#### Furthur Reading:

This article helped me a-lot :

[**Animate SVG with CSS**  
_Animating SVG with CSS is like animating any other element with CSS-it can be done with transitions, transforms, and…_jonsuh.com](https://jonsuh.com/blog/animate-svg-with-css/ "https://jonsuh.com/blog/animate-svg-with-css/")[](https://jonsuh.com/blog/animate-svg-with-css/)

[originally published on my blog](http://www.aniboaz.co.il/Blog/blog/2017/03/14/svg-anim/) in hebrew
