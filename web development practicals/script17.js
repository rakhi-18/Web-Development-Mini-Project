const box = document.getElementById("box");

   
    function mouseOverHandler() {
      box.style.backgroundColor = "orange";
      box.textContent = "Mouse Over!";
    }

    function mouseOutHandler() {
      box.style.backgroundColor = "lightblue";
      box.textContent = "Hover / Press Keys";
    }

   
    function keyPressHandler(event) {
      if (event.key === "ArrowUp") {
        box.style.transform = "translateY(-20px)";
        box.textContent = "⬆️ Up!";
      } else if (event.key === "ArrowDown") {
        box.style.transform = "translateY(20px)";
        box.textContent = "⬇️ Down!";
      } else if (event.key === "ArrowLeft") {
        box.style.transform = "translateX(-20px)";
        box.textContent = "⬅️ Left!";
      } else if (event.key === "ArrowRight") {
        box.style.transform = "translateX(20px)";
        box.textContent = "➡️ Right!";
      }
    }

    
    function keyUpHandler() {
      box.style.transform = "translate(0,0)";
      box.textContent = "Hover / Press Keys";
    }

 
    document.getElementById("addMouse").addEventListener("click", () => {
      box.addEventListener("mouseover", mouseOverHandler);
      box.addEventListener("mouseout", mouseOutHandler);
      alert("Mouse events added!");
    });

    document.getElementById("removeMouse").addEventListener("click", () => {
      box.removeEventListener("mouseover", mouseOverHandler);
      box.removeEventListener("mouseout", mouseOutHandler);
      alert("Mouse events removed!");
    });

    document.getElementById("addKeyboard").addEventListener("click", () => {
      document.addEventListener("keydown", keyPressHandler);
      document.addEventListener("keyup", keyUpHandler);
      alert("Keyboard events added!");
    });

    document.getElementById("removeKeyboard").addEventListener("click", () => {
      document.removeEventListener("keydown", keyPressHandler);
      document.removeEventListener("keyup", keyUpHandler);
      alert("Keyboard events removed!");
    });v