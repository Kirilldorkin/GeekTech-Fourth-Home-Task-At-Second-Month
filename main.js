const buttons = document.querySelectorAll("a");

buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    })
})

const counters = document.querySelectorAll("[data-counter]");

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener("click", e => {
            const target = e.target;

            if (target.closest("a")) {
                let value = parseInt(target.closest(".counter").querySelector("input").value);

                if (target.classList.contains("plus")) {
                    value++;
                }

                else {
                    --value;
                }

                if (value < 0) {
                    value = 0;
                }

                target.closest(".counter").querySelector("input").value = value;
            }
        });
    })
}