# What GIFs

## Overview

Built with React Hooks, What GIFs is a multi-level memory game where you have to avoid picking the same GIF in a given level. Live demo : https://mihailthebuilder.github.io/what-gifs/

## How it works

The game starts with a full-screen pop-up modal that shows the instructions of the game. These instructions can be accessed even after you start by clicking the "How it works" button on the top right corner of the screen.

The game has 5 levels. In each level, you are given a list of GIFs and you have to avoid picking the same GIF in that level.

When you pick correctly, your score increments by 1 and a funny sound is played. The GIFs are then temporarily hidden and their order reshuffled to make it harder to remember which ones you already selected. Once you get all the cards right, a loading screen gets shown for a few seconds and you advance to the next level.

If you pick the same card twice in a single level, another funny sound is played and a pop-up appears saying that you lost the game and showing the score you managed to achieve. If this score is better than your best score, the latter will take the value of the former at the start of the next game.

There is a maximum score threshold which, once reached, triggers a pop-up stating that you've won the game together with a 3rd funny sound. You can then choose to re-start the game, with your best score becoming that maximum score.

## Technical details

The game is built using React Hooks, with all states being managed in `App.js`. I avoided `useEffect` because none of the state changes trigger a standard response. For example, a change in the `currentScore` state triggers a simple reload of the GIF cards when the user doesn't reach the next level. When the user reaches a new level, however, a loading screen needs to first be played shortly.

The web app features 4 components:

1. PopUp - a pop-up modal that is rendered...

   1. At the start of the game.
   2. When an incorrect answer is picked.
   3. At the end of the game.
   4. When the user clicks the "How it works" button on the top right side of the screen.

2. NavBar - a nav bar that contains the "How it works" button
3. GifContainer - the wrapper for an individual GIF together with its title
4. GameData - a section that renders the current & best score, and the level

The GIF images have been placed in the `public` folder as they are dynamically rendered one by one, not all at once. There are 2 sub-folders in there:

1. `original` has the actual GIF files.
2. `images` has an image representing the first scene of each GIF. These images are first rendered on desktop screens; it is only when you hover on the image that the GIF is actually played by switching the `src` of the `img` element to the corresponding file in the `original` folder.

The `CARD_DECK` constant holds all the 2 data items required to render the GIF:

1. A key that indicates the filename; e.g. a key of `"awkward"` corresponds to the `/public/gifs/original/awkward.gif` and `/public/gifs/original/awkward.img` files.
2. The title of the GIF.

The number of rounds/levels can be easily modified by changing the `levelToCardNum` function in `src/common/index.js`. The app has been built in a way that avoids it being broken by this particular change. You can also add more GIFs and expand the `CARD_DECK` constant to allow for more rounds and levels.
