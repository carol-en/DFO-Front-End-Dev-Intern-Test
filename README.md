# **DFO Global Front End Developer InternShip Challenge**

Challenged completed by [_Caroline Nolasco_](https://www.carolinenolasco.com).

## [Clone Site - Beauty Stat](https://lightning-gadget.herokuapp.com/)

**1.a) Explain your method?**

The first thing I did was research applications that can clone web sites using a mac OS. After some search I settled on using Httrack to clone the web site. I accomplished this by running Httrack via the command line terminal.

Once done I hope it in visual stupid code and launch the site using a simple python server command _python –m http.server 8000,_ then I would open it up on _localhost:8000_ and view the site offline.

**2.b) How you would minimize the errors?**

Make sure to read the documentation for Httrack, inevitably, some errors may occur and the best thing to do is search only for solutions if re-checking the documentation fails. If that fails and research fails, ask a senior developer for assistance.

**3.c) If you would need to eliminate a scripts explain
why**

I think this would really depend on just what the cloned site is being used for. If all that's needed are images or styling, then the Javascript files could be removed.

**4.D) If you would replace scripts explain how & why**

I think the only thing off the top of my head would be whatever is adding _?language_id=1_ to some of the .PNG files on their web site as for whatever reason that additional piece of data gave me a bit of trouble when it came to clone the site without errors.

**5.e) Clone the the page**

[Page has been successfully cloned.](https://beauty-stat.herokuapp.com/www.beautystatcosmetics.com/en/pre-6.html)

[Clone Site - Beauty Stat GitHub](https://github.com/carol-en/DFO-Front-End-Dev-Intern-Test/tree/master/Cloned_Beauty_Stat)


## [Lightning Gadget Static Site](https://lightning-gadget.herokuapp.com/)


The tools I used to build the site up from the ground up was vanilla HTML, **SASS**, and **Bootstrap**. My reasonings for that is because I already knew going in to the music app that I was use ReactJS for it. So for this challenge I chose not to use a library for it. For the styling I chose Bootstrap mostly for practice using it again as I had not for a long while. My personal preference is not using frameworks like Bootstrap or Bulma but I do practice with them because businesses do like using them. I used SASS as well to help make the styling management a bit easier and faster due to limited time.

I also used icons from **Font Awesome** for custom shapes like triangles and check marks. I also used **Google Fonts** for custom fonts to help match the images better.

[Lightning Gadget Static Site](https://lightning-gadget.herokuapp.com/)

[Lightning Gadget GitHub](https://github.com/carol-en/DFO-Front-End-Dev-Intern-Test/tree/master/lighting_gadget)

## Music API

I did not find much challenge in creating the website besides when implementing Bootstrap. It was more of a rusty sort of thing but after a while I recalled how it works so this is no issue to me. 

### [Musi - Call](https://musi-call.herokuapp.com/)

Simple app to search up musicians and get information about them. It was created using ReactJS, Bulma, and Axios with some Google Fonts for extra customization. I also have used Heroku for deployment & GIT  for version control.

- **ReactJS** - I went for React over writing vanilla HTML & Javascript due to limited time, set up and component creation was quick and easy.
- **Bulma & Axios** - For the same reasons as above, they helped speed up the coding process.

### Challenges
As of recent a good amount of projects I had taken up moved me away from using APIs so picking it back up took longer than I would have liked but was also expected. Remembering what was needed to update forms in React, to correctly access the AudioDB API and make a search for both artist information and album list took me a while to get correctly to work. In the end I got it and the use of Axios helped in that regard with how simple and streamlined it is to use it.

### Improvements
If I were to have more time I would have re-factor several things:

- **Search Logic**: At the moment the search system is very simple, I would re-factor it to, if there are no search result: return a card saying as much rather than the search function not going through at all. I would also  make an advanced system of as you type in words a list of artists appear and vanish the more specific you type.

- **Information**: I would add more information like genre, full name, band member names, year of formation. Albums would be links that would expand to list songs. Biography would be properly broken up into paragraphs and be a bit easier to read. Add links to social medias too.

- **Styling**:  I would clean up the style, make things look a bit nicer than they currently look. Perhaps add some CSS animation to smooth actions out to look & feel more sleek.

[Musi - Call App](https://musi-call.herokuapp.com/)

[Musi - Call GitHub](https://github.com/carol-en/DFO-Front-End-Dev-Intern-Test/tree/master/music-app)


[Caroline Nolasco](https://www.carolinenolasco.com/)

**carolinenolasco.code@gmail.com**
