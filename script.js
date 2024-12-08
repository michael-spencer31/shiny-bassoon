document.addEventListener('DOMContentLoaded', () => {
    const location = document.getElementById('location');
    const duration = document.getElementById('duration');
    const hairMakeup = document.getElementById('hair-makeup');
    const attire = document.getElementById('attire');
    const costDisplay = document.getElementById('cost');

    const baseRate = 100; // Base hourly rate
    let totalRate = baseRate;

    const calculateCost = () => {
        totalRate = baseRate; // Reset to base rate

        // Adjust for location
        if (location.value === 'no') {
            totalRate += 250; // Add $250 for events beyond 2 hours of Halifax
        }

        // Adjust for professional hair and makeup
        if (hairMakeup.value === 'no') {
            totalRate += 150; // Add $150 if hair and makeup are not provided
        }

        // Adjust for attire
        if (attire.value === 'multiple') {
            totalRate += 200; // Add $200 for multiple attire types
        } else if (attire.value == 'hosiery') {
            totalRate += 100; // Add $10 for specific attire
        } else if (attire.value == 'lingerie') {
            totalRate += 350;
        } else if (attire.value == 'intimates') {
            totalRate += 200;
        }

        // Calculate final cost based on duration
        const eventDuration = duration.value ? parseInt(duration.value, 10) : 1; // Default to 1 hour
        const finalCost = totalRate * eventDuration;

        // Update the cost display
        costDisplay.textContent = `Estimated Cost = $${finalCost.toFixed(2)}`;
    };

    // Add event listeners to update cost dynamically
    [location, duration, hairMakeup, attire].forEach((element) => {
        element.addEventListener('input', calculateCost);
    });
});
