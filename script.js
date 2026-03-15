// 1. 📁 तुम्हारा डेटाबेस 
const templatesDatabase = [
    {
        title: "Healing Thailand Trend",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example1"
    },
    {
        title: "Sigma Male Grindset (Phonk)",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example2"
    },
    {
        title: "Aesthetic Mirror Selfie",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example3"
    },
    {
        title: "Velocity Smooth Edit",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example4"
    },
    {
        title: "Cinematic Mini Vlog",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example5"
    },
    {
        title: "Anime Flash Warning",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example6"
    },
    {
        title: "Attitude Status Edit",
        image: "https://images.unsplash.com/photo-1617398869096-7bbde10af552?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example7"
    },
    {
        title: "Couple Romantic Beat Sync",
        image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example8"
    },
    {
        title: "Neon Glow Effect",
        image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example9"
    },
    {
        title: "Slow-Mo Drip Drop",
        image: "https://images.unsplash.com/photo-1520004434532-668416a08753?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example10"
    }
];

// 2. 🪄 रिवर्स मैजिक (नीचे डाला हुआ लिंक सबसे ऊपर दिखेगा)
const reversedTemplates = [...templatesDatabase].reverse();

// 3. ⚙️ ऑटोमैटिक ग्रिड और पॉप-अप जेनरेटर (यह वाला हिस्सा शायद डिलीट हो गया था)
const gridContainer = document.getElementById('template-grid');
const modal = document.getElementById('video-modal');
const iframeContainer = document.getElementById('iframe-container');
const useTemplateBtn = document.getElementById('use-template-btn');
const closeBtn = document.querySelector('.close-btn');

reversedTemplates.forEach((template) => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <div class="thumbnail-box">
            <span class="trending-badge">🔥 Trending</span>
            <img src="${template.image}" alt="${template.title}">
            <div class="play-icon"><i class="fas fa-play"></i></div>
        </div>
        <h3 class="title">${template.title}</h3>
    `;

    card.addEventListener('click', () => {
        iframeContainer.innerHTML = `<iframe src="${template.embedUrl}" allowfullscreen></iframe>`;
        useTemplateBtn.href = template.capcutLink;
        modal.classList.add('active');
    });

    gridContainer.appendChild(card);
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.remove('active');
    iframeContainer.innerHTML = ''; 
}
