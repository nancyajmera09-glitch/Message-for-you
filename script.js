let currentPage = 1;

function nextPage() {

    const current = document.getElementById(
        "page" + currentPage
    );

    current.classList.remove("active");

    currentPage++;

    const next = document.getElementById(
        "page" + currentPage
    );

    if (next) {
        next.classList.add("active");
    }
}


/* ============================= */
/* FLOATING HEARTS */
/* ============================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document
        .querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);


/* ============================= */
/* SPARKLES */
/* ============================= */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML = "✨";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";

    sparkle.style.fontSize =
        (10 + Math.random() * 15) + "px";

    document
        .querySelector(".sparkles")
        .appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 500);
/* ================================= */
/* ENVELOPE */
/* ================================= */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope-container");

    envelope.classList.toggle("open");

}