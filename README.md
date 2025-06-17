
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

##  Future Improvements
- Add database (MongoDB)
- User authentication
- Filters/sorting

### ✅ Why did you choose this project structure?

I split the project into two folders: `client/` for the frontend (Next.js + Tailwind) and `server/` for the backend (Express). This just felt like the cleanest way to separate concerns — it keeps everything modular and easier to manage.

Having them in their own spaces means I can work on the frontend UI without worrying about backend logic breaking things, and vice versa. Plus, it makes scaling or even deploying them independently a lot simpler down the line. If someone else joins the project, they can jump into either side without too much context-switching.

---

### ✅ How did you separate frontend and backend concerns?

The frontend is pretty much focused on the user experience — rendering the tasks, handling forms, and calling APIs using `axios`. It doesn’t mess with business logic or try to manage the state of tasks itself. Everything comes through HTTP calls.

The backend (Express) takes care of everything under the hood: storing tasks, validating data, and handling CRUD logic. For example, when a user adds a task, the frontend just sends the input to the server, and the server decides what to do with it. Keeping that boundary clean really helps keep bugs and confusion to a minimum.

---

### ✅ How would you handle errors and edge cases?

**On the frontend:**

* I’d wrap API calls in `try/catch` blocks so users get a friendly message if something fails instead of a blank screen.
* Also, simple validation — like requiring a title before submitting a task — helps catch issues early.
* I'd probably disable the "Add" button while a request is in progress too, just to prevent duplicate submissions.

**On the backend:**

* I’d use `express-validator` or a similar library to make sure incoming data is clean.
* Also planning to return proper HTTP status codes — like `400` for bad input or `404` for missing tasks — so the frontend knows how to respond.
* I’d also throw in centralized error handling middleware to avoid repeating `try/catch` everywhere.

**Edge cases I'd handle:**

* Blocking tasks with empty or duplicate titles.
* Returning a 404 if someone tries to update/delete a task that doesn’t exist.
* Gracefully handling things like network failures or the server being down.

---

### ✅ What security features would you add in production?

Some of the key things I’d set up:

* **CORS**: Right now it's open, but I’d lock it down to only allow requests from my frontend domain.
* **Rate Limiting**: Adding something like `express-rate-limit` to stop bots or malicious spam.
* **Helmet**: It’s a quick win for setting secure HTTP headers against common attacks.
* **Input Validation/Sanitization**: Making sure no one sends malicious scripts or junk into the system.
* **HTTPS**: Definitely needed for secure communication once deployed.
* If I were supporting multiple users:

  * I’d use JWTs or sessions for authentication
  * Probably add role-based access so only certain users can modify/delete things

---

### ✅ What would you improve if you had 1 full day?

**1. Persistent Storage**
I’d swap out the in-memory task list for a real database — probably PostgreSQL — using Prisma or Sequelize. Also, I'd move away from using timestamps as IDs and generate proper UUIDs.

**2. Auth System**
I’d build a simple login/signup system with hashed passwords (probably using `bcrypt`). That would make it ready for multi-user support.

**3. Better UX**
A few things I’d improve on the interface:

* Add filters (e.g., show only completed tasks)
* Inline task editing so users don’t have to delete and re-add
* Loading spinners or some status text so people know what’s happening

**4. Deployment**
I’d get the frontend live on Vercel and use something like Render or Railway for the backend. That way, it’s fully accessible and shareable.

**5. Testing**
I'd add some basic tests — maybe with Jest for the backend and React Testing Library on the frontend — just to make sure things don’t break when adding features.

