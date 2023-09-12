const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));


{/* <label for="radioA">Option A</label>
<input type="radio" id="radioA" name="options" onclick="toggleRadios()" checked>

<label for="radioB">Option B</label>
<input type="radio" id="radioB" name="options" onclick="toggleRadios()"> */}




