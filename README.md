# 🇪🇬 Smart Egypt Explorer - Management Dashboard

A comprehensive multi-role management system (Admin & Business Owner Dashboard) dedicated to the Egyptian tourism sector. The system allows Administrators to vet and manage service providers, while Business Owners can manage their services, profile details, and documents.

---

## 🖼️ Media & Assets (Screenshots)

### 📸 Interface Previews
The following table highlights the core views of the system:

| View | Description | Asset Path |
| :--- | :--- | :--- |
| **Login** | Secure authentication gateway | `src/assets/screenshots/login.png` |
| **Registration Step 1** | Primary account information & credentials | `src/assets/screenshots/CreateAccountOne.png` |
| **Registration Step 2** | Document & License upload phase | `src/assets/screenshots/CreateAccountTwo.png` |
| **Verify Code** | OTP verification for password recovery | `src/assets/screenshots/VerifyCode.png` |
| **Admin Requests** | Management portal for reviewing pending entities | `src/assets/screenshots/Res.png` / `Tour.png` |
| **Responsive Design** | Mobile & Tablet optimization | `src/assets/screenshots/Responsive.png` |

### 🎨 Digital Assets
| Element | Purpose | Path |
| :--- | :--- | :--- |
| **Logo** | Official platform branding | `src/assets/icons/logo.png` |
| **Egypt Key** | "Ankh" icon used for cultural branding | `src/assets/icons/egypt_key.png` |
| **Auth BG** | Hero background for authentication pages | `src/assets/images/login.png` |

---

## 🚀 Key Features

### 1. Administrator Dashboard
*   **Request Moderation:** Approve or Reject pending requests from Restaurants, Hotels, and Tour Guides.
*   **Live Content Management:** Toggle visibility (Hide) or permanently delete active establishments.
*   **Document Viewer:** In-app Modal for viewing licenses/CVs and downloading professional PDFs for Tour Guides.

### 2. Business Owner Dashboard
*   **Service Management (CRUD):** Add, view, and update services including titles, descriptions, pricing, and imagery.
*   **Business Profile:** Manage establishment data, including geo-coordinates (Latitude & Longitude).
*   **Status Tracking:** Real-time feedback on whether the business is "Pending," "Accepted," or "Rejected."

### 3. Authentication & Security
*   Two-step registration to separate identity verification from business documentation.
*   Full "Forgot Password" flow (Email -> OTP -> Reset).
*   Persistent sessions via "Remember Me" and protected routing.

---

## 🛠️ Tech Stack

*   **Core:** [React.js](https://reactjs.org/) (Vite)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Navigation:** [React Router DOM](https://reactrouter.com/) (State management via URL parameters).
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Hi, Md, Ai libraries).
*   **State Management:** React Context API & Custom Hooks.

---

## 📂 Project Structure

```bash
src/
├── api/                  # Modular API definitions (Admin, Auth, Owner)
├── assets/               # Images, Icons, and System Screenshots
├── components/
│   ├── layouts/          # Wrapper templates (AdminLayout, LoginLayout)
│   └── UI/               # Reusable atomic components (Cards, Sidebar, Forms)
├── context/              # Global state (AuthContext, User Permissions)
└── ...
