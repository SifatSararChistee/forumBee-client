# ForumBee

An interactive online platform where users can engage in meaningful discussions, post content, comment, and interact with a community.

---

## Purpose

ForumBee is a feature-rich platform designed to encourage community discussions and collaborations. Built using the MERN stack, it offers functionality for both general users and administrators with a focus on usability, scalability, and aesthetics.

---

## Live Demo

🔗 **[Visit ForumBee Live](https://thread-hive-a530f.web.app)**

---

## Key Features

### General Features:

1. **Homepage**:

   - Dynamic Navbar with Login/Profile integration.
   - Search functionality based on post tags (backend implemented).
   - Announcement section.
   - Tag section for filtering posts.
   - Posts sorted by date or popularity (based on upvotes and downvotes).
   - Pagination.

2. **Post Details**:

   - Author details, title, description, tags, time, and voting.
   - Comment section (for logged-in users).
   - Share posts using `react-share`.

3. **Membership Page**:

   - Subscription option to become a premium member with a Gold badge.
   - Extended posting privileges for members.

4. **User Dashboard**:

   - Routes: **My Profile**, **Add Post**, and **My Posts**.
   - **My Profile**: Shows badges (Bronze/Gold) and recent posts.
   - **Add Post**: Form to add posts with tag dropdown. Limits normal users to 5 posts.
   - **My Posts**: Displays all user posts with voting, commenting, and deletion options.

5. **Admin Dashboard**:
   - Manage users, announcements, and reported comments.
   - Tag management and profile statistics.
   - Advanced functionality like making users admin and handling reported content.

---

## Tech Stack

### Frontend:

- React (`^18.3.1`)
- Tailwind CSS (`^3.4.17`)
- DaisyUI (`^4.12.23`)
- React Router Dom (`^7.1.1`)

### Backend:

- Express.js
- MongoDB
- Node.js

### Libraries & Tools:

- `axios` (`^1.7.9`) – API integration.
- `@tanstack/react-query` (`^5.64.1`) – Efficient state management.
- `react-select` (`^5.9.0`) – Tag dropdowns.
- `react-chartjs-2` (`^5.3.0`) & `chart.js` (`^4.4.7`) – Charts for statistics.
- `firebase` (`^11.1.0`) – Authentication.
- `react-hook-form` (`^7.54.2`) – Form management.
- `react-hot-toast` (`^2.5.1`) – Toast notifications.
- `react-modal` (`^3.16.3`) – Modals.
- `react-share` (`^5.1.2`) – Social sharing.
- `lottie-react` (`^2.4.0`) – Animations.

---

## Installation

### Prerequisites:

1. Node.js and npm installed.
2. MongoDB database setup.

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sifatsararchistee/ForumBee.git
   cd ForumBee
   ```
