
#  Task Manager App (Full Stack)

A simple task manager built using **Next.js (React)** for frontend and **Express.js** for backend REST API.

---

##  Features
- Create, view, update, and delete tasks
- Toggle completion
- Real-time updates after each action

---

##  Project Structure

```
task-manager/
├── client/   # Next.js frontend
├── server/   # Express backend
```

---

## 🔧 Setup Instructions

###  Clone the repo
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

###  Install Dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

---

###  Start the app

#### Start Backend (port 3001)
```bash
cd ../server
node index.js
```

#### Start Frontend (port 3000)
```bash
cd ../client
npm run dev
```

---

##  API Endpoints

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/tasks`         | Get all tasks       |
| POST   | `/tasks`         | Add a task          |
| PUT    | `/tasks/:id`     | Update task         |
| DELETE | `/tasks/:id`     | Delete task         |

### Sample Payloads

**POST /tasks**
```json
{
  "title": "Buy Groceries",
  "description": "Milk, Bread, Eggs"
}
```

**PUT /tasks/:id**
```json
{
  "completed": true
}
```

**Response Example:**
```json
{ "message": "Task updated successfully" }
```

---

## 📸 Screenshot

![Task Manager UI](https://via.placeholder.com/600x300?text=Task+Manager+UI)

---

##  Future Improvements
- Add database (MongoDB)
- User authentication
- Filters/sorting
