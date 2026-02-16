# Project Blueprint

## Overview

A multifaceted web application that includes a Lotto Number Generator, a Pet Face Test, a partnership inquiry form, and a comments section. The application is built using modern web standards, including Web Components and TensorFlow.js.

## Design and Features

### Lotto Number Generator

*   **Functionality:** Generates 6 unique random numbers between 1 and 45.
*   **Technology:** Implemented as a Web Component.

### Pet Face Test

*   **Functionality:** Classifies a user's uploaded image as either a "dog" or a "cat" face, based on a trained Teachable Machine model.
*   **Technology:**
    *   TensorFlow.js and the Teachable Machine Image library for model loading and prediction.
    *   The model is loaded from `https://teachablemachine.withgoogle.com/models/K6Im9VGeV/`.
*   **User Interaction:**
    *   The user selects an image file using a file input.
    *   A preview of the selected image is displayed.
    *   The model automatically runs a prediction on the uploaded image.
*   **Bug Fix:**
    *   **Issue:** The prediction results were the same for all images because the prediction was running before the new image was fully rendered.
    *   **Solution:** The `predict()` function is now called in the `onload` event of the preview image, ensuring the model runs on the fully loaded image.
*   **Styling:** The image preview and prediction labels are styled to integrate with the overall design.

### Partnership Inquiry Form

*   **Functionality:** Provides a contact form for users to send partnership inquiries.
*   **Technology:** Integrated with Formspree.
*   **Fields:** Includes fields for Name, Email, and Message.

### Comments Section

*   **Functionality:** Provides a comments section for user discussions.
*   **Technology:** Integrated with Disqus.
*   **Configuration:** Uses the Disqus shortname `jtjtjtj`.
