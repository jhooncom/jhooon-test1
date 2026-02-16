# Project Blueprint

## Overview

This project is a simple, visually appealing Lotto Number Generator web application. It allows users to generate a set of unique random numbers for a lottery draw with a single click. The application is built using modern HTML, CSS, and JavaScript, leveraging Web Components for modularity and reusability.

## Implemented Features

*   **UI/UX:**
    *   A clean and modern user interface with a clear title and a prominent "Generate Numbers" button.
    *   A dedicated area to display the generated lottery numbers.
    *   Visually appealing design with a consistent color scheme, custom fonts, and subtle animations.
    *   Responsive design that works on both desktop and mobile devices.

*   **Functionality:**
    *   **Lottery Number Generation:** Generates 6 unique random numbers between 1 and 45.
    *   **Web Component:** The lottery number generator is encapsulated in a `<lotto-generator>` custom element for reusability and maintainability.
    *   **Click to Generate:** Users can generate a new set of numbers by clicking the "Generate Numbers" button.

*   **Styling:**
    *   Modern CSS with custom properties for colors and fonts.
    *   Flexbox for layout and alignment.
    *   Styled buttons and number display for a polished look.
    *   Subtle animations on button press and number generation.

## Current Plan

The current plan is to build the initial version of the Lotto Number Generator application. This involves the following steps:

1.  **Update `index.html`:** Set up the basic structure of the application, including the main container, title, number display area, and the "Generate Numbers" button. The core functionality will be provided by a custom element `<lotto-generator>`.
2.  **Update `style.css`:** Add styles for the overall layout, typography, colors, and the specific components of the lottery generator to create a visually engaging experience.
3.  **Update `main.js`:** Implement the logic for the `<lotto-generator>` Web Component. This includes:
    *   Generating 6 unique random numbers.
    *   Displaying the generated numbers in the UI.
    *   Attaching an event listener to the "Generate Numbers" button to trigger the number generation.
