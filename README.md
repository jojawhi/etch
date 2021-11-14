# Jojawhi's "Etch-a-Sketch" assignment for The Odin Project

This was a fun project to tackle, and it was my first foray into touch-screen functionality. I had a little help from a generous mentor who pointed me in the right direction for that aspect.

## Learning Focus

The main focus for this project was to practice CSS Grid and get a solid introduction to event handlers.

## Takeaway

In addition to practicing with event handlers, a big takeaway from this project was some feedback I received on my code. Essentially, it was this:

  Use HTML to structure your page, CSS to style it, and JS to make it interactive, and keep them out of each other's wheelhouses as much as possible.

This advice is simple and should be obvious, but after creating the basic structure and layout in HTML/CSS, in order to practice more JS, I had been using JS for almost everything else. I was creating and deleting DOM elements and changing styles all over the place with JS, and it got messy.

I should have built most or all of what I needed structurally in HTML and created all the style elements I needed with CSS. Then I should have simply used JS to switch between them as needed by the user.

I got lost in the practice and forgot my best practices. This was a great reminder to practice best practices.

## Future Additions

I want to maintain this project and turn it into something more useful. These are some ideas I have:

  - A random phrase generator so it can be used as a mini Pictionary or drawing game.
  - An export to JPG/PNG/PDF feature so people can save and share their creations.
  - A UI redesign.

## Known Bugs

  - There is an issue with the grid lines button when it is pressed multiple times and when switching between light and dark mode. This has to do with inefficiencies in how the CSS class changes are done in JS. The code will need to be refactored to address this.
