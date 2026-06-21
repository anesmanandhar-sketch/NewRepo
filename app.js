// Mock Databases
const SUGGESTION_MAP = {
  "j": ["javascript tutorial", "javascript array methods", "javascript vs python", "jobs in software engineering"],
  "java": ["javascript", "javascript framework", "java compiler", "javatpoint"],
  "s": ["space exploration news", "space telescope images", "spotify web player", "speed test internet"],
  "sp": ["space x launch schedule", "space and time relativity", "spotify login", "spanish translation"],
  "g": ["google translate", "google drive login", "google maps directions", "google finance stocks"],
  "go": ["google", "google pixel 9 reviews", "golang documentation", "good morning quotes"],
  "a": ["artificial intelligence courses", "ai logo generator", "amazon prime video", "apple stock price"],
  "ai": ["artificial intelligence future", "ai writing assistant", "ai image generator", "ai search engines"],
  "w": ["weather forecast 10 day", "wikipedia article finder", "wordle unlimited", "world news today"],
  "we": ["weather radar maps", "web design inspiration", "weight loss tips", "weekly updates tech"]
};

const SEARCH_DATABASE = {
  "javascript": {
    knowledgePanel: {
      title: "JavaScript",
      subtitle: "Programming Language",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&auto=format&fit=crop&q=60",
      description: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for webpage behavior.",
      attributes: [
        { label: "Paradigm", value: "Multi-paradigm: event-driven, functional, imperative" },
        { label: "Designed by", value: "Brendan Eich" },
        { label: "First appeared", value: "December 4, 1995" },
        { label: "Major implementations", value: "V8, SpiderMonkey, JavaScriptCore" }
      ]
    },
    results: [
      {
        title: "JavaScript | MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        breadcrumbs: ["MDN Web Docs", "Web technology for developers", "JavaScript"],
        snippet: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.",
        date: "May 12, 2026"
      },
      {
        title: "JavaScript.info - The Modern JavaScript Tutorial",
        url: "https://javascript.info/",
        breadcrumbs: ["JavaScript.info"],
        snippet: "Modern JavaScript Tutorial: simple but detailed explanations with examples and tasks. From the basics to advanced topics like OOP, promises, async/await.",
        date: "Jun 1, 2026"
      },
      {
        title: "Learn JavaScript Online - Interactive tutorials",
        url: "https://www.learnjavascript.online/",
        breadcrumbs: ["Learn JavaScript", "Online"],
        snippet: "Learn JavaScript with interactive, bite-sized tutorials. Write real code, get feedback, and level up your skills. The first 40 lessons are completely free.",
        date: "Apr 20, 2026"
      },
      {
        title: "W3Schools: JavaScript Tutorial",
        url: "https://www.w3schools.com/js/",
        breadcrumbs: ["w3schools.com", "js"],
        snippet: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the HTML and the Web. JavaScript is easy to learn.",
        date: "Feb 18, 2026"
      }
    ],
    images: [
      { title: "JS Code Syntax", url: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&auto=format&fit=crop&q=60", site: "mdn.com" },
      { title: "React & JavaScript", url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&auto=format&fit=crop&q=60", site: "github.com" },
      { title: "Coding Workspace", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=60", site: "unsplash.com" },
      { title: "Software engineer typing", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=60", site: "dev.to" }
    ],
    news: [
      { title: "TC39 Releases Exciting New Features for JavaScript ES2026", source: "TechCrunch", date: "2 days ago", snippet: "The ECMAScript committee has finalized the ES2026 specifications, introducing native pipeline operators and records/tuples structure types." },
      { title: "Node.js 26.0 Released with Improved Performance", source: "InfoQ", date: "1 week ago", snippet: "Node.js drops version 26.0 with advanced HTTP/3 parsing features and out-of-the-box support for runtime type imports." }
    ]
  },
  "space": {
    knowledgePanel: {
      title: "Outer Space",
      subtitle: "Physical Region",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=60",
      description: "Outer space, or simply space, is the expanse that exists beyond Earth and between celestial bodies. Outer space is not completely empty—it is a hard vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium.",
      attributes: [
        { label: "Temperature", value: "2.7 Kelvin (−270.45 °C)" },
        { label: "Boundary", value: "Kármán line (100 km altitude)" },
        { label: "Contents", value: "Interstellar medium, cosmic rays, cosmic dust" }
      ]
    },
    results: [
      {
        title: "NASA - National Aeronautics and Space Administration",
        url: "https://www.nasa.gov/",
        breadcrumbs: ["nasa.gov"],
        snippet: "NASA's portal for latest space discoveries, research, missions, and space flight information. Pioneer in planetary science and deep space telescope operations.",
        date: "Jun 16, 2026"
      },
      {
        title: "Space.com: NASA, Space Exploration and Astronomy News",
        url: "https://www.space.com/",
        breadcrumbs: ["space.com"],
        snippet: "Get the latest updates on space missions, astronomical events, stargazing tips, cosmic space discoveries, and science news from the leading space media site.",
        date: "Jun 15, 2026"
      },
      {
        title: "ESA - European Space Agency",
        url: "https://www.esa.int/",
        breadcrumbs: ["esa.int"],
        snippet: "The European Space Agency (ESA) is Europe's gateway to space. Its mission is to shape the development of Europe's space capability and ensure that investment in space.",
        date: "May 28, 2026"
      }
    ],
    images: [
      { title: "Milkyway Galaxy", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&auto=format&fit=crop&q=60", site: "nasa.gov" },
      { title: "Deep Space Nebula", url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&auto=format&fit=crop&q=60", site: "space.com" },
      { title: "Orion Spacecraft", url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&auto=format&fit=crop&q=60", site: "nasa.gov" },
      { title: "Mars Perseverance Rover", url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300&auto=format&fit=crop&q=60", site: "nasa.gov" }
    ],
    news: [
      { title: "James Webb Telescope Discovers Atmospheres on Three Exoplanets", source: "Scientific American", date: "5 hours ago", snippet: "Astronomers confirm presence of water vapor and carbon monoxide in the atmospheres of planetary systems in the nearby cluster." },
      { title: "Mars Habitat Simulation Concludes Successfully after One Year", source: "SpaceNews", date: "3 days ago", snippet: "Four analog astronauts step out of NASA's 3D-printed Mars habitat simulator in Houston after completing a 378-day mission." }
    ]
  },
  "google": {
    knowledgePanel: {
      title: "Google LLC",
      subtitle: "Multinational Technology Company",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&auto=format&fit=crop&q=60",
      description: "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
      attributes: [
        { label: "Founded", value: "September 4, 1998 in Menlo Park, California" },
        { label: "Founders", value: "Larry Page, Sergey Brin" },
        { label: "Parent organization", value: "Alphabet Inc." },
        { label: "CEO", value: "Sundar Pichai" }
      ]
    },
    results: [
      {
        title: "Google Search Engine - Search the world's information",
        url: "https://www.google.com/",
        breadcrumbs: ["google.com"],
        snippet: "Google's home page. Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
        date: "Jun 17, 2026"
      },
      {
        title: "Google About - Our Mission, History & Technology",
        url: "https://about.google/",
        breadcrumbs: ["about.google"],
        snippet: "Discover Google's mission to organize the world's information and make it universally accessible and useful. Read about our technology, our values, and history.",
        date: "Mar 10, 2026"
      },
      {
        title: "Google Store - Pixel Phones, Chromecast, Nest & More",
        url: "https://store.google.com/",
        breadcrumbs: ["store.google.com"],
        snippet: "Shop the latest Pixel 9, Pixel Watch, Nest thermostats, Google TV, smart home devices, tablets, and accessories directly from the official Google Store.",
        date: "Jun 12, 2026"
      }
    ],
    images: [
      { title: "Google Office", url: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&auto=format&fit=crop&q=60", site: "google.com" },
      { title: "Google Campus", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=60", site: "nytimes.com" }
    ],
    news: [
      { title: "Google Announces New Quantum Computing Milestone", source: "Bloomberg", date: "1 day ago", snippet: "Google's Quantum AI lab reports stable logical qubits operating with error rates low enough for industrial simulations." },
      { title: "Chrome Browser rolls out dynamic sandboxing updates", source: "VentureBeat", date: "4 days ago", snippet: "The security framework update in Chrome 126 provides enhanced protection against zero-day scripting exploits." }
    ]
  },
  "ai": {
    knowledgePanel: {
      title: "Artificial Intelligence",
      subtitle: "Field of Study",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=400&auto=format&fit=crop&q=60",
      description: "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the intelligence of humans and other animals. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment.",
      attributes: [
        { label: "First proposed", value: "Dartmouth Workshop (1956)" },
        { label: "Core domains", value: "Machine Learning, Deep Learning, NLP, Computer Vision" },
        { label: "Prominent applications", value: "Generative AI models, autonomous vehicles, robotic assistance" }
      ]
    },
    results: [
      {
        title: "What is Artificial Intelligence? - IBM",
        url: "https://www.ibm.com/topics/artificial-intelligence",
        breadcrumbs: ["ibm.com", "topics", "artificial-intelligence"],
        snippet: "Artificial intelligence leverages computers and machines to mimic the problem-solving and decision-making capabilities of the human mind.",
        date: "Jan 15, 2026"
      },
      {
        title: "Artificial Intelligence (AI) - Britannica",
        url: "https://www.britannica.com/technology/artificial-intelligence",
        breadcrumbs: ["britannica.com", "technology"],
        snippet: "Artificial intelligence, the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings.",
        date: "Feb 10, 2026"
      },
      {
        title: "OpenAI - Creating safe AGI that benefits all of humanity",
        url: "https://www.openai.com/",
        breadcrumbs: ["openai.com"],
        snippet: "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.",
        date: "Jun 14, 2026"
      }
    ],
    images: [
      { title: "Neural Network Nodes", url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=300&auto=format&fit=crop&q=60", site: "researchgate.net" },
      { title: "Cybernetic Hand", url: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=300&auto=format&fit=crop&q=60", site: "futureoflife.org" }
    ],
    news: [
      { title: "Global Summit Agrees on New AI Safety Guidelines", source: "Wired", date: "12 hours ago", snippet: "Leaders from over 40 countries signed the treaty specifying safety thresholds for frontier model weights release." },
      { title: "AI Model Successfully Synthesizes New Antibiotic Class", source: "Nature", date: "5 days ago", snippet: "Deep learning model designs new peptide chains targeting drug-resistant pathogens in clinical trial tests." }
    ]
  },
  "weather": {
    knowledgePanel: {
      title: "Weather",
      subtitle: "Atmospheric Phenomenon",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&auto=format&fit=crop&q=60",
      description: "Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy. Most weather phenomena occur in the lowest level of the planet's atmosphere, the troposphere.",
      attributes: [
        { label: "Driving forces", value: "Solar radiation, air pressure differences, Earth rotation" },
        { label: "Primary components", value: "Temperature, humidity, precipitation, wind speed" },
        { label: "Measurement tools", value: "Thermometer, barometer, anemometer, rain gauge" }
      ]
    },
    results: [
      {
        title: "National Weather Service - NOAA",
        url: "https://www.weather.gov/",
        breadcrumbs: ["weather.gov"],
        snippet: "NOAA's National Weather Service portal. Local weather forecasts, radar sweeps, hazardous weather watches, weather alerts, and climate statistics.",
        date: "Jun 17, 2026"
      },
      {
        title: "The Weather Channel - National and Local Weather Forecast",
        url: "https://weather.com/",
        breadcrumbs: ["weather.com"],
        snippet: "Get local local weather forecasts, radar maps, alert notifications, weather news, allergy indices, and current climate indexes.",
        date: "Jun 17, 2026"
      },
      {
        title: "AccuWeather - Weather Alerts & Local Forecasts",
        url: "https://www.accuweather.com/",
        breadcrumbs: ["accuweather.com"],
        snippet: "AccuWeather provides local, national and international weather reports. Precise forecasts for rain, winter storms, severe heat, and pollen indices.",
        date: "May 25, 2026"
      }
    ],
    images: [
      { title: "Stormy Cumulus Clouds", url: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=300&auto=format&fit=crop&q=60", site: "weather.gov" },
      { title: "Rainbow after Rain", url: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=300&auto=format&fit=crop&q=60", site: "nationalgeographic.com" }
    ],
    news: [
      { title: "El Niño Phase Transitions to Neutral in the Pacific Basin", source: "Weather Underground", date: "Yesterday", snippet: "Oceanographers confirm drop in surface sea temperatures, heading towards La Niña conditions by early autumn." },
      { title: "Severe Storm Alerts Issued for Central Plains Regions", source: "ABC News", date: "6 hours ago", snippet: "High winds, potential hailstorms, and active rotating cells trigger local sirens across Nebraska and Kansas." }
    ]
  }
};

// Global App State
const state = {
  currentTheme: "light",
  currentQuery: "",
  activeTab: "all", // "all", "images", "news"
  selectedSuggestionIndex: -1
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupEventListeners();
  setupAutofocus();
});

// Setup Dark/Light Theme System
function setupTheme() {
  const savedTheme = localStorage.getItem("google-theme");
  if (savedTheme) {
    state.currentTheme = savedTheme;
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    state.currentTheme = prefersDark ? "dark" : "light";
  }
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.currentTheme);
  localStorage.setItem("google-theme", state.currentTheme);
  
  // Update theme toggle icons (adjust rotations if needed)
  const toggles = document.querySelectorAll(".theme-toggle");
  toggles.forEach(toggle => {
    if (state.currentTheme === "dark") {
      toggle.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.515 4.485a7 7 0 009.9 9.9z"></path>
        </svg>
      `;
    } else {
      toggle.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      `;
    }
  });
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
  applyTheme();
}

// Auto-focus search input at load
function setupAutofocus() {
  const homeInput = document.getElementById("home-search-input");
  if (homeInput) {
    homeInput.focus();
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Theme Toggles
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });

  // Home Search Inputs & Containers
  const homeInput = document.getElementById("home-search-input");
  const homeSearchContainer = homeInput.closest(".search-box-container");
  const homeDropdown = document.getElementById("home-suggestions");

  homeInput.addEventListener("focus", () => {
    homeSearchContainer.classList.add("focused");
    showSuggestions(homeInput.value, homeDropdown);
  });
  homeInput.addEventListener("blur", () => {
    // Timeout to allow suggestion clicks to register before hiding dropdown
    setTimeout(() => {
      homeSearchContainer.classList.remove("focused");
      homeDropdown.classList.remove("active");
    }, 200);
  });
  homeInput.addEventListener("input", (e) => {
    showSuggestions(e.target.value, homeDropdown);
  });
  homeInput.addEventListener("keydown", (e) => {
    handleSuggestionsKeyboardNav(e, homeInput, homeDropdown);
  });

  // Results Search Inputs
  const resultsInput = document.getElementById("results-search-input");
  const resultsSearchContainer = resultsInput.closest(".search-box-container");
  const resultsDropdown = document.getElementById("results-suggestions");

  resultsInput.addEventListener("focus", () => {
    resultsSearchContainer.classList.add("focused");
    showSuggestions(resultsInput.value, resultsDropdown);
  });
  resultsInput.addEventListener("blur", () => {
    setTimeout(() => {
      resultsSearchContainer.classList.remove("focused");
      resultsDropdown.classList.remove("active");
    }, 200);
  });
  resultsInput.addEventListener("input", (e) => {
    showSuggestions(e.target.value, resultsDropdown);
  });
  resultsInput.addEventListener("keydown", (e) => {
    handleSuggestionsKeyboardNav(e, resultsInput, resultsDropdown);
  });

  // Forms submit
  document.getElementById("home-search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    performSearch(homeInput.value);
  });
  document.getElementById("results-search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    performSearch(resultsInput.value);
  });

  // Home Search Button Click
  document.getElementById("btn-search-main").addEventListener("click", () => {
    performSearch(homeInput.value);
  });

  // I'm feeling lucky button
  document.getElementById("btn-lucky-main").addEventListener("click", handleLuckySearch);

  // Logo back-to-home click
  document.getElementById("logo-back-home").addEventListener("click", goBackHome);

  // Search results tab clicks
  document.querySelectorAll(".sub-nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      const tabName = item.getAttribute("data-tab");
      switchTab(tabName);
    });
  });
}

// Autocomplete/Suggestions Logic
function showSuggestions(query, dropdownEl) {
  const cleanQuery = query.toLowerCase().trim();
  state.selectedSuggestionIndex = -1;

  if (!cleanQuery) {
    dropdownEl.innerHTML = "";
    dropdownEl.classList.remove("active");
    return;
  }

  // Find matches (either exact key, or queries starting with character match)
  let matches = [];
  if (SUGGESTION_MAP[cleanQuery]) {
    matches = [...SUGGESTION_MAP[cleanQuery]];
  } else {
    // Fallback: search key partial matching
    const matchingKey = Object.keys(SUGGESTION_MAP).find(key => cleanQuery.startsWith(key));
    if (matchingKey) {
      matches = [...SUGGESTION_MAP[matchingKey]];
    } else {
      // General autocomplete generation
      matches = [
        `${cleanQuery} online`,
        `${cleanQuery} tutorial`,
        `what is ${cleanQuery}`,
        `${cleanQuery} download`
      ];
    }
  }

  // Render suggestion elements
  dropdownEl.innerHTML = "";
  matches.forEach((suggestion, idx) => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.setAttribute("data-index", idx);
    
    // Highlight matching portion
    let boldText = suggestion;
    if (suggestion.toLowerCase().startsWith(cleanQuery)) {
      boldText = `<strong>${suggestion.substring(0, cleanQuery.length)}</strong>${suggestion.substring(cleanQuery.length)}`;
    }
    
    item.innerHTML = `
      <span class="suggestion-icon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <span class="suggestion-text">${boldText}</span>
    `;

    item.addEventListener("click", () => {
      performSearch(suggestion);
    });

    dropdownEl.appendChild(item);
  });

  dropdownEl.classList.add("active");
}

function handleSuggestionsKeyboardNav(e, inputEl, dropdownEl) {
  const items = dropdownEl.querySelectorAll(".suggestion-item");
  if (!items.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    state.selectedSuggestionIndex++;
    if (state.selectedSuggestionIndex >= items.length) state.selectedSuggestionIndex = 0;
    highlightSelectedSuggestion(items, inputEl);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    state.selectedSuggestionIndex--;
    if (state.selectedSuggestionIndex < 0) state.selectedSuggestionIndex = items.length - 1;
    highlightSelectedSuggestion(items, inputEl);
  } else if (e.key === "Escape") {
    dropdownEl.classList.remove("active");
    inputEl.blur();
  }
}

function highlightSelectedSuggestion(items, inputEl) {
  items.forEach((item, index) => {
    if (index === state.selectedSuggestionIndex) {
      item.classList.add("selected");
      // Populate text inside input box
      const text = item.querySelector(".suggestion-text").textContent;
      inputEl.value = text;
    } else {
      item.classList.remove("selected");
    }
  });
}

// "I'm Feeling Lucky" interaction
function handleLuckySearch() {
  const topics = ["space", "javascript", "google", "ai", "weather"];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  
  const homeInput = document.getElementById("home-search-input");
  homeInput.value = "";
  
  // Typing animation simulation
  let index = 0;
  const interval = setInterval(() => {
    if (index < randomTopic.length) {
      homeInput.value += randomTopic[index];
      index++;
    } else {
      clearInterval(interval);
      // Wait a small bit and perform search
      setTimeout(() => {
        performSearch(randomTopic);
      }, 500);
    }
  }, 100);
}

// Core Search Trigger
function performSearch(query) {
  const cleaned = query.trim();
  if (!cleaned) return;

  state.currentQuery = cleaned;
  
  // Easter egg: if query is "hello", flip the site upside down (toggle)
  if (cleaned.toLowerCase() === "hello") {
    document.body.classList.toggle("upside-down");
  } else {
    document.body.classList.remove("upside-down");
  }

  // Transition home container away, open results page
  document.getElementById("view-home").classList.add("hidden");
  document.getElementById("view-results").classList.remove("hidden");

  // Sync inputs
  document.getElementById("results-search-input").value = cleaned;
  document.getElementById("home-search-input").value = cleaned;
  
  // Load query results
  renderSearchResults();
}

function goBackHome() {
  state.currentQuery = "";
  state.activeTab = "all";
  
  // Remove easter egg if going back home
  document.body.classList.remove("upside-down");
  
  // Transition tabs back to default "all"
  document.querySelectorAll(".sub-nav-item").forEach(el => el.classList.remove("active"));
  document.querySelector('.sub-nav-item[data-tab="all"]').classList.add("active");

  document.getElementById("view-results").classList.add("hidden");
  document.getElementById("view-home").classList.remove("hidden");
  
  // Clean values and autofocus
  document.getElementById("home-search-input").value = "";
  document.getElementById("results-search-input").value = "";
  setupAutofocus();
}

function switchTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll(".sub-nav-item").forEach(item => {
    if (item.getAttribute("data-tab") === tabName) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  renderSearchResults();
}

// Results Generator & Renderer
function renderSearchResults() {
  const query = state.currentQuery.toLowerCase();
  const searchContainer = document.getElementById("search-results-area");
  const kpContainer = document.getElementById("knowledge-panel-area");
  
  // Clear areas
  searchContainer.innerHTML = "";
  kpContainer.innerHTML = "";

  // 1. Check database or create dynamic fallback
  let data = SEARCH_DATABASE[query];
  if (!data) {
    // Generate programmatic mock database results
    data = generateFallbackData(state.currentQuery);
  }

  // 2. Render content based on activeTab (all, images, news)
  if (state.activeTab === "all") {
    // Render Stats
    const totalResults = Math.floor(Math.random() * 5000000) + 1500000;
    const timeSpent = (Math.random() * 0.4 + 0.1).toFixed(2);
    
    const statsEl = document.createElement("div");
    statsEl.className = "results-stats";
    statsEl.innerHTML = `About ${totalResults.toLocaleString()} results (${timeSpent} seconds)`;
    searchContainer.appendChild(statsEl);

    // Render list results
    data.results.forEach((item, idx) => {
      const card = document.createElement("div");
      card.className = "search-result-card";
      card.style.animationDelay = `${idx * 0.05}s`;
      
      const breadcrumbsStr = item.breadcrumbs.join(" > ");

      card.innerHTML = `
        <div class="result-breadcrumbs">
          <span class="result-url">${breadcrumbsStr}</span>
        </div>
        <h3 class="result-title"><a href="${item.url}" target="_blank">${item.title}</a></h3>
        <p class="result-description">
          <span class="result-snippet-date">${item.date} —</span> ${item.snippet}
        </p>
      `;
      searchContainer.appendChild(card);
    });

    // Render Knowledge Panel
    if (data.knowledgePanel) {
      const kp = data.knowledgePanel;
      
      let attrsHTML = "";
      kp.attributes.forEach(attr => {
        attrsHTML += `
          <div class="kp-info-item">
            <span class="kp-info-label">${attr.label}:</span> ${attr.value}
          </div>
        `;
      });

      kpContainer.innerHTML = `
        <div class="knowledge-panel">
          <div class="kp-header">
            <div class="kp-subtitle">${kp.subtitle}</div>
            <h2 class="kp-title">${kp.title}</h2>
          </div>
          <img src="${kp.image}" alt="${kp.title}" class="kp-image" />
          <p class="kp-description">${kp.description}</p>
          <div class="kp-details">
            ${attrsHTML}
          </div>
        </div>
      `;
    }

  } else if (state.activeTab === "images") {
    // Render Images Grid
    const imgGrid = document.createElement("div");
    imgGrid.className = "image-results-grid";

    data.images.forEach(img => {
      const imgItem = document.createElement("div");
      imgItem.className = "image-result-item";
      imgItem.innerHTML = `
        <img src="${img.url}" alt="${img.title}" loading="lazy" />
        <div class="image-result-title">${img.title}</div>
        <div class="image-result-site">${img.site}</div>
      `;
      imgGrid.appendChild(imgItem);
    });

    searchContainer.appendChild(imgGrid);

  } else if (state.activeTab === "news") {
    // Render News Layout
    if (data.news && data.news.length > 0) {
      data.news.forEach((newsItem, idx) => {
        const card = document.createElement("div");
        card.className = "search-result-card";
        card.style.animationDelay = `${idx * 0.05}s`;
        card.innerHTML = `
          <div class="result-breadcrumbs">
            <span class="result-url">${newsItem.source}</span> &bull; <span>${newsItem.date}</span>
          </div>
          <h3 class="result-title"><a href="#" onclick="return false;">${newsItem.title}</a></h3>
          <p class="result-description">${newsItem.snippet}</p>
        `;
        searchContainer.appendChild(card);
      });
    } else {
      searchContainer.innerHTML = `<div class="results-stats">No news results found for "${state.currentQuery}".</div>`;
    }
  }
}

// Fallback search result generator for random user input
function generateFallbackData(query) {
  const capitalized = query.charAt(0).toUpperCase() + query.slice(1);
  return {
    knowledgePanel: {
      title: capitalized,
      subtitle: "General Query",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60",
      description: `Exploring knowledge index database for "${capitalized}". There is wide coverage available regarding this keyword's technical definition, applications, news, and references across standard documentation.`,
      attributes: [
        { label: "Category", value: "Search Query" },
        { label: "Search Relevance", value: "High (100%)" },
        { label: "Suggested action", value: "Click developer docs or news links for live updates" }
      ]
    },
    results: [
      {
        title: `${capitalized} - What is it and how does it work?`,
        url: `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`,
        breadcrumbs: ["wikipedia.org", "wiki", query],
        snippet: `Detailed documentation, history, and definitions for ${capitalized}. Discover modern applications, theoretical analysis, controversies, and global implementations of ${query}.`,
        date: "Jun 10, 2026"
      },
      {
        title: `Official Developer Resources for ${capitalized}`,
        url: `https://www.google.com/search?q=${encodeURIComponent(query)}+docs`,
        breadcrumbs: ["github.com", "developer-guides", query],
        snippet: `Explore SDKs, APIs, installation repositories, tutorials, and quick-start reference cards on ${capitalized}. Get the latest release versions and stable build downloads.`,
        date: "May 29, 2026"
      },
      {
        title: `Top 10 Best Practices when working with ${capitalized}`,
        url: `https://medium.com/topic/${encodeURIComponent(query)}`,
        breadcrumbs: ["medium.com", "tech-blog", query],
        snippet: `A comprehensive design pattern and engineering breakdown of ${capitalized}. Learn how to scale, secure, and debug processes while avoiding common architectural pitfalls.`,
        date: "Apr 14, 2026"
      }
    ],
    images: [
      { title: `${capitalized} Abstract Art`, url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=60", site: "unsplash.com" },
      { title: `${capitalized} Modern Design`, url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=300&auto=format&fit=crop&q=60", site: "pinterest.com" }
    ],
    news: [
      { title: `Why everyone is talking about ${capitalized} right now`, source: "TechCrunch", date: "3 hours ago", snippet: `A look at recent trends, business innovations, and investment opportunities related to ${capitalized} in 2026.` }
    ]
  };
}
