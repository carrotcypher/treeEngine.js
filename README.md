# treeEngine.js

Easy to design decision tree / flow chart prompts for your website.

See [the demo here via GitHub Pages](https://carrotcypher.github.io/treeEngine.js/).

Ideal for:

* Quizzes
* Yes/No questionnaires
* Implementing any flow chart into clickable button prompts

## How to use it

The object `treeSlides` contains the entire structure of the decision tree.

```js
const treeSlides = {
    prompt:"Here is a sample first question",
    choices:{
        "Yes":{
            prompt:"You answered yes to the first question. Here's another one!",
            choices:{
                "Yes":{
                    prompt:"You answered yes to the second question. Here's yet another one!",
                    choices:{
                        "Yes":{
                            prompt:"You answered yes to the last question. That's it!",
                            exec:"callThisFunction"
                        },
                        "Maybe":{
                            prompt:"You answered maybe to the last question. That's it!",
                            exec:"callThisFunction"
                        },
                        "No":{
                            prompt:"You answered no to the last question. That's it!",
                            exec:"callThisFunction"
                        }
                    }
                },
                "No":{
                    prompt:"You answered no to the second question. That's it!"
                }
            }
        },
        "No":{
            prompt:"You answered no to the first question. That's it!"
        }
    }
    
};
```

There is no limit to how many questions or responses you can insert.

`prompt` contains the question text

`choices` contains the nested object of all available choices for that prompt

`exec` is an optional attribute that executes the named JS function if chosen (in case your script needs to perform an action depending on the answer)

# How to style it

```css
  .treeRoot {
      /*** Stylize the area containing the prompt and choices ***/

      text-align: center;
      border:1px solid #000;
      width:25%
  }
  .treePrompt {
      /*** Stylize the question prompt ***/

      display: inline-block;
      padding: .75rem 1.25rem;
      margin:.75rem;
      color: #000000;
      font-size: 1rem;
      position: relative;
      overflow: hidden;
      z-index: 1;

  }
  .treeChoice {
      /*** Stylize the answer / selection buttons for the prompts ***/

      display: inline-block;
      padding: .75rem 1.25rem;
      margin:.75rem;
      color: #000000;
      font-size: 1rem;
      position: relative;
      overflow: hidden;
      z-index: 1;
  }
```

`treeRoot` is the style for the container (e.g. lined box with the prompt and responses inside)

`treePrompt` is the style for the question part only

`treeChoice` is the style for all of the choices available to the user


## Backstory

This project is dog food. After scouring the web for an open source "decision tree" or "flow chart" prompt website generator, I found others were begging for the same thing.

The closest things I could find were closed source, convoluted, over-engineered, or not designed for creating public websites.

## License

![Creative Commons Zero v1.0 Universal](https://i.creativecommons.org/p/zero/1.0/88x31.png)

Creative Commons Zero v1.0 Universal

"No rights reserved"

