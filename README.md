#  Team Task Manager - Full Stack Application

**Developed by:** Siddharth Sharma


A comprehensive full-stack web application for managing projects and tasks with role-based access control, JWT authentication, and real-time task tracking.

---

##  Assignment Overview

**Assignment:** Team Task Manager (Full-Stack)  
**Objective:** Build a web app where users can create projects, assign tasks, and track progress with role-based access (Admin/Member).

###  Key Requirements Met
✅ Authentication (Signup/Login with JWT)  
✅ Project & team management  
✅ Task creation, assignment & status tracking  
✅ Dashboard with statistics (total, completed, pending, overdue tasks)  
✅ REST APIs with proper database relationships  
✅ Comprehensive validations  
✅ Role-based access control (Admin/Member permissions)

---

##  Tech Stack

### Backend
- **Framework:** .NET 8 Web API
- **Database:** SQLite (Local file-based)
- **Authentication:** JWT (JSON Web Tokens)
- **ORM:** Entity Framework Core
- **API Documentation:** Swagger/OpenAPI

### Frontend
- **Framework:** Angular (Latest with Standalone Components)
- **HTTP Client:** Axios (Promise-based)
- **Styling:** Tailwind CSS
- **State Management:** RxJS Observables
- **Authentication:** JWT stored in localStorage

---

## 📁 Project Structure

```
Ethara-Test/
├── TeamTaskManagerApi/                 # .NET 8 Backend
│   ├── Controllers/
│   │   ├── AuthController.cs          # Login, Signup, Token refresh
│   │   ├── ProjectsController.cs      # Project CRUD & member management
│   │   ├── TasksController.cs         # Task CRUD & status updates
│   │   └── DashboardController.cs     # Stats & analytics
│   ├── Models/
│   │   ├── User.cs
│   │   ├── Project.cs
│   │   ├── TaskItem.cs
│   │   └── ProjectMember.cs
│   ├── Services/
│   │   ├── AuthService.cs
│   │   ├── ProjectService.cs
│   │   ├── TaskService.cs
│   │   └── Implementations
│   ├── Data/
│   │   ├── ApplicationDbContext.cs
│   │   └── DatabaseSeeder.cs          # Demo data (3 projects, 12 tasks)
│   ├── Properties/
│   │   └── launchSettings.json         # Port 5175
│   └── teamtaskmanager.db             # SQLite Database
│
└── src/app/                            # Angular Frontend
    ├── pages/
    │   ├── login/
    │   ├── signup/
    │   ├── dashboard/
    │   ├── projects/
    │   └── tasks/
    ├── services/
    │   ├── api.service.ts
    │   ├── auth.service.ts
    │   ├── project.service.ts
    │   ├── task.service.ts
    │   └── dashboard.service.ts
    ├── models/
    │   ├── auth.model.ts
    │   ├── project.model.ts
    │   └── task.model.ts
    ├── shared/
    │   └── auth.guard.ts
    ├── app.routes.ts
    └── app.config.ts
```

---

##  Getting Started

### Prerequisites
- .NET 8 SDK installed
- Node.js 18+ with npm
- Angular CLI 21+

### Step 1: Start the Backend

```bash
# Navigate to backend folder
cd TeamTaskManagerApi

# Run the backend server
dotnet run
```

**Backend URL:** `https://ethara-backend-cwcqbkajg5dphpcy.centralindia-01.azurewebsites.net`  
**Swagger API Docs:** `https://ethara-backend-cwcqbkajg5dphpcy.centralindia-01.azurewebsites.net/swagger/index.html`

### Step 2: Start the Frontend

```bash
# In a new terminal, navigate to root directory
cd b:\OneDrive - Amity University\Desktop\Ethara\Test-Ethara\Ethara-Test

# Install dependencies (if needed)
npm install

# Start Angular development server
ng serve
```

**Frontend URL:** `https://ethara-test.vercel.app/`

---

##  Demo Credentials

### Admin Account
- **Email:** `admin@teamtaskmanager.com`
- **Password:** `Admin@123`
- **Role:** Admin (Can create projects, assign tasks, manage team)

### Member Account
- **Email:** `member@teamtaskmanager.com`
- **Password:** `Member@123`
- **Role:** Member (Can view projects and update assigned tasks)

---

## ✨ Implemented Features

### 1️⃣ Authentication System
- User Signup with validation
- Secure Login with JWT token generation
- Automatic token storage in localStorage
- Protected routes with Auth Guard
- Role-based redirect (Admin vs Member)
- Logout functionality

### 2️⃣ Project Management
- Create new projects (Admin only)
- View all projects with descriptions
- Add team members to projects (Admin)
- Project filtering and search
- Project-specific task viewing in modal

### 3️⃣ Task Management
- Create tasks with assignment and due dates
- View all tasks or project-specific tasks
- Update task status (Pending → In Progress → Completed)
- Filter tasks by status
- Mark tasks as completed with timestamp
- Overdue task detection

