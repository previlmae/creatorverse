# WEB103 Prework - _✨ Creatorverse_

Submitted by: Elvanice Previlma

About this web app: **Creatorverse is a full-stack web application that allows users to discover, showcase, and manage their favorite content creators from platforms like YouTube, Twitch, Instagram, TikTok, and more. Built with React and Supabase, the app features a stunning video hero section and an intuitive card-based interface for managing creator profiles.**

Time spent: **25** hours

## Required Features

The following **required** functionality is completed:

<!-- ✅ Make sure to check off completed functionality below -->

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] **Looping video background** in hero section for modern, professional aesthetic
- [x] **Gradient overlay** on hero section for better text readability
- [x] **Smooth fade-in animations** for hero content
- [x] **Responsive design** that adapts beautifully to mobile, tablet, and desktop
- [x] **Delete confirmation dialogs** to prevent accidental deletions
- [x] **Loading states** with visual indicators during API calls
- [x] **Empty states** with helpful messages when no creators exist
- [x] **Form validation** to ensure required fields are filled
- [x] **Hover effects** on cards for better user interaction
- [x] **Professional footer** with branding

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='https://drive.google.com/file/d/19BmdPGtvWVW-X6DeTH1HSkzp93P651g8/view?usp=drive_linkS' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with LiceCap

## Notes

### Challenges Encountered:

**1. Supabase Row Level Security (RLS)**

- Initially encountered errors when trying to add creators to the database
- Learned that RLS needs to be disabled for public CRUD operations or proper policies must be configured
- Solution: Disabled RLS for the creators table to allow unrestricted access

**2. Video Path Configuration**

- Had issues with the video background not displaying initially
- Discovered that Vite handles public folder paths differently than traditional React apps
- Solution: Used relative path `videos/hero-video.mp4` instead of absolute path `/videos/hero-video.mp4`

**3. React useEffect Dependencies**

- Received warnings about missing dependencies in useEffect hooks
- Learned about proper dependency array management and when to use eslint-disable comments
- Solution: Added eslint-disable comment for dependencies that shouldn't trigger re-renders

**4. JSX Syntax Errors**

- Encountered multiple syntax errors with missing opening tags during development
- Learned the importance of careful copy-pasting and IDE syntax highlighting
- Solution: Used VS Code's built-in error detection and carefully reviewed JSX structure

### Additional Context:

This project was an excellent introduction to full-stack development with React and Supabase. I learned how to:

- Structure a React application with proper component hierarchy
- Implement CRUD operations with a real database
- Handle asynchronous operations with async/await
- Create responsive, professional UI with modern CSS frameworks
- Debug common React and build tool issues
- Work with video backgrounds and advanced CSS techniques

The experience of building this app from scratch gave me confidence in my ability to create production-ready web applications.

## Tech Stack

- **Frontend**: React 18 with Vite
- **Backend/Database**: Supabase (PostgreSQL)
- **Routing**: React Router v6
- **Styling**: Pico CSS
- **Language**: JavaScript (ES6+)

## Project Structure

```
creatorverse/
├── public/
│   └── videos/
│       └── hero-video.mp4
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Card.css
│   ├── pages/
│   │   ├── ShowCreators.jsx
│   │   ├── ShowCreators.css
│   │   ├── ViewCreator.jsx
│   │   ├── ViewCreator.css
│   │   ├── AddCreator.jsx
│   │   ├── EditCreator.jsx
│   │   └── FormPage.css
│   ├── App.jsx
│   ├── App.css
│   ├── client.js
│   └── main.jsx
└── README.md
```

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a Supabase account and project
4. Create a `creators` table with columns: `id`, `name`, `url`, `description`, `imageURL`, `created_at`
5. Add your Supabase credentials to `src/client.js`
6. Run the development server: `npm run dev`

## License

Copyright 2026 Elvanice Previlma

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
