# Surgical Appointments Management

This is a **Next.js** application for managing surgical appointments, where users can:

- Create doctors, staff members, and events (appointments).
- View the appointments in a calendar.
- Update appointments via a popup dialog.

The application is built using **React**, **Tailwind CSS**, **React Big Calendar**, **PostgreSQL**, and **Server Actions**.

---

## Features

- **Create Doctors & Staff**: Users can fill out a form to add doctors or staff members to the database.
- **Create Events**: Users can schedule surgical appointments by filling out a form.
- **Calendar View**: Users can view the appointments in a calendar using **React Big Calendar**.
- **Edit Events**: Users can update event details via a pop-up dialog.
- **No Seed Script**: Data is dynamically created by users via the UI.

---

## Tech Stack

- **Next.js** (React Framework)
- **Tailwind CSS** (for styling)
- **React Big Calendar** (for displaying events in a calendar view)
- **PostgreSQL** (for the database)
- **Server Actions** (for creating and updating data)
- **Docker** (PostGreSql container)

---

## Project Structure

Here’s an of the folder structure:
/src
├── /app
│ ├── /actions # API routes for data fetching and actions
│ ├── /calendar # Calendar view for displaying events
│ ├── /fonts # Fonts for the app
│ ├── /insert-events # Page and components for adding events
│ ├── /globalcss # Global styles, including Tailwind
│ ├── /layout # Layout component
│ ├── /page # Pages (e.g., Home, Doctors, etc.)
│ ├── /components # Reusable components (e.g., forms, buttons)
│ ├── /db # Database queries and connection
│ ├── /lib # Utility functions and helpers
│ ├── /public # Static assets
│ ├── /styles # Styles (CSS)
├── /package.json
├── /next.config.js
├── .env
└── tailwind.config.js


---

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/guitarbuju/surgical-appointments.git
cd surgical-appointments

2. Install Dependencies
Install the necessary dependencies:
npm install
3. Configure the Database
Ensure PostgreSQL is installed and running. Create a .env file in the root directory and add your PostgreSQL connection string:
or use docker 'docker-compose up'


cp .env.example .env
Update the .env file with your PostgreSQL connection details:

env
example:DATABASE_URL=postgresql://username:password@localhost:5432/surgical_appointments

4. Create Database Tables
Run the initDb script to create dB and the necessary tables:


npm run initDb
This will create tables for doctors, patients, and appointments in your PostgreSQL database.

5. Start the Development Server
Now, you can start the development server:

npm run dev
The app will be accessible at http://localhost:3000.

Application Flow
1. Create Doctors and Staff
To create doctors and staff:

Go to the "Doctors & Staff" page at /doctors (or /staff if you have a separate staff page).

Fill out the form with the doctor's details (e.g., name, specialty) and submit it.

The doctor will be added to the database and available for event creation.

2. Create Events (Appointments)
To create an event:

Click the "Insert Event" button in the navbar to navigate to the event creation form (/insert-events).

Select the doctor, patient, and the appointment time.

Submit the form to create the event and save it to the database.

3. View Calendar
To view the events on the calendar:

Navigate to the "Calendar" page at /calendar.

You will see all the appointments scheduled.

Clicking on a calendar event will open a popup dialog for updating the appointment details.

4. Update Events (Appointments)
To update an event:

Click on an appointment in the calendar.

A popup will appear with the details of the event.

You can update the start and finish time or patient details.

Click Save Changes to update the appointment.

