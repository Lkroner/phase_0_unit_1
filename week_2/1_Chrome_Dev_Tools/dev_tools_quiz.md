#### Include an inline screenshot of your codeschool's points from the profile page:

<img src="http://i.imgur.com/xMDhTYJ.png" alt="Dev Tools Screenshot">

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS: Elements
  * Javascript Debugging: Console
  * Performance Optimization: Network

* What's the quick key for your OS to spawn the Dev Tools inspector? Option + Command + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.) http://minus.com/i/vYsqkBwQKRTM

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

You can't change the words shown because it's actually an image. You can change the words BEHIND the image, which I found by unclicking the "text-indent" css style which apparently moved the original p tag words behind the image. I'm guessing they left the words there to help them remember what the p tag was for.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 

  I think it's the Featured Events image.

  * Explain how you would find out this information, and list the URL of offending image here and how big it is. 

  I used the inspector button, that looks like a magnifying glass at the left, to look at all the images and see which was the biggest.

  /Images/Catalog/ad724279-bc48-4560-8b68-af9e87202afa_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

Lowest lying fruit for optimizing the webpage would be to minify the HTML/CSS/JS and optimize images. YOu could save a couple hundred kilobytes alone just by minifying your languages.

