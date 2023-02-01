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
function callThisFunction() {
    alert("This is a test function!")
}
function treeSlide(treeObj) {

    console.dir(treeObj)

    if (treeObj["prompt"]) {

        if (treeObj["exec"]) {
            window[treeObj["exec"]]();
        }
        let treeStumpLoad = treeObj["prompt"]
        treeStumpChoices.innerHTML=""
        
        if (treeObj["choices"]) {
            /*** There are choices ***/
            
            for (let slide in treeObj["choices"]) {
                console.log(slide)
                submitBtn = document.createElement("input");
                submitBtn.type = "button";
                submitBtn.value = slide;
                submitBtn.classList.add('treeChoice');
                treeStumpChoices.appendChild(submitBtn);
                submitBtn.addEventListener('click', function()
                {
                    treeSlide(treeObj["choices"][slide]);
                });
            }
        }

        treeStump.innerHTML = treeStumpLoad
    }


}

function treeEngineInit() {

    const treeStump = document.getElementById("treeStump")
    const treeStumpChoices = document.getElementById("treeStumpChoices")

    treeSlide(treeSlides);
    
    
}

         
         
         
         
         