### 4️⃣ Dashboard
- **Total Tasks:** Count of all tasks
- **Completed Tasks:** Tasks marked as done
- **Pending Tasks:** Tasks not started
- **In Progress Tasks:** Tasks currently being worked on
- **Overdue Tasks:** Tasks past due date
- Real-time statistics updates

### 5️⃣ Role-Based Access Control
**Admin Privileges:**
- Create new projects
- Add team members
- Create and assign tasks to team members
- View all tasks and projects
- Manage project details

**Member Privileges:**
- View assigned projects
- View and filter tasks
- Update status of assigned tasks
- View dashboard statistics

### 6️⃣ Demo Data
Automatically seeded on first run:
- **3 Projects:**
  - Website Redesign
  - Mobile App Development
  - API Integration
  
- **12 Demo Tasks** with varied statuses:
  - 4 Completed tasks
  - 5 Pending tasks
  - 3 In Progress tasks
  - 2 Overdue tasks

---

##  API Endpoints

### Authentication
```
POST   /api/auth/login              # User login
POST   /api/auth/register           # User signup
POST   /api/auth/refresh            # Refresh token
```

### Projects
```
GET    /api/projects                # Get user's projects
POST   /api/projects                # Create new project
GET    /api/projects/{id}           # Get project details
POST   /api/projects/{id}/members   # Add member to project
GET    /api/projects/{id}/members   # Get project members
```

### Tasks
```
GET    /api/tasks                   # Get all tasks (role-based)
GET    /api/tasks/project/{id}      # Get tasks by project
GET    /api/tasks/{id}              # Get task details
POST   /api/tasks                   # Create new task
PATCH  /api/tasks/{id}/status       # Update task status
```

### Dashboard
```
GET    /api/dashboard               # Get dashboard statistics
```

---

##  UI Features

### Responsive Design
- Mobile-friendly Tailwind CSS styling
- Adaptive layouts for all screen sizes
- Smooth transitions and hover effects

### Modal System
- Project tasks view in popup modal
- Close button and backdrop click to dismiss
- Smooth animations

### Loading States
- Loading spinners on data fetch
- Error messages with proper styling
- Immediate UI updates with ChangeDetectorRef

### Color-Coded Status
- 🟢 **Green:** Completed tasks
- 🔵 **Blue:** In Progress tasks
- 🟡 **Yellow:** Pending tasks
- ⚫ **Gray:** Other statuses

---

## 🔐 Security Features

✅ **JWT Authentication:** Secure token-based auth  
✅ **Role-Based Authorization:** Admin/Member permissions  
✅ **Route Guards:** Protected endpoints  
✅ **Password Hashing:** Secure password storage  
✅ **CORS Enabled:** Cross-origin requests handled  
✅ **Bearer Token Injection:** Automatic token in API requests

---

##  Deployment

### Live Deployment
- **Frontend:** [https://ethara-test.vercel.app/](https://ethara-test.vercel.app/)
- **Backend API & Swagger:** [https://ethara-backend-cwcqbkajg5dphpcy.centralindia-01.azurewebsites.net/swagger/index.html](https://ethara-backend-cwcqbkajg5dphpcy.centralindia-01.azurewebsites.net/swagger/index.html)

---

##  Testing the Application

### 1. Login
1. Go to `https://ethara-test.vercel.app/login`
2. Enter admin credentials
3. Click "Login"

### 2. View Dashboard
- See statistics: Total, Completed, Pending, In Progress, Overdue tasks
- Data loads immediately on first click

### 3. Browse Projects
- Navigate to "Projects" section
- View all 3 demo projects
- Click "View Tasks" to see project-specific tasks in modal

**Test on Deployed Application:** [https://ethara-test.vercel.app/projects](https://ethara-test.vercel.app/projects)

### 4. Manage Tasks
- Go to "Tasks" section
- Filter tasks by status (All, Pending, In Progress, Completed)
- Update task status (Member can mark as In Progress/Completed)
- Create new tasks (Admin only)

### 5. Switch Roles
- Logout and login with member account
- Observe different UI (no create/add buttons)
- View only assigned tasks

---


##  Database Schema

### Users Table
- Id (GUID)
- Email (Unique)
- Name
- PasswordHash
- Role (Admin/Member)
- CreatedAt

### Projects Table
- Id (GUID)
- Name
- Description
- CreatedById (FK to Users)
- CreatedAt

### TaskItems Table
- Id (GUID)
- Title
- Description
- Status (Pending/InProgress/Completed)
- DueDate
- ProjectId (FK to Projects)
- AssignedToId (FK to Users, nullable)
- CreatedAt
- CompletedAt (nullable)

### ProjectMembers Table
- Id (GUID)
- ProjectId (FK to Projects)
- UserId (FK to Users)
- AddedAt

---

##  Performance Optimizations

✅ Standalone Angular components (no NgModule overhead)  
✅ ChangeDetectorRef for immediate UI updates  
✅ Lazy loading of routes  
✅ Efficient data filtering on client-side  
✅ SQLite in-memory caching with EF Core  
✅ JWT token caching in localStorage
