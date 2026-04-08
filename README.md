# 🚀 Developer Portfolio Template

A modern, responsive portfolio built with React and Tailwind CSS, designed to showcase projects, skills, and contact information in a clean and professional way.

This project focuses on **component architecture, reusability, and scalability**, while maintaining a polished UI and smooth user experience.

---

## 🔗 Live Demo

👉 [View Live Site](#)
👉 [View Source Code](#)

---

## ✨ Features

* Responsive design across desktop and mobile
* Dark / Light mode toggle with persistence
* Smooth scrolling navigation
* Modular component architecture
* Reusable UI components (Button, Card, Section)
* Dynamic project rendering from data
* Subtle animations and hover effects

---

## 🧩 Architecture

This project was refactored from a single large component into a **modular, component-based structure**.

```
src/
  components/
    Navbar/
    Hero/
    HeroCard/
    Projects/
      ProjectCard.jsx
    About/
    Contact/
    Footer/
    ui/
      Button/
      Card/
      Section/
```

### Key Concepts

* **Separation of concerns** → each section is its own component
* **Reusable UI layer** → shared components for consistency
* **Data-driven rendering** → content powered by a central data file
* **Scalable structure** → easy to extend with new features

---

## ⚙️ Tech Stack

* **React** – component-based UI architecture
* **Vite** – fast development environment
* **Tailwind CSS** – utility-first styling
* **JavaScript (ES6+)**

---

## 🧠 Technical Decisions

### Component-Based Design

The application is structured into small, focused components instead of a single large file. This improves readability, maintainability, and scalability.

### Reusable UI Components

Custom UI components like `Button`, `Card`, and `Section` reduce duplication and keep styling consistent across the app.

### Tailwind CSS

Tailwind was used to rapidly build a modern UI while maintaining responsive design and consistent spacing, layout, and typography.

### Theme Persistence

Dark/light mode is stored in `localStorage` to preserve user preference across sessions.

---

## 🔄 Recent Improvements

* Refactored `App.jsx` into multiple components
* Introduced reusable UI components
* Created `ProjectCard` for cleaner project rendering
* Improved layout consistency using shared wrappers
* Added smooth scrolling and subtle animations
* Cleaned up prop passing using structured data objects

---

## 📸 Screenshots

*(Add desktop + mobile screenshots here)*

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo.git

# Navigate into the project
cd your-repo

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📌 Future Improvements

* Add project filtering / categories
* Add animations with Framer Motion
* Integrate contact form with backend (Firebase or API)
* Add CMS or dynamic content management

---

## 💡 What I Learned

* How to refactor a large component into a scalable architecture
* How to design reusable UI systems
* How to structure a real-world React project
* How to balance development speed with maintainability

---

## 📬 Contact

If you’d like to collaborate or have any opportunities:

* GitHub: [Your GitHub](#)
* Email: [your@email.com](mailto:your@email.com)

---

## 📝 License

This project is open source and available under the MIT License.
