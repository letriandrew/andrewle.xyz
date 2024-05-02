const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The scroll effect for "Andrew Le" for regular size
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

// The scroll effect for "Andrew Le" for mobile
ScrollTrigger.create({
    animation: gsap.from(".logo2", {
        y: "50vh", 
        scale: 3,
        yPercent: -50
    }),
    scrub: true,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center"
});

// The rolling effect for "Andrew Le"
const h1Elements = document.querySelectorAll(".logo, .logo2");
let isRollingEnabled = true;

const rollOnce = () => {
    if (isRollingEnabled) {
        let iterations = 0;
        const interval = setInterval(() => {
            h1Elements.forEach((h1Element) => {
                h1Element.innerText = h1Element.innerText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return h1Element.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
            });

            if (iterations >= h1Elements[0].dataset.value.length) {
                clearInterval(interval);
                isRollingEnabled = false; // Disable rolling after one iteration
            }

            iterations += 1/5;
        }, 30);
    }
};

h1Elements.forEach((h1Element) => {
    h1Element.addEventListener("mouseover", rollOnce);
});
