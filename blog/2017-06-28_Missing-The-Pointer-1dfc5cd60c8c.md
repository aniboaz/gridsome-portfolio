---
title: Missing The Pointer
description: The Easy UX feedback you forgot to place in your product
date: '2017-06-28T10:46:04.636Z'
categories: []
keywords: []
slug: /@aniboaz/missing-the-pointer-1dfc5cd60c8c
---

![](https://cdn-images-1.medium.com/max/2560/1*lO4QmBGGCB04Xyd4ENBPfg.gif)

### The Easy UX feedback you forgot to place in your product

How many Cursors does your service use? Well, actually, how many cursors can you think of?

One more question, when was the last time you used a _crosshair_?

#### Why its easily overlooked

*   **Mobile/ touch/ voice-** the future of ui, and recently took over as the [leading way](http://www.telegraph.co.uk/technology/2016/11/01/mobile-web-usage-overtakes-desktop-for-first-time/) we interact in the digital world.
*   Thinking by _cursor_ I mean “pointer”. Meaning you don’t realize it’s importance.

#### Why should you care?

Here are 3 reasons:

### Affordance

One of the most important principles of user experience is affordance. meaning the design of “entities” should convey how we use them. this not only saves trouble for the user, but is a fundamental key to making your product **usable**. [Microsoft guideline](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742466%28v=vs.85%29.aspx) has a pretty in depth writing on the subject.

this means the cursor is critical in preventing user errors and confusion — [example](http://littlebigdetails.com/post/22652411323/os-x-lion-the-cursor-reflects-the-fact-that-a). A common [question](https://ux.stackexchange.com/questions/52329/where-to-use-the-default-cursor-and-pointer-cursor-in-button-and-label) has to do with the endless Pointer Vs. mouse cursor. You could change all your buttons to pointer, though it doesn't hurt. In general, [This doesn't take care of all your affordance problems](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b), but I believe neglecting it is a bad option.

if you go over your UI and think of the differnt uses of each cursor — odds are youll change more than the cursor itself.

a gaming cursor example

### Orientation

In general my opinion is the gaming industry pioneered many of the principles we see today.(games always push the limits of interaction) the use of gaming avatars, cursors or location signs is no different. this is because one of the most important principles the game idustry use is the “[alter self”](https://en.wikipedia.org/wiki/Mirror_stage) representation. not just **avatars** or fictional characters but a fantasy world where you **are** _driving that car, you can be_ [_everything_](https://youtu.be/JYHp8LwBUzo). In order to allow this experience for the user, the ui in gaming has to be very helpful and very **s**[**patial aware**.](https://medium.com/elepath-exports/spatial-interfaces-886bccc5d1e9)

![microsoft uses light as a key locator in their fluent design (hololens)](https://cdn-images-1.medium.com/max/600/0*2n66INz8EB_rHDAI.gif)
microsoft uses light as a key locator in their fluent design (hololens)

Besides the large use of skeomorfizm and other unique styles, lots of games ui also has to do with players physical location or cursor. This is most dominant in first person shooters for obvious reasons, the main contoroller. Acting as the weapon. This concept is also shared with VR since it’s very important for users to have a sense of presence as part of the ground rules.

_here’s an example of how much orientation is important in VR :)_

Google’s [daydream guidelines](https://developers.google.com/vr/distribute/daydream/design-requirements) stress the advantages of rendering the “controller” and drawing a laser guide to help the user

![](https://cdn-images-1.medium.com/max/600/0*8mv4BcOv7VUr7CDn.png)

> The benefits of the laser are:

> Faster to notice and follow than just a cursor.

> Best way to communicate the angle of the ray and help with the intuitive feel of how the orientation of the controller input affects the ray.

> Realtime feedback.

> After using another interaction mode (driving, flying, rolling), showing the laser is a clear indication that the interaction mode has changed to ray-based UI input.

This is the tip of the iceberg, alot of UX _spatial_ principals like [Fitt’s law](https://en.wikipedia.org/wiki/Fitts%27s_law) demand not just a layout, but an interaction with a cursor(/user) in mind.

### Future plans

another interesting use case similar with gaming is **shared interaction** when co-working on the same screen. screen sharing and online games or chats have a very important base of “who’s doing what when”. Products like google drive, or Figma use the cursor to manifest the users “presence” in the shared document or canvas.

![Figma’s Sean VS. Hana working on a horribly colored train app](https://cdn-images-1.medium.com/max/800/1*8POB0OS9nK3kOurW1M8hvQ.gif)
Figma’s Sean VS. Hana working on a horribly colored train app

If you think AR or voice interaction dont need all this fuzz, Think of the most dominant professional tools — now think how much of these are using touchscreens. odds are that the transition to complex tools with direct manipulation are still a long time coming.

### Feedback

#### when there’s no cursor

Even If your convinced of the use of pointers or avatars, supposivly direct manipulation products (touch/AR) don’t need these kind of indication. But think about the way you use these technologies and you’ll find a familiar pattern.

When typing in mobile notice where your gaze is. I found myself typing and looking at the input field — rather the keyboard keys. The reason I’m used to looking at the text field for input feedback is cause I’m used to this from “real life”. Our brain develops eye–hand\_coordination at a very young age so we don’t really pause to think about it. Come to think about it, usually if a user pauses to look where he clicked its when your UI has a problem.

Feedback was used commonly with cursor it had to be replaced in touchscreens Hourglass turned to spinners and progress bars.

![material design interactions provide feedback after or during action.](https://cdn-images-1.medium.com/max/600/0*B-mqly8so87_9dM7.)
material design interactions provide feedback after or during action.

Another issue is the indication **After the interaction.** [Material](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction)’s radial reaction for example, uses pulse to answer what we know in reality as **Newton’s third law**

more examples [here](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc)

these examples are meant to convey the cursor’s role should be filled by other means in the future same in voice interaction for example.

### why are you telling me all this?

Because your using drag n drop with an arrow cursor.

stop it.

#### How to

Developers here’s an article:

[**Changing the Cursor with CSS for Better User Experience (or Fun) | CSS-Tricks**  
_CSS can control the appearance of a cursor. There are a ton of options available to us and we’ve covered them pretty…_css-tricks.com](https://css-tricks.com/using-css-cursors/ "https://css-tricks.com/using-css-cursors/")[](https://css-tricks.com/using-css-cursors/)

_Also published in hebrew at_ [_my blog_](http://www.aniboaz.co.il/Blog/blog/2017/06/27/pointer/)

![](https://cdn-images-1.medium.com/max/800/1*aNPBhln7iDMY8qRcmoyCfA.jpeg)