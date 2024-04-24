const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The scroll effect for "Andrew Le"
ScrollTrigger.create({
    animation: gsap.from(".logo", {
        y: "50vh", 
        scale: 6,
        yPercent: -50
    }),
    scrub: true,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center"
});

// The rolling effect for "Andrew Le"
const h1Element = document.querySelector("h1");
let isRollingEnabled = true;

const rollOnce = () => {
    if (isRollingEnabled) {
        let iterations = 0;
        const interval = setInterval(() => {
            h1Element.innerText = h1Element.innerText.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return h1Element.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iterations >= h1Element.dataset.value.length) {
                clearInterval(interval);
                isRollingEnabled = false; // Disable rolling after one iteration
            }

            iterations += 1/10;
        }, 30);
    }
};

h1Element.addEventListener("mouseover", rollOnce);