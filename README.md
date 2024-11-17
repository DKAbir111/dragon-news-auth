# Dragon News 📰

**Dragon News** is a modern news platform built with React and powered by Firebase. The app provides categorized news, ensuring users stay updated with the latest events in various fields.

## Features

- 📰 **Dynamic News Categories:** View news articles by category.
- 🔥 **Firebase Integration:** Authentication and hosting are seamlessly handled via Firebase.
- ⚡ **Fast Performance:** Built using Vite for rapid development and blazing-fast loading.
- 🎨 **Responsive Design:** Accessible across devices with a sleek, modern UI.

## Tech Stack

- **Frontend:** React, Vite
- **Backend Services:** Firebase (Authentication, Hosting, and Firestore Database)
- **Styling:** Tailwind CSS (if used) / CSS Modules
- **Deployment:** Firebase Hosting

## Firebase Setup

1. Set up a Firebase project [here](https://firebase.google.com/).
2. Add your Firebase configuration to a `.env` file in the root directory:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. Use the Firebase SDK for authentication and Firestore to fetch news data.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.

## Live Demo

Check out the live project [here](https://dragon-news-auth-b3019.web.app/category/01).

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any improvements.
