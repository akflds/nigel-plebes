# Nigel Plebes

A word guessing game, inspired by the [New York Times' Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee), but without a paywall!

The aim is to find as many 4-9 letter words as you can using the 9 letters shown on screen. If you find the 9 letter word, you win the round. If you get stuck, you can end the round early from within the Settings. You can also toggle "Easy Mode" which will display the number of remaining words. You can also toggle light/dark mode.

The game is built using React and keeps track of your current guesses, and settings, using localStorage. 

You can play it here: [https://nigel-plebes.netlify.app/](https://nigel-plebes.netlify.app/). 

Note: Nigel has fairly strong opinions on what makes a valid word. Please don't take it personally if it doesn't recognise one of your guesses! I'm working on replacing the hardcoded word list with a more eloquent API.

## Installation

To run Nigel locally, first clone the respository.

```
git clone https://github.com/akflds/nigel-plebes.git
cd nigel-plebes
```

Then install the necessary dependencies.

```
npm install
```

## Usage

To launch a development build, run:

```
npm start
```

If all goes well, the game should be available at http://localhost:3000.

## Who is Nigel Plebes?

You'll figure it out... ;)
