const themes = [
    {
      name: "Coffee Shop",
      category: "coffee",
      description: "Warm, cozy, and perfect for cafes.",
      primary: "#4B2E2B",
      secondary: "#F4E7D3",
      accent: "#C98245",
      text: "#241A17",
      lightText: "#FFFFFF",
      heading: "Playfair Display",
      body: "Inter"
    },
    {
      name: "Tech SaaS",
      category: "saas",
      description: "Clean blue and white startup look.",
      primary: "#0B3D91",
      secondary: "#F5F8FF",
      accent: "#3B82F6",
      text: "#111827",
      lightText: "#FFFFFF",
      heading: "Poppins",
      body: "Inter"
    },
    {
      name: "Luxury Black Gold",
      category: "luxury",
      description: "Premium black, white, and gold palette.",
      primary: "#070707",
      secondary: "#F6F1E8",
      accent: "#C9A646",
      text: "#171717",
      lightText: "#FFFFFF",
      heading: "Playfair Display",
      body: "Inter"
    },
    {
      name: "Startup Purple",
      category: "startup",
      description: "Modern purple gradient inspired theme.",
      primary: "#5B21B6",
      secondary: "#F5F3FF",
      accent: "#EC4899",
      text: "#1F1535",
      lightText: "#FFFFFF",
      heading: "Montserrat",
      body: "Inter"
    },
    {
      name: "Corporate Blue",
      category: "business",
      description: "Professional and trustworthy business style.",
      primary: "#123C69",
      secondary: "#F2F6FA",
      accent: "#2E86AB",
      text: "#102A43",
      lightText: "#FFFFFF",
      heading: "Poppins",
      body: "Inter"
    },
    {
      name: "Soft Neutral",
      category: "business",
      description: "Minimal, calm, and clean portfolio look.",
      primary: "#EFEAE4",
      secondary: "#FFFFFF",
      accent: "#8A6F5A",
      text: "#2B2521",
      lightText: "#2B2521",
      heading: "Playfair Display",
      body: "Inter"
    },
    {
      name: "Dark Developer",
      category: "saas",
      description: "Dark UI with electric accent.",
      primary: "#101010",
      secondary: "#1D1D1D",
      accent: "#00D1FF",
      text: "#F5F5F5",
      lightText: "#FFFFFF",
      heading: "Poppins",
      body: "Inter"
    },
    {
      name: "Fresh Green",
      category: "business",
      description: "Great for wellness, organic, or service brands.",
      primary: "#204E3A",
      secondary: "#EEF7F1",
      accent: "#7BC96F",
      text: "#102018",
      lightText: "#FFFFFF",
      heading: "Montserrat",
      body: "Inter"
    },
    {
      name: "Cream Editorial",
      category: "luxury",
      description: "Editorial style for blogs and lifestyle brands.",
      primary: "#F8F1E7",
      secondary: "#FFFFFF",
      accent: "#B96D40",
      text: "#201A17",
      lightText: "#201A17",
      heading: "Playfair Display",
      body: "Inter"
    },
    {
      name: "Bold Orange",
      category: "startup",
      description: "High-energy theme for creative brands.",
      primary: "#1F2937",
      secondary: "#FFF7ED",
      accent: "#F97316",
      text: "#111827",
      lightText: "#FFFFFF",
      heading: "Montserrat",
      body: "Inter"
    }
  ];
  
  const themeGrid = document.getElementById("themeGrid");
  const themeModal = new bootstrap.Modal(document.getElementById("themeModal"));
  const livePreview = document.getElementById("livePreview");
  const themeDetails = document.getElementById("themeDetails");
  const themeModalTitle = document.getElementById("themeModalTitle");
  const toast = document.getElementById("toast");
  
  function renderThemes(category = "all") {
    themeGrid.innerHTML = "";
  
    const filteredThemes = category === "all"
      ? themes
      : themes.filter(theme => theme.category === category);
  
    filteredThemes.forEach((theme, index) => {
      const realIndex = themes.indexOf(theme);
  
      themeGrid.innerHTML += `
        <article class="theme-card" onclick="openTheme(${realIndex})">
          <div class="theme-card-preview" style="background:${theme.secondary}">
            <div class="mini-nav" style="background:${theme.primary}"></div>
            <div class="mini-hero" style="background:${theme.primary}"></div>
            <div class="mini-section" style="background:${theme.accent}"></div>
          </div>
  
          <div class="theme-card-body">
            <h3>${theme.name}</h3>
            <p>${theme.description}</p>
          </div>
        </article>
      `;
    });
  }
  
  function openTheme(index) {
    const theme = themes[index];
  
    themeModalTitle.textContent = theme.name;
  
    livePreview.innerHTML = `
      <div class="template-preview" style="font-family:${theme.body}; color:${theme.text}; background:${theme.secondary};">
  
        <nav class="template-nav" style="background:${theme.secondary}; color:${theme.text};">
          <div class="template-logo">Logo</div>
  
          <div class="template-links">
            <span>Home</span>
            <span>Courses</span>
            <span>Blog</span>
            <span>Quote</span>
            <span>Contact</span>
          </div>
  
          <button class="template-login" style="background:${theme.accent}; color:${theme.lightText};">
            Login
          </button>
        </nav>
  
        <section class="template-hero" style="background:${theme.primary}; color:${theme.lightText};">
          <div>
            <h1 style="font-family:${theme.heading};">
              Let The Journey Of Better Design Begin Today!
            </h1>
  
            <div class="template-buttons">
              <button style="background:${theme.accent}; color:${theme.lightText};">
                SIGN UP
              </button>
  
              <button class="outline" style="color:${theme.lightText};">
                VIEW THEME
              </button>
            </div>
          </div>
  
          <div class="placeholder-img" style="background:${theme.secondary}; color:${theme.text};">
            16:9 Ratio
          </div>
        </section>
  
        <section class="preview-section" style="background:${theme.secondary}; color:${theme.text};">
          <h2 style="font-family:${theme.heading};">
            All Layouts Are Built With Real Website Sections
          </h2>
  
          <div class="section-line" style="background:${theme.accent};"></div>
  
          <h2 style="font-family:${theme.heading};">Our Services</h2>
  
          <div class="cards-grid">
            ${createPreviewCard(theme, "Business Website", "A clean homepage layout for companies and service brands.", "From $999")}
            ${createPreviewCard(theme, "Online Store", "A product-ready section using balanced colors and buttons.", "From $1250")}
            ${createPreviewCard(theme, "Portfolio", "A simple way to preview creative work and case studies.", "From $750")}
          </div>
        </section>
  
        <section class="icon-row" style="background:${theme.secondary}; color:${theme.text};">
          ${createIconItem(theme, "bi-briefcase", "Business")}
          ${createIconItem(theme, "bi-cart", "Online Store")}
          ${createIconItem(theme, "bi-pencil-square", "Blog")}
          ${createIconItem(theme, "bi-grid", "Portfolio")}
        </section>
  
        <section class="info-strip" style="background:${theme.primary}; color:${theme.lightText};">
          <h3 style="font-family:${theme.heading};">Designed to reduce decision fatigue.</h3>
          <p>
            This preview shows how the background, text, buttons, accent colors, and font pairings work together on a realistic one-page website.
          </p>
        </section>
  
      </div>
    `;
  
    themeDetails.innerHTML = `
      ${createDetail("Primary / 60%", theme.primary)}
      ${createDetail("Secondary / 30%", theme.secondary)}
      ${createDetail("Accent / 10%", theme.accent)}
      ${createDetail("Text Color", theme.text)}
      ${createDetail("Heading Font", theme.heading)}
      ${createDetail("Body Font", theme.body)}
    `;
  
    themeModal.show();
  }
  
  function createPreviewCard(theme, title, text, price) {
    return `
      <div class="preview-card" style="background:white;">
        <div class="placeholder-img" style="background:${theme.primary}; color:${theme.lightText};">
          16:9 Ratio
        </div>
  
        <div class="card-content">
          <h4>${title}</h4>
          <p>${text}</p>
          <strong style="color:${theme.accent};">${price}</strong>
        </div>
      </div>
    `;
  }
  
  function createIconItem(theme, icon, title) {
    return `
      <div class="icon-item">
        <i class="bi ${icon}" style="color:${theme.accent};"></i>
        <h4>${title}</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    `;
  }
  
  function createDetail(label, value) {
    return `
      <div class="detail-card">
        <small>${label}</small>
        <strong>${value}</strong>
        <br>
        <button class="copy-btn" onclick="copyValue('${value}')">Copy</button>
      </div>
    `;
  }
  
  function copyValue(value) {
    navigator.clipboard.writeText(value);
  
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 1400);
  }
  
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
  
      renderThemes(button.dataset.category);
    });
  });
  
  renderThemes();