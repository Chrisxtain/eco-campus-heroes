# Welcome to your Lovable project

## Project info

**URL**: https://ecocampus.netlify.app/

**About**
A web application developed using React and Typescript to promote effective campus waste management in Nigerian universities. The app offers AI-powered waste classification, gamification rewards, offline support, real-time bin monitoring, and a dedicated admin dashboard — all while remaining lightweight and accessible to users of varying literacy levels.

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🌟 Features

### 1. 🧭 User Interface
- 4-tab layout:
  - **Home**: View bin status nearby.
  - **Camera**: Scan and classify waste using AI.
  - **Rewards**: Track and redeem points.
  - **Profile**: View and manage user details.
- Large, icon-based buttons designed for low-literacy users.

### 2. 🤖 AI-Based Waste Classification
- Camera-based detection of **paper**, **plastic**, and **organic** materials.
- Lightweight (<5MB) TensorFlow Lite model integration.
- Real-time classification using device camera.

### 3. 🏆 Gamification & Rewards
- Earn **10 points** for each correctly classified and disposed item.
- Points redeemable for **campus coupons** via printable QR codes.
- **Weekly department leaderboard** to encourage participation.

### 4. 🌐 Offline Support
- Stores up to **50 offline transactions** for later synchronization.
- Supports **USSD shortcode** `*123#` for basic functionality in no-internet zones.

### 5. 🗑 Bin Monitoring
- Detects and displays the **3 nearest waste bins** with real-time fill levels:  
  `Empty`, `Half-full`, `Full`.
- Sends **notifications** when a bin reaches **80% capacity**.

### 6. 👩‍💼 Admin Dashboard
- Secure **Admin login**.
- View daily waste statistics, department breakdowns.
- Automatically generated PDF reports (Firebase integration).
