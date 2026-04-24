function goNext() {
    window.location.href = "page2.html";
}

const textElement = document.getElementById("typing-text");

if (textElement) {
    const message = `🌸 Dear AMATULLAH 🌸

I don't know how to explain this perfectly… but I'll try honestly, 💖

I feel something special for you, something I can't ignore, ✨

It's not about expecting anything…,
it's just the way you exist makes my heart feel different, 😊

Your smile, your presence, your vibe… everything feels special, 🌙

Sometimes I find peace just thinking about you, 💭💖

I just wanted you to know this feeling… nothing else, 🌸

I don't know if I ever matter to you or not…,
but you became special to me in a silent way ✨

Even if I am not in your life,
you are always in my thoughts, 🌙💖

💖 And I just wish one thing for you…, 💖

May you always stay happy, peaceful, and smiling, 😊✨

💖 WARAS MUBARAK. 💖`

    let i = 0;

    function typeEffect() {
        if (i < message.length) {
            textElement.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
}