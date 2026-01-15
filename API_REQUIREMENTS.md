# TrackMyAds API Requirements

This document outlines the required API endpoints to support the frontend functionality of the TrackMyAds website.

## Base URL
All API requests should be prefixed with `/api/v1` (or similar versioning).

---

## Authentication

### 1. Login
*   **Endpoint:** `POST /auth/login`
*   **Description:** Authenticates a user and returns a session token.
*   **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```
*   **Response (Success - 200):**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "123",
        "email": "user@example.com",
        "firstName": "John",
        "lastName": "Doe"
      }
    }
    ```
*   **Response (Error - 401):**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

### 2. Sign Up
*   **Endpoint:** `POST /auth/signup`
*   **Description:** Registers a new user.
*   **Request Body:**
    ```json
    {
      "workEmail": "user@company.com",
      "firstName": "John",
      "lastName": "Doe",
      "companyName": "Tech Corp"
    }
    ```
*   **Response (Success - 201):**
    ```json
    {
      "message": "Account created successfully. Please check your email for verification.",
      "userId": "123"
    }
    ```

---

## Forms & User Interaction

### 3. Contact Us
*   **Endpoint:** `POST /contact`
*   **Description:** Submits a contact form message.
*   **Request Body:**
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "message": "I would like to know more about pricing."
    }
    ```
*   **Response (Success - 200):**
    ```json
    {
      "message": "Message sent successfully."
    }
    ```

### 4. Abuse Report
*   **Endpoint:** `POST /abuse-report`
*   **Description:** Submits an abuse report.
*   **Request Body:** (Multipart/form-data recommended if file upload is supported)
    *   `name`: "John Doe"
    *   `email`: "john@example.com"
    *   `abuseType`: "Spam / Phishing" (Enum: Spam, Malware, Copyright, Prohibited, Other)
    *   `violatingUrl`: "https://suspicious-link.com"
    *   `details`: "Description of the issue"
    *   `attachment`: (Binary file, optional)
*   **Response (Success - 200):**
    ```json
    {
      "reportId": "AB-12345",
      "message": "Report submitted successfully."
    }
    ```

### 5. Request Demo (Optional/Specific)
*   **Endpoint:** `POST /request-demo`
*   **Description:** If distinct from Contact Us, for scheduling demos.
*   **Request Body:**
    ```json
    {
      "email": "user@company.com",
      "name": "John Doe",
      "company": "Company Ltd",
      "phone": "+1234567890" // if added later
    }
    ```

---

## Dynamic Content

### 6. Get Blog Posts
*   **Endpoint:** `GET /blogs`
*   **Query Params:**
    *   `page`: 1 (Default)
    *   `limit`: 10 (Default)
    *   `category`: "Industry Trends" (Optional filter)
*   **Response (Success - 200):**
    ```json
    {
      "data": [
        {
          "id": "1",
          "title": "The Future of Affiliate Marketing",
          "excerpt": "Brief summary...",
          "author": "Sarah Johnson",
          "date": "2023-10-15",
          "category": "Industry Trends",
          "imageUrl": "https://example.com/image.jpg",
          "slug": "future-of-affiliate-marketing"
        }
      ],
      "meta": {
        "total": 50,
        "page": 1,
        "lastPage": 5
      }
    }
    ```

### 7. Get Single Blog Post
*   **Endpoint:** `GET /blogs/:slug`
*   **Description:** Fetch full details of a blog post.
*   **Response (Success - 200):**
    ```json
    {
      "id": "1",
      "title": "The Future of Affiliate Marketing",
      "content": "<p>Full HTML content or markdown...</p>",
      "author": { "name": "Sarah Johnson", "avatar": "..." },
      "date": "2023-10-15",
      "tags": ["Trends", "2024"]
    }
    ```

### 8. Case Studies (Optional)
*   **Endpoint:** `GET /case-studies`
*   **Response:** Similar structure to Blogs.

---

## Global configurations (Optional)
### 9. Feature Flags / Config
*   **Endpoint:** `GET /config`
*   **Description:** Returns dynamic settings like enabled features, maintenance mode, etc.
