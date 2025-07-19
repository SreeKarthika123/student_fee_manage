Student Fee Management System


Overview
A full-stack web application where students can log in, view/update their profile, and mark their fee payment status.
The system includes a mock payment simulation with options like UPI, Transaction ID, and Net Banking.

Features
Navigation Bar
Contains All Students and Profile tabs.

All Students Page
Displays a list of students with:

Name

Email

Fees Paid Status (Yes/No)

When a student pays their fees from the Profile page, the status is updated here automatically.

Profile Page
Login/Signup with JWT-based authentication.

View and edit Name and Email.

View current Fee Payment Status.

Pay Fees Button (shown if fees are not paid):

Opens a mock payment page to fill in details (UPI ID, Transaction ID, Net Banking).

On clicking "Pay Now", payment is simulated, and the status updates to Yes.

Status is reflected in both Profile and All Students pages.

Tech Stack
Backend: Node.js, Express, MongoDB.

Frontend: React (responsive design).
Setup
1. Clone Repo
cd student-fee-management
2. Backend
cd backend
npm install
Start server:
npm start
3. Frontend 
cd frontend
npm install
npm start

ScreenShots Of App:
<img width="1918" height="895" alt="image" src="https://github.com/user-attachments/assets/2028d79f-cd0d-44a8-89c8-138636c881fe" />
<img width="1918" height="936" alt="image" src="https://github.com/user-attachments/assets/1581352e-53b5-4ffd-b076-fa23cfdfa0db" />
<img width="1918" height="922" alt="image" src="https://github.com/user-attachments/assets/c9411c51-e8fc-4f74-9eed-7c7b22ad9bd7" />
<img width="1915" height="947" alt="image" src="https://github.com/user-attachments/assets/a01a5ffb-b76b-4810-9955-0dd87a8224f0" />
<img width="1918" height="925" alt="image" src="https://github.com/user-attachments/assets/be7f403e-672e-4894-a77d-12b1d577d59b" />
<img width="1918" height="962" alt="image" src="https://github.com/user-attachments/assets/5bebc5d3-6d00-4acb-805a-efbba9b0e74c" />

<img width="1918" height="928" alt="image" src="https://github.com/user-attachments/assets/1ce6ddfa-26e2-4f3d-8684-f9040584570a" />

<img width="1919" height="932" alt="image" src="https://github.com/user-attachments/assets/2034c8d9-fc8f-4114-ab08-f596b5f89779" />








