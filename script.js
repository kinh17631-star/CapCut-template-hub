// 🧠 script.js (The Hacker Database & Engine)

// 1. 📁 तुम्हारा डेटाबेस (यहाँ तुम्हें बस सबसे नीचे नया लिंक जोड़ना है)
const templatesDatabase = [
    {
        title: "Healing Thailand Trend",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500", // यहाँ रील का फोटो लिंक
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY", // वीडियो का एम्बेड लिंक (Demo)
        capcutLink: "https://www.capcut.com/t/example1" // असली CapCut लिंक
    },
    {
        title: "Sigma Male Grindset",
        image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500", 
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        capcutLink: "https://www.capcut.com/t/example2"
    }
    // 👇 नया टेम्पलेट हमेशा यहाँ नीचे कॉपी-पेस्ट करना 👇
    
];

// 2. 🪄 रिवर्स मैजिक (नीचे डाला हुआ लिंक सबसे ऊपर दिखेगा)
const reversedTemplates = [...templatesDatabase].reverse();

// 3. ⚙️ ऑटोमैटिक ग्रिड और पॉप-अप जेनरेटर (इसे कभी नहीं छेड़ना है)
const gridContainer = document.getElementById('template-grid');
const modal = document.getElementById('video-modal');
const iframeContainer = document.getElementById('iframe-container');
const useTemplateBtn = document.getElementById('use-template-btn');
const closeBtn = document.querySelector('.close-btn');

// कार्ड्स बनाना
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

    // जब यूज़र फोटो (Play Button) पर क्लिक करेगा
    card.addEventListener('click', () => {
        // वीडियो प्लेयर में एम्बेड लिंक डालना
        iframeContainer.innerHTML = `<iframe src="${template.embedUrl}" allowfullscreen></iframe>`;
        // बटन में असली CapCut लिंक डालना
        useTemplateBtn.href = template.capcutLink;
        // पॉप-अप प्लेयर दिखाना
        modal.classList.add('active');
    });

    gridContainer.appendChild(card);
});

// ❌ पॉप-अप बंद करने का सिस्टम
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.remove('active');
    // वीडियो को बैकग्राउंड में बजने से रोकने के लिए iframe को खाली कर दो
    iframeContainer.innerHTML = ''; 
}
