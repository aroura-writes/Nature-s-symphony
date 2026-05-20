// 1. Mock Content Data (Structure these as JSON for TinaCMS later)
const contentData = {
    gallery: [
        { title: "Neon Mycelium", loc: "Deep Amazon", desc: "Bioluminescent fungi captured at 3:00 AM.", img: "https://images.unsplash.com/photo-1500622358113-df81831c26b3?auto=format&fit=crop&q=80&w=800" },
        { title: "Quantum Ferns", loc: "Pacific Northwest", desc: "Fractal patterns found in ancient flora.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" }
    ],
    blogs: [
        { title: "The Silicon Leaf", date: "Oct 24, 2024", snippet: "How plants are teaching us about sustainable computing...", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800" }
    ],
    literacy: [
        { title: "Carbon Synthesis 101", tag: "Beginner", takeaway: "Plants convert 100bn tons of CO2 yearly.", img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" }
    ],
    others: [
        { headline: "Synthetic Soundscapes", body: "Recording the audio frequencies of growing moss.", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800" }
    ]
};

// 2. Component Renderer
const createCard = (item, type) => {
    let cardContent = '';

    // Unified Architecture with varying data points
    if (type === 'gallery') {
        cardContent = `
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 p-6 w-full backdrop-blur-md bg-white/5 border-t border-white/10">
                <p class="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">${item.loc}</p>
                <h3 class="text-xl font-semibold">${item.title}</h3>
                <p class="text-sm text-emerald-100/60 mt-2 line-clamp-2">${item.desc}</p>
            </div>`;
    } else if (type === 'blogs') {
        cardContent = `
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute bottom-0 p-6 w-full backdrop-blur-md bg-white/5 border-t border-white/10">
                <p class="text-xs text-emerald-400 mb-1">${item.date}</p>
                <h3 class="text-xl font-semibold">${item.title}</h3>
                <p class="text-sm text-emerald-100/60 mt-2">${item.snippet}</p>
            </div>`;
    } else if (type === 'literacy') {
        cardContent = `
            <div class="p-6 h-full flex flex-col">
                <span class="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-1 rounded-full w-fit mb-4 border border-emerald-500/30">${item.tag}</span>
                <h3 class="text-xl font-semibold mb-4">${item.title}</h3>
                <div class="mt-auto pt-4 border-t border-white/10 italic text-sm text-emerald-200/70">
                    " ${item.takeaway} "
                </div>
            </div>`;
    } else {
        cardContent = `
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${item.headline}</h3>
                <p class="text-sm text-emerald-100/60">${item.body}</p>
            </div>`;
    }

    return `
        <div class="glass-card relative overflow-hidden rounded-2xl h-[400px] group cursor-pointer">
            <img src="${item.img}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60">
            ${cardContent}
        </div>
    `;
};

// 3. Page Router Logic
const navigate = (pageId) => {
    const grid = document.getElementById('content-grid');
    const header = document.getElementById('page-header');
    
    // Clear and Update UI
    grid.innerHTML = '';
    
    // Update Header Text based on Page
    const titles = {
        home: "Welcome to the Eco-Digital Ark",
        gallery: "Visual Echoes",
        blogs: "The Logbook",
        literacy: "Seed of Knowledge",
        about: "The Origin",
        others: "Miscellaneous Fragments"
    };

    header.querySelector('h1').innerHTML = titles[pageId] || "Nature's Symphony";

    // Logic for rendering lists (Dynamic)
    if (contentData[pageId]) {
        contentData[pageId].forEach(item => {
            grid.innerHTML += createCard(item, pageId);
        });
    } else if (pageId === 'home') {
        // Render a bit of everything for Home
        contentData.gallery.forEach(item => grid.innerHTML += createCard(item, 'gallery'));
    } else {
        grid.innerHTML = `<p class="col-span-full text-center py-20 text-emerald-400/40 tracking-widest">CONTENT BEING SYNTHESIZED...</p>`;
    }
};

// 4. Initialize Listeners
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active', 'text-emerald-400'));
        link.classList.add('active');
        navigate(link.dataset.page);
    });
});

// Initial Load
navigate('home');