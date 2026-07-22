//dom elements
const yearE1 = document.getElementById("year");
const mobileMenu = document.getElementById("mobileMenu");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const mobileLink = document.getElementById("mobileLink");
const ctaBtn = document.getElementById("ctaBtn");
const heading = document.getElementById("heroHeading");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");

const featureGrid = document.getElementById("featureGrid");
const services = [
  {
    title: "Classic Haircut",
    text: "Timeless cuts with modern precision tailored for your style.",
    image: "assets/images/feature-1.jpg",
  },
  {
    title: "Beard Trim",
    text: "Shape and line-up your beard for a clean, sharp finish.",
    image: "assets/images/feature-2.jpg",
  },
  {
    title: "Staight Razor Shave",
    text: "Hot towel treatment with a smooth shave.",
    image: "assets/images/feature-3.jpg",
  },
];
//create function that renders links to nav tag
const renderNavigation = () => {
  console.log("Render nav is being called");

  try {
    if (!nav) {
      throw new Error("Nav element is missing");
    }

    if (!mobileMenu) {
      throw new Error("Mobile menu missing");
    }

    //desktop Nav
    if (nav) {
      const navHTML = [
        {
          label: "Home",
          href: "#hero",
        },
        {
          label: "Services",
          href: "#features",
        },
        {
          label: "Book",
          href: "#cta",
        },
        {
          label: "Contact",
          href: "#footer",
        },
      ]
        .map((link) => {
          return `
                <a href = "${link.href}" class="nav-link">
                ${link.label}
                </a>
            
            `;
        })
        .join("");
      nav.innerHTML = navHTML;
      //same but for mobile menu
    }
    if (mobileMenu) {
      const mobileHTML = [
        {
          label: "Home",
          href: "#hero",
        },
        {
          label: "Services",
          href: "#features",
        },
        {
          label: "Book",
          href: "#cta",
        },
        {
          label: "Contact",
          href: "#footer",
        },
      ]
        .map((link) => {
          return `
                <a href = "${link.href}" class="mobile-link">
                ${link.label}
                </a>
            
            `;
        })
        .join("");
      mobileMenu.innerHTML = mobileHTML;
    }
  } catch (error) {
    consolelog("error");
    if (mobileMenu) {
      mobileMenu.innerHTML = `
        <p>Navigation could not be loaded</p>
        `;
    }
  }
};

renderNavigation();
// create function rendering features on featureGrid

const renderFeatures = () => {
  if (!featureGrid) return;
  const cardsHTML = services
    .map((service) => {
      return `
            <article class="feature-card">
                <img src = "${service.image}" alt="${service.title}" class="feature-img"/>
                <h3 class="feature-title">${service.title}</h3>
                <p class="feature-text">
                 ${service.text}
             </p>
          </article>
        `;
    })
    .join("");
  featureGrid.innerHTML = cardsHTML;
};
renderFeatures();
//update footer year

const setCurrentYear = () => {
  const now = new Date();
  yearE1.textContent = now.getFullYear();
};

setCurrentYear();

//Toggle mobile menu open/close
let isMenuOpen = false;

const toggleMobileMenu = () => {
  if (!mobileMenu) return;

  if (isMenuOpen === false) {
    mobileMenu.classList.add("is-open");
    isMenuOpen = true;
  } else {
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
  }
};

//close mobile menu when a link is clicked
const closedMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  isMenuOpen = false;
};

const updateHeadingText = (newText) => {
  if (!heading) return;
  heading.textContent = newText;
};

//event listeneer

if (menuBtn) {
  menuBtn.addEventListener("click", () => toggleMobileMenu());
}

//close mobile menu when mobile link is clicked
if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    //if they clicked an <a> tag, close menu
    console.log(event);
    if (event.target.tagName === "A") {
      closedMobileMenu();
    }
  });
}

// cta button: "Book Now"

if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    //create function that updates heading
    updateHeadingText("Booking coming soon... great choice!");
  });
}

// create eventlistener (eventlisteners take 2 arguments)

if (callBtn) {
  callBtn.addEventListener("click", () => {
    if (phoneLink) {
      //update the header with phoneNumber and phoneLink on callBtn click
      updateHeadingText("Call us at " + phoneLink.textContent);
    } else {
      updateHeadingText("Call feature is coming soon");
    }
  });
}
