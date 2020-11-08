---
title: Thinking in patterns
description: Designing with design patterns
date: '2016-03-03T15:09:21.000Z'
categories: []
keywords: []
slug: /@aniboaz/thinking-in-patterns-2c022e0f1c73
---

_Lately I've noticed two words running around everywhere - Design patterns._

Although we like to think of the mind as wild and chaotic. It [recognizes patterns](https://en.wikipedia.org/wiki/Pattern_recognition_%28psychology%29), [divides into groups](http://zellwk.com/blog/why-vertical-rhythms/) and plans in a generic manner. understanding that modular thinking is part of our nature, is another reason for developing pattern thinking methodology. Lately I've read a lot of articles on designing in patterns, so I wanted to make some sense of it. I will also use this to explain my own “pattern” work-process.

If you want to dig in and skip the theory Jump to “In practice” for my work-process.

So what do people even mean when they talk about “design patterns”?

The source of the term is based on Alexander Christopher’s use. Alexander realized that using patterns we can reorder chaotic, complex designs. He originally talked about architecture, but this also applies to a wide variety of subjects, [including computing language](https://en.wikipedia.org/wiki/Software_design_pattern)s.

> _In short, no pattern is an isolated entity. Each pattern can exist in the world only to the extent that is supported by other patterns: the larger patterns in which it is embedded, the patterns of the same size that surround it, and the smaller patterns which are embedded in it._

> Alexander Christopher

For example a wall being part of a group, making a room, which is part of the floor, part of a building, a street, a city and so on.

Reading this really clicked for me. because this synecdoche effect of mini elements effects the way we receive and build complex products like dashboards and websites.

### Brand-book

Of course, the idea of guidelines and rules isn't new to the design field. The branding process uses the term “style-guide” to describe a brand “bible”. containing either a text definition of the brand, or meticulously defining each small visual aspects.

Is this just a design tool?

![Nasa’s 1976 guideline](https://cdn-images-1.medium.com/max/600/0*OWe5yJOnAE2-kQbH.jpg)
Nasa’s 1976 guideline

Hell no. In fact, one of the prominent examples for that is a book defining practical laws made by a government corporation you all know today as NASA. In 1976 “ Graphics Standards Manual” they specify every graphic element requiring to brand.

Why would NASA go trough all this trouble if this [PDF](https://www.nasa.gov/sites/default/files/atoms/files/nasa_graphics_manual_nhb_1430-2_jan_1976.pdf) just contains design languages? Because it concerns more then just brand aesthetics.

I believe the basis for making design rules of any kind is meant to prevent _anti-pattern._ An anti pattern is a dangerous case of chaos and arbitrary thinking within the product.

In NASA’s case it’s easier to explain, because every decision can cause a catastrophe, like the space launch crashes. the brand and graphic design shouldn't be any different from any other practical elements of the product. Today this is even more relevant now that a greater percent of the product itself could be digitally or graphically designed(like websites or apps).

### Style-guide

So what about these digital products? their “brand book” is called style-guide because its more then just brand. the guide now consists of specifying parts of the website as well as the elements inside it. Here is [medium](https://www.behance.net/gallery/7226653/Medium-Brand-Development)’s style-guide as a good example.

![[Frontify](http://www.frontify.com) lets you build a nice living styleguide](https://cdn-images-1.medium.com/max/600/0*26ij41k0MWq_iMzT.png)
[Frontify](http://www.frontify.com) lets you build a nice living styleguide

Just like the brand-book, this is not a designer’s exclusive tool. the digital product also now involves web developers who use these guides in a practical way.

In [this](https://24ways.org/2012/design-systems/) article by Laura Kalbag, Laura defined a system called “design system” trying to cope with the fragmentation problem of website dev. later Brad Frost took these and rephrased his own dogma called “[Atomic design](http://bradfrost.com/blog/post/atomic-web-design/)”.

Inspired by the periodic table, Brad reorganized the “webpage” into components. then he put them in order to create a new thought process.

Basicly dividing the differnet pages components like “searchfield” or “navbar” to molecules. reminds you of something? thats right,a synecdoche just like Alexander Christopher.

Here’s a library of elements of “a list apart”: [http://patterns.alistapart.com/](http://patterns.alistapart.com/)

![Datepicker design](https://cdn-images-1.medium.com/max/800/0*GPagR2HCEr7UlJXG.jpg)
Datepicker design

This is what UX designers call _ui patterns._

[these two](http://pttrns.com/) [websites](http://uigarage.net/) give many examples of ui patterns in mobile. These patterns are also a logic pattern that can be used as a product design point of view. for instance: a pattern for “on — boarding” users on mobile, or checkout in an e-commerce site. this modular way of thinking can actauly lead to a more creative way of thinking. for example you can switch try and use differnt patterns for differnt sections of the product. Daniel Mall [gives a very bright example of this.](http://danielmall.com/articles/content-display-patterns/)

Design systems are important because developers are essentially creating and designing in av vacuum without it. Just like we designers know the rules and styleguides importance. This is even more important in project with large teams or agile workflow. here is an example of [working with this principle in a big data project.](https://www.artefactgroup.com/work/tableau-9/)

### frameworks

such as [bootstrap](http://getbootstrap.com), are a developer’s infrastructure of the product. so natraly they contain all the rules and pattern for the product. this is also prominent in in mobile developing. seeing [Google’s material guidelines](https://material.google.com/patterns/data-formats.html) or apples rules give developers a good solid pattern based design which contribute to faster development and later the user understanding.

This is also the case with modern web-dev products like [Wix](http://www.wix.com/) or [webflow](https://webflow.com/), and in the future can lead to the automation of this trade(at least to some extant).

Even Wordpress [recently developed a new modular starter framework](https://github.com/Automattic/theme-components/tree/master/components) for developing themes.

Lately there are also many styleguide frameworks like [Fabricator](https://fbrctr.github.io/) out there, which can help you define and build the patterns and components library.

### Breaking the pattern

The big disadvantage of working in patterns?

To put it simply, patterns and models are a generic solution that doesn't provide flexibility or creativity. Think of your product as a car, How would you like it to look?

True, [all cars look the same.](https://medium.com/@yugenelee/everything-looks-the-same-part-1-8c489259697#.ihys4bky9) [they all have](https://louderthanten.com/coax/design-machines) a wheel an engine and 4 wheels. That’s because the use case is the same, and we use it in the same way. So why are there luxury cars and collectibles ?

I guess I shouldn't write about it when so many good articles have been written about it already. like this quote:

> _The two worst things a designer can do are either uncritically accept the status quo, or flippantly renounce long-held traditions._

> [Eli Schiff](http://humaninterfaceguidelines.tumblr.com/post/139807433410/elischiff)

I am a very creative person so my use of rules and patterns is vital to create better products from my starting point.

Still the danger of overuse of patterns means you should ask yourself

Whats my goal? It involves not what product but what stage of the design are you at. The creative and brainstorming part cant be blocked by modular thinking. on the other hand somewhere along the line before development we may want to “get real” and think practically.

### In practice

*   Are you a web developer? there are many new tools like “[fabricator](https://fbrctr.github.io/)” out there to help create a living styleguide out of your code.
*   working with _sketch_?no problem, [here](http://blog.invisionapp.com/atomic-design-principles/) is a great article on working in patterns with sketch.
*   Working with invision? [Here’s](http://webdesign.tutsplus.com/tutorials/how-to-conduct-an-interface-inventory-with-invision--cms-25792) a way of using their inspiration boards as a work process.
*   _This article was written before Adobe XD &_ [_CRAFT_](https://labs.invisionapp.com/craft) _were introduced, but both have_ [_some featured_](https://www.youtube.com/watch?v=KR-AE-yznY4) _which supports modular work._

### Designing in patterns via Photoshop

First of all I try to work using an existing grid or framework. I use [guideguide](http://guideguide.me/) to rapidly define preset grids. As I were saying, I believe the design system’s key is to understand it doesnt begin at the project inception. After the product’s first screen is designed, you can decipher and divide the page, and make another file — call it a styleguide. put in it all the components, patterns and **styles** you can.

![](https://cdn-images-1.medium.com/max/800/0*OTCCwH1uSRP0_VM8.png)

[libraries](http://www.adobe.com/il_en/creativecloud/libraries.html) this tool allows me to identify and define patterns and styles and use them in the future in a similar manner. the prominent example is collecting the color pallatte and using it in the click of a button. This tool still has many issues, like needing to rename manually each text style you sample.

[Renamy](http://www.klaia.com/Renamy/) is a great tool for rapidly renaming a components to “button” “checkbox” or “Card” for examples.. This may seem small but theres a big difference between “button” and “rectangle copy 54".

Working with your own Ui kit doesnt mean you need any special tools, but just creating and combining it within your process is already a great improvement.

### Designing in patterns via adobe illustrator

Besides all of the above written in Ps , which is relevant to illustrator(like libraries). Symbols help to unify and work with repeatble objects (like photoshop’s smart objects).

Another great thing about illustrator is the apperance and graphic styles usage which can be implemented rspidly.

#### See also

a frontend\\designer collab tool for creating a styleguide — [frontify.com](https://frontify.com/)

[Craft](http://labs.invisionapp.com/craft) by invisionlabs

more styleguides as inspiration — [http://styleguides.io/](http://styleguides.io/)

[This](https://www.smashingmagazine.com/2016/01/is-the-internet-killing-creativity/) is (by far) the best article you can read about this subject

_Originally published in Hebrew at_ [_www.aniboaz.co.il_](http://www.aniboaz.co.il/Blog/blog/2016/03/03/designpatterns/) _(my Blog) March 3, 2016._