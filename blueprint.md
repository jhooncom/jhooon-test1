# Project Blueprint

## Overview

A simple web application that generates 6 random lotto numbers between 1 and 45. It also includes a partnership inquiry form powered by Formspree and a comments section powered by Disqus. The application is built using modern web standards, including Web Components.

## Design and Features

### Initial Version

*   **Functionality:** Generates 6 unique random numbers between 1 and 45 when a button is clicked.
*   **Technology:** Plain HTML, CSS, and JavaScript with a Web Component for the lotto generator.
*   **Styling:** Minimal styling with a plain background and basic colors.

### Design Refresh

*   **Modernized Look and Feel:**
    *   **Typography:** Uses the "Poppins" font from Google Fonts.
    *   **Color Palette:** Features a vibrant gradient background and a modern color scheme.
    *   **Layout:** Centered content with a card-based design for the main container.
*   **Enhanced User Experience (UX):**
    *   **Animations:** Includes a fade-in animation for the generated numbers.
    *   **Button Hover Effects:** Improved hover effects for interactive buttons.
    *   **Responsive Design:** Ensures the application is responsive across various screen sizes.
*   **Code Refinements:**
    *   **CSS Variables:** Utilizes CSS variables for easy theme customization.
    *   **Encapsulation:** Component-specific styles are encapsulated within the Shadow DOM of the `lotto-generator` component.

### Partnership Inquiry Form

*   **Functionality:** Provides a contact form for users to send partnership inquiries.
*   **Technology:** Integrated with Formspree for handling form submissions to the endpoint `https://formspree.io/f/xjgerklr`.
*   **Fields:** Includes fields for Name, Email, and Message.
*   **Styling:** Styled to be consistent with the overall modern design of the application.

### Comments Section

*   **Functionality:** Provides a comments section for user discussions.
*   **Technology:** Integrated with Disqus using the universal embed code.
*   **Configuration:** Uses the Disqus shortname `jtjtjtj`.
*   **Styling:** Styled to be consistent with the overall design of the application.
