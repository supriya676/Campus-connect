# CampusConnect – Student Management Portal

## Run the project
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open the terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## Routes
- `/` Home page
- `/login` Login page (demo login redirects to dashboard)
- `/dashboard` Dashboard
- `/students` Student listing with search and department filter
- `/students/1` Student details (also supports IDs 2, 3 and 4)
- `/courses` Course listing
- `/courses/1` Course details (also supports IDs 2, 3 and 4)
- `/assignments` Assignment management; Submit changes status in the UI
- `/profile` Student profile
- `/settings` Notification and appearance settings

## Notes
- This is a frontend assessment project with static/dummy data.
- Login is a UI demonstration only; it does not authenticate users.
- Assignment submission updates the page state only; no backend or file upload is connected.
- Styling is in `app/globals.css`; sample data is in `data.js`.
