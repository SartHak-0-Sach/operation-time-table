# SurgiPlan PRO ⛑️🏥

## Table of Contents 📑

1. [Overview](#overview)
2. [Features 🌟](#features-)
3. [File Structure 📁](#file-structure-)
4. [Technologies Used 🛠️](#technologies-used-)
5. [Getting Started 🚀](#getting-started-)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
6. [Usage 📘](#usage-)
7. [Priority Queue Algorithm Explanation 🔍](#priority-queue-algorithm-explanation-)
8. [Contributions 🤝](#contributions-)
9. [License 📄](#license-)
10. [Acknowledgements 🙏](#acknowledgements-)

## Overview

**SurgiPlan PRO** is a comprehensive hospital management system designed as both a web application and mobile app. The project includes standard features such as **user authentication** (login and signup), **patient and doctor management**, and a unique feature—**operation timetable scheduling**—implemented using a **priority queue algorithm in JavaScript**. This innovative approach allows for the efficient scheduling of surgeries based on urgency and priority.

## Features 🌟

- **User Authentication**:
  - Secure login and signup for patients, doctors, and administrators.
- **User Roles**:
  - **Admin**: Manage users, operation schedules, and overall hospital data.
  - **Doctor**: View and update patient records, manage personal schedule, etc.
  - **Patient**: Access personal records, book appointments, and view schedules.
- **Operation Time Table**:
  - Implemented using a **priority queue algorithm** to ensure surgeries are scheduled based on urgency.
- **Patient Management**:
  - Record patient information, update medical history, and track treatment plans.
- **Doctor Dashboard**:
  - Personal schedule management, operation calendar, and patient appointments.
- **Notifications**:
  - Real-time notifications for appointment reminders and operation schedule updates.
- **Mobile and Web Compatibility**:
  - A responsive design for seamless use on both web browsers and mobile devices.

## File Structure 📁

```
/root-directory
|-- public/                       # Public assets for the application
|   |-- images/                   # Image assets
|
|-- src/                          # Main source code
|   |-- components/               # React components for the UI
|   |   |-- Auth/                 # Components for login and signup
|   |   |-- Dashboard/            # Main dashboard components for users
|   |   |-- OperationScheduler/   # Components for operation scheduling feature
|   |
|   |-- context/                  # Context for global state management
|   |   |-- AuthContext.tsx       # Context for authentication state
|   |   |-- OperationContext.tsx  # Context for scheduling operations
|   |
|   |-- hooks/                    # Custom React hooks
|   |   |-- useAuth.tsx           # Hook for managing authentication
|   |   |-- usePriorityQueue.tsx  # Hook for priority queue logic
|   |
|   |-- lib/                      # Library for core functions
|   |   |-- algorithms/           # Algorithms used in the project
|   |       |-- priorityQueue.ts  # Priority queue algorithm for operation scheduling
|   |
|   |-- pages/                    # Page components for routing
|       |-- Login.tsx             # Login page
|       |-- Signup.tsx            # Signup page
|       |-- Dashboard.tsx         # Dashboard page
|       |-- OperationSchedule.tsx # Operation schedule page
|       |-- Profile.tsx           # User profile page
|
|-- App.tsx                       # Main app component
|-- index.css                     # Global CSS styling
|-- main.tsx                      # Main entry point for React
|
|-- .gitignore                    # Files and directories to ignore in Git
|-- LICENSE                       # License for the project
|-- README.md                     # Project description and instructions
|-- package-lock.json             # Lockfile for npm dependencies
|-- package.json                  # Project metadata and npm scripts
|-- tsconfig.json                 # TypeScript configuration
```

## Technologies Used 🛠️

| Technology        | Purpose                                      |
|-------------------|-----------------------------------------------|
| **React**         | Building the user interface                  |
| **TypeScript**    | Ensuring type safety and enhanced development |
| **Node.js**       | Backend server handling and API routes       |
| **Express.js**    | Simplified backend framework                 |
| **MongoDB**       | Database for storing user and hospital data  |
| **Tailwind CSS**  | Styling for responsive and modern design     |
| **JavaScript**    | Priority queue algorithm implementation      |

## Getting Started 🚀

Follow these steps to run the project locally:

### Prerequisites

- Node.js (version 14.x or above recommended)
- npm or yarn
- MongoDB instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/surgiplan-pro.git
   cd surgiplan-pro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your MongoDB URI and other secrets:
   ```env
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000` to view the app.

## Usage 📘

1. **Create an account or log in** with your credentials.
2. **Navigate to the Dashboard** to view personalized information.
3. **Access the Operation Schedule** to see upcoming surgeries and priority cases.
4. **Create or Manage Appointments** from the user dashboard.
5. **Receive notifications** for important updates and reminders.

## Priority Queue Algorithm Explanation 🔍

The **operation scheduling feature** uses a **priority queue algorithm** implemented in JavaScript to ensure that surgeries are scheduled based on urgency. This ensures that high-priority surgeries are attended to first while maintaining an organized timetable.

## Contributions 🤝

Contributions are welcome! If you find any bugs, have suggestions, or would like to add new features, feel free to open an issue or submit a pull request.

## License 📄

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgements 🙏

Special thanks to the open-source community and developers whose contributions made this project possible.

**Experience seamless hospital management with SurgiPlan PRO!** 🏥✨
