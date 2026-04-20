const veggies = [
    {id: "onion", name: "Onion", icon: "🧅"}, {id: "tomato", name: "Tomatoes", icon: "🍅"},
    {id: "potato", name: "Potatoes", icon: "🥔"}, {id: "brinjal", name: "Brinjal", icon: "🍆"},
    {id: "drumstick", name: "Drumstick", icon: "🥒"}, {id: "bitter", name: "Bitter Gourd", icon: "🥒"},
    {id: "carrot", name: "Carrot", icon: "🥕"}, {id: "cauliflower", name: "Cauliflower", icon: "🥦"},
    {id: "ladyfinger", name: "Ladyfingers", icon: "🥒"}, {id: "pumpkin", name: "Pumpkin", icon: "🎃"}
];

const cookbook = {
    "drumstick": [
        {
            name: "Royal Drumstick Puli Kuzhambu",
            secret: "Use sesame oil and a pinch of jaggery to balance the acidity of tamarind.",
            ingredients: "3 Drumsticks, 15 Small Onions, 10 Garlic Cloves, 1 Big Lemon-sized Tamarind, 2 tbsp Sambar Powder.",
            steps: [
                "Wash and cut the drumsticks into 3-inch long pieces. Steam or boil them with a pinch of salt and turmeric for 5 minutes until 70% cooked. Set aside.",
                "Soak the tamarind in 2 cups of warm water for 15 minutes, extract the juice, and discard the pulp.",
                "Heat 3 tablespoons of sesame oil in a heavy-bottomed clay pot or pan. Add 1 tsp mustard seeds, 1/2 tsp fenugreek seeds, and a handful of curry leaves.",
                "Add the whole small onions and garlic cloves. Sauté until the onions turn translucent and slightly golden.",
                "Pour in the tamarind extract and add sambar powder and salt. Let it boil vigorously for 10 minutes until the raw smell of the powder disappears.",
                "Add the par-boiled drumsticks. Lower the flame and simmer for another 8-10 minutes until the oil starts separating and floating on top (the 'Thokku' consistency).",
                "Garnish with fresh coriander and serve hot with steamed rice and a dollop of ghee."
            ]
        }
    ],
    "bitter": [
        {
            name: "Crispy Fried Bitter Gourd Chips",
            secret: "Soaking the slices in buttermilk or salt water for 20 minutes removes 80% of the bitterness.",
            ingredients: "2 Large Bitter Gourds, 3 tbsp Besan (Gram flour), 2 tbsp Rice flour, 1 tsp Chili powder, 1/2 tsp Chat Masala.",
            steps: [
                "Thinly slice the bitter gourd into round discs. Discard any large, hard seeds. Toss them with 1 tsp salt and let them rest for 20 minutes to release water.",
                "Squeeze the slices firmly to remove the bitter juice. Pat them dry with a kitchen towel.",
                "In a large bowl, mix gram flour, rice flour, turmeric, red chili powder, and a pinch of hing (asafoetida).",
                "Toss the slices in the dry flour mix until every piece is coated. Do not add water unless absolutely necessary for the flour to stick.",
                "Heat oil in a deep fryer or pan. When the oil is smoking hot, carefully drop the slices one by one.",
                "Fry on medium heat for 4-6 minutes until they turn dark golden brown and become brittle-crisp. Drain on paper towels and sprinkle with Chat Masala immediately."
            ]
        }
    ],
    "cauliflower": [
        {
            name: "Golden Cauliflower Gobi 65",
            secret: "Double-fry the cauliflower for that signature restaurant-style crunch that lasts longer.",
            ingredients: "1 Medium Cauliflower, 1 cup Corn flour, 1/2 cup Maida, 1 tbsp Ginger-Garlic paste, Kashmiri Chili powder.",
            steps: [
                "Break the cauliflower into bite-sized florets. Blanch them in boiling water with salt and turmeric for exactly 3 minutes to remove impurities and partially cook them.",
                "Prepare the batter by whisking corn flour, maida, ginger-garlic paste, red chili powder, garam masala, and 2 tbsp of thick curd. The consistency should be like thick cream.",
                "Dip the blanched florets into the batter, ensuring even coating on all sides. Marinate for at least 15-20 minutes.",
                "Heat oil for deep frying. Carefully drop the florets into the oil without overcrowding the pan.",
                "Fry until the coating turns vibrant red and crispy. Remove from oil and let them rest for 20 minutes.",
                "For the 'Wow' effect: Re-fry them in very hot oil for 30 seconds just before serving to achieve maximum crunch. Toss with fried curry leaves and green chilies."
            ]
        }
    ],
    "pumpkin": [
        {
            name: "Sweet & Spicy Pumpkin Erissery",
            secret: "The soul of this dish is the 'Varutharacha' topping—grated coconut toasted until it reaches a chocolate-brown color.",
            ingredients: "500g Yellow Pumpkin, 1/2 cup Toor Dal or Cowpeas, 1 cup Fresh Grated Coconut, 1 tsp Cumin, 1 tsp Pepper.",
            steps: [
                "Peel and cube the yellow pumpkin. Pressure cook the dal or cowpeas separately until soft but not mashed.",
                "Cook the pumpkin cubes with salt, turmeric, and black pepper powder in a little water until they are soft enough to be mashed with a spoon.",
                "Grind half of the coconut with cumin seeds and a little water into a smooth, thick paste. Add this paste to the cooked pumpkin-dal mixture.",
                "Mix well and simmer for 5 minutes on low heat. The consistency should be thick and creamy.",
                "In a small tempering pan, heat 2 tbsp of coconut oil. Add mustard seeds and dry red chilies. Once they pop, add the remaining half of the grated coconut.",
                "Sauté the coconut continuously on low-medium heat until it turns a deep, aromatic golden brown. Immediately pour this over the pumpkin gravy. Do not mix it completely; let the toasted coconut sit on top for the best flavor profile."
            ]
        }
    ],
    "ladyfinger": [
        {
            name: "Andhra Style Bhindi Fry",
            secret: "Avoid covering the pan with a lid while cooking ladyfingers; this prevents them from becoming slimy (sticky).",
            ingredients: "250g Ladyfingers, 1 Large Onion, 1 tsp Mustard seeds, 1 tbsp Peanuts, 1 tsp Amchur (Dry Mango) powder.",
            steps: [
                "Wash the ladyfingers and dry them completely using a cloth before cutting. Cut them into 1/2-inch round pieces.",
                "Heat 2 tbsp oil in a wide pan. Add mustard seeds, urad dal, and peanuts. Sauté until the peanuts are crunchy.",
                "Add sliced onions and green chilies. Fry until the onions are golden.",
                "Add the cut ladyfingers. Cook on medium flame without a lid. Stir occasionally but gently to avoid breaking the pieces.",
                "Once the ladyfingers lose their stickiness and turn slightly brown, add turmeric, red chili powder, and salt.",
                "Finally, sprinkle amchur powder and toss well. This provides a tangy kick that perfectly balances the earthiness of the vegetable."
            ]
        }
    ],
    "carrot": [
        {
            name: "Rich Carrot Halwa (Gajrela)",
            secret: "Slow-cooking the carrots in full-fat milk rather than just adding condensed milk creates a much deeper, authentic flavor.",
            ingredients: "500g Grated Carrots, 1 Liter Full-cream Milk, 1 cup Sugar, 4 tbsp Ghee, 10 Cashews, 1/2 tsp Cardamom powder.",
            steps: [
                "Wash, peel, and finely grate the carrots. Heat 1 tbsp ghee in a heavy-bottomed kadai and sauté the grated carrots for 5 minutes until the raw smell disappears.",
                "Pour in the milk and bring to a boil. Lower the flame and let the carrots cook in the milk. Stir every few minutes to prevent the milk from burning at the bottom.",
                "Continue cooking until the milk has reduced completely and the carrots have absorbed all the richness. This may take 30-40 minutes.",
                "Add sugar and the remaining ghee. The halwa will loosen up again as the sugar melts. Continue stirring until it thickens again and starts leaving the sides of the pan.",
                "Add cardamom powder and garnish with cashews fried in ghee. Serve warm for the best experience."
            ]
        }
    ]
};

