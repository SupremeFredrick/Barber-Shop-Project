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

// ----- Modal Elements -----
const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");

const featureGrid = document.getElementById("featureGrid");
const services = [
 {
 id: 1,
 title: "Classic Haircut",
 description: "Timeless cuts with modern precision tailored to your style.",
 image: "assets/images/feature-1.jpg",
 alt: "Classic haircut",
 price: 25,
 popular: true,
 details: [
 "Consultation with your barber before the cut begins.",
 "Hair sectioning and shape-up based on your preferred style.",
 "Professional clippers, trimmers, and shears used for precision.",
 "Neckline cleanup and finishing touches included.",
 "Light styling product applied for a clean final look."
 ]
 },
 {
 id: 2,
 title: "Beard Trim",
 description: "Shape and line-up your beard for a clean, sharp finish.",
 image: "assets/images/feature-2.jpg",
 alt: "Beard trim",
 price: 15,
 popular: false,
 details: [
 "Beard assessment and shaping based on face structure.",
 "Line-up around cheeks, jawline, and neckline.",
 "Trimmers and detail tools used for crisp edges.",
 "Conditioning beard product may be applied for softness.",
 "Final symmetry check for a polished finish."
 ]
 },
 {
 id: 3,
 title: "Straight Razor Shave",
 description: "Hot towel treatment with a smooth traditional shave.",
 image: "assets/images/feature-3.jpg",
 alt: "Straight razor shave",
 price: 30,
 popular: true,
 details: [
 "Hot towel prep to soften facial hair and open pores.",
 "Premium shaving cream or lather applied to protect the skin.",
 "Straight razor shave performed with careful detailing.",
 "Second hot towel may be used for comfort and cleanup.",
 "Aftershave or soothing skin product applied after service."
 ]
 },
 {
 id: 4,
 title: "Fade & Style",
 description: "A clean fade with finishing detail for a sharp, modern look.",
 image: "assets/images/feature-2.jpg",
 alt: "Fade haircut",
 price: 35,
 popular: false,
 details: [
 "Style consultation before clipper work begins.",
 "Fade blended to your preferred level and finish.",
 "Detailing around temples, neckline, and beard area if needed.",
 "Scissors and clipper-over-comb may be used for texture.",
 "Styling product added to complete the final look."
 ]
 },
 {
 id: 5,
 title: "Kids Cut",
 description: "Clean, comfortable haircut service for younger clients.",
 image: "assets/images/feature-1.jpg",
 alt: "Kids haircut",
 price: 20,
 popular: false,
 details: [
 "Simple consultation with child and parent if needed.",
 "Age-appropriate haircut with comfort in mind.",
 "Careful clipper and scissor work for a clean finish.",
 "Light cleanup around the neckline and ears.",
 "Styled neatly before leaving the chair."
 ]
 },
 {
 id: 6,
 title: "Head Shave",
 description: "Smooth head shave with classic barbershop treatment.",
 image: "assets/images/feature-3.jpg",
 alt: "Head shave",
 price: 28,
 popular: true,
 details: [
 "Scalp prep with warm towel treatment.",
 "Protective shave product applied before razor work.",
 "Close shave performed for a smooth finish.",
 "Scalp cleaned and checked for even consistency.",
 "Moisturizing scalp product applied after the shave."
 ]
 }
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
 const cardsHTML = services.map((service) => {
 let badgeHTML = "";
 if (service.popular) {
 badgeHTML = `<p class="service-badge">Popular Choice</p>`;
 } else {
 badgeHTML = `<p class="service-badge alt-badge">Barber Favorite</p>`;
 }
 return `
 <article class="feature-card">
 <img
 src="${service.image}"
 alt="${service.alt}"
 class="feature-img"
 />
 <h3 class="feature-title">${service.title}</h3>
 <p class="feature-text">${service.description}</p>
 ${badgeHTML}
 <p class="service-price">$${service.price}</p>
 <div class="service-actions">
 <button
 class="service-details-btn"
 type="button"
 data-service-id="${service.id}"
 >
 View Details
 </button>
 </div>
 </article>
 `;
 }).join("");
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
if (featureGrid) {
 featureGrid.addEventListener("click", (event) => {
 const clickedButton = event.target.closest(".service-details-btn");
 if (!clickedButton) return;
 const serviceId = clickedButton.dataset.serviceId;
 openServiceModal(serviceId);
 });
}

const openServiceModal = (serviceId) => {
 if (
 !serviceModal ||
 !serviceModalTitle ||
 !serviceModalPrice ||
 !serviceModalList
 ) {
 return;
 }
 const selectedService = services.find((service) => {
 return service.id === Number(serviceId);
 });
 if (!selectedService) return;
 serviceModalTitle.textContent = selectedService.title;
 serviceModalPrice.textContent = `$${selectedService.price}`;
 serviceModalList.innerHTML = selectedService.details.map((detail) => {
 return `<li>${detail}</li>`;
 }).join("");
 serviceModal.classList.add("is-open");
 serviceModal.setAttribute("aria-hidden", "false");
 document.body.style.overflow = "hidden";
};
const closeServiceModal = () => {
 if (!serviceModal) return;
 serviceModal.classList.remove("is-open");
 serviceModal.setAttribute("aria-hidden", "true");
 document.body.style.overflow = "";
};
if (serviceModalClose) {
 serviceModalClose.addEventListener("click", closeServiceModal);
}
if (serviceModalOverlay) {
 serviceModalOverlay.addEventListener("click", closeServiceModal);
}
document.addEventListener("keydown", (event) => {
 if (event.key === "Escape") {
 closeServiceModal();
 }
});





