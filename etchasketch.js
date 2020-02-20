    let boxContainer = document.querySelector(".box-container");

    //creating new divs and appending to the parent .box-container div depending on userInput
    function appendBoxes(userInput =  16) {
           for(let i = 1; i <= userInput*userInput; i++) {
                let div = document.createElement("div");
                div.className = "box";
                let box = boxContainer.appendChild(div);
           }
    }

    appendBoxes();
    let boxes = document.querySelectorAll(".box");

    //styling to create grid.
    function createGrid(userInput = 16) {
        boxContainer.style.display = "grid";
        boxContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        boxContainer.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
    }

    createGrid();

    function selectColor() {
        let colorPickerValue = document.querySelector("#favcolor").value;
        return colorPickerValue.toString();
    }

    //sets background color depending on the color selected from color picker when hovered.
    function colorPickerEffect() {
        boxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = selectColor();
            });
        });
    }

    colorPickerEffect();

    //sets different colors for different squares when hovered.
    function rgbColorEffect() {
        let rgbButton = document.querySelector(".rgb");
        rgbButton.addEventListener("click", () => {
            boxes.forEach((box) => {
                box.addEventListener("mouseover", () => {
                    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                });
            });
        });  
    }

    rgbColorEffect();


    function userPrompt() {
        let userInput = prompt("Desired number of square boxes? Not more than 64");
        return userInput
    }


    //clears the grid and inserts the grid based on the input from the user given in the prompt.
    function clearGridAndInsert() {
        let clear = document.querySelector(".clear");
        clear.addEventListener('click', () => {
            boxes.forEach((box) => {
                    box.style.backgroundColor = "#fff";
            });

            setTimeout(() => {
                userData = userPrompt();
                if(userData == null) {
                    boxes.forEach(box => box.remove());
                    appendBoxes();
                    createGrid();
                }
                else if(userData > 64) {
                        boxes.forEach(box => box.remove());
                        boxContainer.innerHTML = "NOT MORE THAN 64!";
                        boxContainer.style.display = "flex";
                        boxContainer.style.justifyContent = "center";
                        boxContainer.style.alignItems = "center";
                        boxContainer.style.fontSize = "2em";
                        boxContainer.style.color = "red";
                }
                else {  
                        boxes.forEach(box => box.remove());
                        boxContainer.innerHTML = "";
                        boxContainer.removeAttribute("style");               
                        appendBoxes(parseInt(userData));
                        createGrid(parseInt(userData));
                }
                boxes = document.querySelectorAll(".box");
                colorPickerEffect();
                rgbColorEffect(); 
            }, 500);           
        });
    }

    clearGridAndInsert();
