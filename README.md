# 💼 Profile Card (v1)

This project is a simple **Profile Card** built with **React** — part of my *Frontend Developer Learning Challenges*.  
It displays a developer's profile photo, introduction text, and a list of skills with colorful tags.

---

## 🚀 Project Overview

**Goal:**  
Create a clean, responsive, and visually appealing **Profile Card** component using React concepts such as:
- Component-based architecture
- Props and reusability
- Styling with CSS modules or simple `.css` files
- One-way data flow and separation of concerns

---

## 🧩 Components

### 🖼️ `Avatar.jsx`
Displays the profile image using the imported file from `assets/img`.

```jsx
<img className="avatar" src={avatar} alt="Numonov Islomjon" />
```

### 🧍‍♂️ `Intro.jsx`
Contains the name and a short description/introduction.

```jsx
<h1>Numonov Islomjon</h1>
<p>Hey there! I’m a Front-End Web Developer who loves building cool and creative web experiences...</p>
```

### 🧠 `Skill.jsx`
Reusable component that takes props for:
- `skill` — skill name  
- `emoji` — icon or emoji  
- `color`, `radius`, `padding`, `boxShadow` — styling customization  

```jsx
<Skill skill="React" emoji="💪" color="#125655" />
```

### 🧰 `SkillList.jsx`
Displays multiple `Skill` components inside a flexbox layout.

```jsx
<ul className="skillList">
  <Skill skill="React" emoji="💪" color="#125655" />
  <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
</ul>
```

---

## 🎨 Styling

All styles are written in plain CSS files.  
The app background uses a **linear gradient** for depth and visual balance.

```css
.App {
  text-align: center;
  background: linear-gradient(90deg, rgba(10,72,97,1) 0%, rgba(53,94,63,1) 50%, rgba(10,72,97,1) 100%);
}
```

Each component has its own stylesheet:
- `Avatar.css`
- `Intro.css`
- `SkillList.css`

---

## ⚙️ Technologies Used

- ⚛️ **React** — component-based UI  
- 🎨 **CSS3** — custom styling and layout  
- 💾 **Vite / Create React App** (for setup)

---

## 🧠 Key Concepts Practiced

- JSX and component structure  
- Props and one-way data flow  
- Inline vs. external CSS  
- Component reusability  
- Layout with flexbox  

---

## 📸 Preview (Example)

```
+--------------------------------------+
|                Avatar                |
|--------------------------------------|
|     Numonov Islomjon                 |
|  Front-End Web Developer             |
|--------------------------------------|
| 💪 React     💪 HTML+CSS             |
| 💪 JavaScript 💪 Svelte              |
+--------------------------------------+
```

---

## 🛠️ How to Run

1. Clone the repo  
   ```bash
   git clonehttps://github.com/numonofcv/react-profile-card.git
   ```
2. Navigate to the project folder  
   ```bash
   cd profile-card
   ```
3. Install dependencies  
   ```bash
   npm install
   ```
4. Run the app  
   ```bash
   npm run dev
   ```
5. Open in browser  
   ```
   http://localhost:5173
   ```

---

## 📚 Future Improvements (v2 Ideas)

- Add responsive design for mobile view  
- Add hover animations on skills  
- Pass profile data dynamically via props or JSON file  
- Use SCSS or styled-components for cleaner styling  

---

## 👨‍💻 Author

**Numonov Islomjon**  
*Front-End Developer*  
> “Building interactive, creative, and inspiring web experiences.”

---

## 🪪 License
This project is open-source and available under the [MIT License](LICENSE).
