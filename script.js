const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const eventTypeRadios = document.querySelectorAll('input[name="event-type"]');
    const modelingSection = document.querySelector('.modeling');
    const danceSection = document.querySelector('.dance');
    const estimatedCostLabel = document.getElementById('estimated-cost');

    const locationRadios = document.querySelectorAll('input[name="location"]');
    const durationInput = document.querySelector('input[name="event-duration"]');
    const hairMakeupRadios = document.querySelectorAll('input[name="hair-makeup"]');

    const modelingDropdown = document.getElementById('modeling-type');
    const danceDropdown = document.getElementById('dance-type');

    let baseCost = 100; // Base cost for the first hour
    let additionalCosts = { travel: 0, duration: 0, hairMakeup: 0, modeling: 0, dance: 0 };

    // Function to update visibility based on the selected event type
    function updateConditionalFields() {
        const selectedEventType = document.querySelector('input[name="event-type"]:checked')?.value;

        // Reset costs associated with the non-selected event type
        if (selectedEventType === "modeling") {
            additionalCosts.dance = 0; // Reset dance-specific costs
            modelingSection.style.display = "block";
            danceSection.style.display = "none";
            danceDropdown.value = ""; // Reset dance dropdown
        } else if (selectedEventType === "dance") {
            additionalCosts.modeling = 0; // Reset modeling-specific costs
            danceSection.style.display = "block";
            modelingSection.style.display = "none";
            modelingDropdown.value = ""; // Reset modeling dropdown
        } else {
            additionalCosts.modeling = 0;
            additionalCosts.dance = 0;
            modelingSection.style.display = "none";
            danceSection.style.display = "none";
            modelingDropdown.value = ""; // Reset both dropdowns
            danceDropdown.value = "";
        }

        updateEstimatedCost();
    }

    // Function to calculate travel costs
    function updateTravelCost() {
        additionalCosts.travel = 0;
        const isWithinHalifax = document.querySelector('input[name="location"]:checked')?.value;

        if (isWithinHalifax === "no") {
            additionalCosts.travel += 200;
        }

        updateEstimatedCost();
    }

    // Function to calculate duration costs
    function updateDurationCost() {
        additionalCosts.duration = 0;
        const eventDuration = parseInt(durationInput.value, 10);

        if (eventDuration && eventDuration > 1) {
            additionalCosts.duration += (eventDuration - 1) * 100;
        }

        updateEstimatedCost();
    }

    // Function to calculate hair/makeup costs
    function updateHairMakeupCost() {
        additionalCosts.hairMakeup = 0;
        const providesHairMakeup = document.querySelector('input[name="hair-makeup"]:checked')?.value;

        if (providesHairMakeup === "no") {
            additionalCosts.hairMakeup += 250;
        }

        updateEstimatedCost();
    }

    // Function to handle modeling-specific costs
    function updateModelingCost() {
        additionalCosts.modeling = 0;
        const modelingType = modelingDropdown.value;

        if (modelingType === "lingerie") {
            additionalCosts.modeling += 400;
        } else if (modelingType === "intimates") {
            additionalCosts.modeling += 300;
        } else if (modelingType === "hosiery") {
            additionalCosts.modeling += 100;
        }

        updateEstimatedCost();
    }

    // Function to handle dance-specific costs
    function updateDanceCost() {
        additionalCosts.dance = 0;
        const danceType = danceDropdown.value;

        if (danceType === "ballet") {
            additionalCosts.dance += 200;
        } else if (danceType === "jazz") {
            additionalCosts.dance += 150;
        } else if (danceType === "ballroom") {
            additionalCosts.dance += 300;
        }

        updateEstimatedCost();
    }

    // Function to calculate total cost
    function updateEstimatedCost() {
        let totalCost = baseCost;

        for (const key in additionalCosts) {
            totalCost += additionalCosts[key];
        }

        estimatedCostLabel.textContent = `Estimated Cost: $${totalCost} CAD`;
    }

    // Add event listeners to form elements
    eventTypeRadios.forEach((radio) => {
        radio.addEventListener("change", updateConditionalFields);
    });

    locationRadios.forEach((radio) => {
        radio.addEventListener("change", updateTravelCost);
    });

    durationInput.addEventListener("input", updateDurationCost);

    hairMakeupRadios.forEach((radio) => {
        radio.addEventListener("change", updateHairMakeupCost);
    });

    modelingDropdown.addEventListener("change", updateModelingCost);
    danceDropdown.addEventListener("change", updateDanceCost);

    // Initial setup
    updateConditionalFields();
    updateEstimatedCost();
});




document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        // Toggle active class on the header
        header.classList.toggle('active');
        
        // Toggle the associated content
        const content = header.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const feedbackDiv = document.getElementById("submission-feedback");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Simulate form processing
        feedbackDiv.style.display = "block"; // Show feedback message

        // Clear the form fields
        contactForm.reset();
    });
});
