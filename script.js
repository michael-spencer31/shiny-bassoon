const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const eventTypeRadios = document.querySelectorAll('input[name="event-type"]');
    const modelingSection = document.querySelector('.modeling');
    const danceSection = document.querySelector('.dance');
    const estimatedCostLabel = document.getElementById('estimated-cost');

    // Function to update visibility based on the selected event type
    function updateConditionalFields() {
        const selectedEventType = document.querySelector('input[name="event-type"]:checked')?.value;

        // Show/Hide sections based on selection
        if (selectedEventType === "modeling") {
            modelingSection.classList.add("active");
            danceSection.classList.remove("active");
        } else if (selectedEventType === "dance") {
            danceSection.classList.add("active");
            modelingSection.classList.remove("active");
        } else {
            // Hide both sections if nothing is selected
            modelingSection.classList.remove("active");
            danceSection.classList.remove("active");
        }
    }

    function updateEstimatedCost() {

        let cost = 100;
        const eventDuration = document.querySelector('input[name="event-duration"]').value;

        if (eventDuration) {
            cost += parseInt(eventDuration) * 100;
        }

        // Check if event is within 2 hours of Halifax
        const isWithinHalifax = document.querySelector('input[name="location"]:checked')?.value;
        if (isWithinHalifax === "no") {
            cost += 200; // Add $200 if the location is not within 2 hours
        }

        const providesHairMakeup = document.querySelector('input[name="hair-makeup"]:checked')?.value;

        if (providesHairMakeup === 'no') {
            cost += 250;
        }

        // Add cost for modeling-specific options
        const modelingType = document.getElementById('modeling-type').value;
        if (modelingType === "lingerie") {
            cost += 400;
        } else if (modelingType === "intimates") {
            cost += 300;
        } else if (modelingType === "hosiery") {
            cost += 100;
        }

        estimatedCostLabel.textContent = `Estimated Cost: $${cost} CAD`;
    }

    // Add event listeners to form elements
    document.querySelectorAll('input[name="event-type"]').forEach((radio) => {
        radio.addEventListener("change", updateConditionalFields);
    });

    document.querySelectorAll('input, select').forEach((element) => {
        element.addEventListener("input", updateEstimatedCost);
    });

    // Initial setup
    updateConditionalFields();
    updateEstimatedCost();
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            // Toggle the active class
            item.classList.toggle("active");

            // Close all other open items
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});