// Initialize Selection Grid
const grid = document.getElementById('vegGrid');
veggies.forEach(v => {
    grid.innerHTML += `
        <div class="relative">
            <input type="checkbox" id="${v.id}" value="${v.id}" class="veg-check hidden">
            <label for="${v.id}" class="flex flex-col items-center justify-center p-8 rounded-[2rem] glass-panel cursor-pointer transition-all duration-500 hover:border-yellow-500/50">
                <span class="text-5xl mb-4 group-hover:scale-110 transition-transform">${v.icon}</span>
                <span class="text-sm font-bold tracking-widest text-slate-400 uppercase">${v.name}</span>
            </label>
        </div>
    `;
});

function revealGourmetRecipes() {
    const selected = Array.from(document.querySelectorAll('.veg-check:checked')).map(cb => cb.value);
    const core = document.getElementById('recipeCore');
    core.innerHTML = "";

    if (selected.length === 0) {
        alert("Please select at least one ingredient to initialize the engine.");
        return;
    }

    selected.forEach(vId => {
        const vegInfo = veggies.find(v => v.id === vId);
        const recipes = cookbook[vId] || [{
            name: `${vegInfo.name} Classic Sauté`,
            secret: "Always use fresh curry leaves for the most authentic aroma.",
            ingredients: `Fresh ${vegInfo.name}, Cold-pressed Oil, Mustard seeds, Spices.`,
            steps: ["Thoroughly clean and dice the vegetable into uniform pieces.", "Heat oil in a pan and temper with mustard seeds and urad dal.", "Add the vegetable and sauté on a medium flame with salt and spices.", "Cook until the texture is tender yet firm to the bite."]
        }];

        const section = document.createElement('div');
        section.className = "animate-fade-in-up";
        
        let cards = "";
        recipes.forEach(r => {
            cards += `
                <div class="glass-panel p-10 md:p-16 rounded-[4rem] relative overflow-hidden group">
                    <div class="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
                    
                    <div class="relative z-10">
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                            <div>
                                <h3 class="text-4xl md:text-5xl font-black text-white italic leading-tight">${r.name}</h3>
                                <p class="text-yellow-500 font-bold text-xs uppercase tracking-[0.3em] mt-2">Executive Recipe Card</p>
                            </div>
                            <div class="px-6 py-3 border border-yellow-500/20 rounded-2xl bg-yellow-500/5">
                                <span class="text-yellow-500 text-[10px] font-black uppercase tracking-widest block mb-1">Chef's Secret</span>
                                <p class="text-slate-300 text-xs italic">${r.secret}</p>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-3 gap-16">
                            <div class="space-y-8">
                                <div>
                                    <h5 class="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase mb-4">Required Ingredients</h5>
                                    <p class="text-slate-400 text-sm leading-relaxed">${r.ingredients}</p>
                                </div>
                            </div>
                            <div class="md:col-span-2">
                                <h5 class="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase mb-6">Preparation Protocol</h5>
                                <div class="space-y-6">
                                    ${r.steps.map((s, i) => `
                                        <div class="flex gap-6 group/step">
                                            <span class="step-pill w-8 h-8 rounded-full flex items-center justify-center text-black font-black text-[10px] shrink-0 mt-1">${i+1}</span>
                                            <p class="text-slate-300 leading-relaxed text-sm group-hover/step:text-white transition-colors">${s}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        section.innerHTML = `
            <div class="flex items-center gap-6 mb-12">
                <span class="text-6xl">${vegInfo.icon}</span>
                <h2 class="text-5xl font-black text-white tracking-tighter uppercase">${vegInfo.name} <span class="text-yellow-400">Series</span></h2>
                <div class="h-px flex-grow bg-white/5"></div>
            </div>
            <div class="space-y-12">${cards}</div>
        `;
        core.appendChild(section);
    });

    window.scrollTo({ top: core.offsetTop - 100, behavior: 'smooth' });
}