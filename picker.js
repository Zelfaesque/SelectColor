        const colorPicker = document.getElementById("colorPicker");
        const selectedColor = document.getElementById("selectedColor");

        colorPicker.addEventListener("input", function() {
            selectedColor.textContent = " " + colorPicker.value.toUpperCase();
        });
