# Hasan Ahmed - Personal Portfolio Website

A modern, high-performance, responsive Personal Portfolio Website designed with **Soft Neumorphism (Soft UI)**, a **Bento Grid architecture**, and a **Desktop Sidebar / Mobile Drawer** layout.

Built with **React.js**, **Vite**, **Tailwind CSS**, **Lucide React**, **Framer Motion**, and **EmailJS**.

---

## 🌟 Key Features

- **Soft Neumorphic Aesthetic:** Precise dual-box-shadow elevation, soft pressed wells, and authentic royal blue (`#3678F7`) accents matching the reference design.
- **Fluid Light & Dark Mode:** Handcrafted neumorphic shadows and color palettes for both bright daylight and deep sleek dark mode, persisted via `localStorage`.
- **Desktop Sidebar & Mobile Drawer:** Fixed elegant left sidebar on desktop with profile avatar, active status indicator, quick nav links, theme toggle, and social icons; responsive off-canvas drawer on mobile.
- **Active Scroll-Spy Navigation:** Automatically highlights the currently visible section as you scroll through the portfolio.
- **All 8 Complete Sections:**
  1. **Home / Hero:** Profile avatar, status badge (`Available for opportunities`), notification bell popover, headline, bio, Download CV button (with confetti!), Contact Me button, and 3D visual backdrop.
  2. **About Me:** Bento card layout with academic background, location, career goals, quote card (*"Dream Big, Code Better."*), and stats counter.
  3. **Skills:** Category-filtered technical cards (Languages, Frontend, Backend & Database, Tools & Core) with SVG icons and proficiency metrics.
  4. **Projects:** Full-stack and web app showcase with category filters, tags, GitHub repository links, live demo links, and quick view detail modals.
  5. **Education:** Clean vertical educational timeline detailing university degree, GPA/CGPA, coursework, and honors.
  6. **Certifications:** Credential gallery with full certificate preview modal, verification badges, and issuer links.
  7. **Resume:** In-browser ATS-formatted CV viewer and functional PDF download (`/resume/Hasan_Ahmed_Resume.pdf`).
  8. **Contact:** Interactive contact form with input validation, success notifications, EmailJS integration, and direct social cards.
- **100% Data-Driven Architecture:** All content (personal details, projects, skills, education, certifications, and links) is separated into dedicated files under `src/data/`. You can update your entire website without touching any UI component!

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have Node.js (version 18+ or 20+) installed on your machine.

### 1. Installation
Clone or navigate to the project directory and install dependencies:

```bash
npm install
```

### 2. Run the Development Server
Start the local development server:

```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in your terminal).

### 3. Build for Production
To generate an optimized production bundle:

```bash
npm run build
```

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```text
personal-portfolio/
├── public/
│   ├── images/                # Profile avatars, hero cutouts & illustrations
│   │   ├── avatar.png
│   │   ├── hero-portrait.png
│   │   └── about-illustration.png
│   ├── certificates/          # Certificate images & badges
│   └── resume/                # Downloadable PDF resume
│       └── Hasan_Ahmed_Resume.pdf
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Modal.jsx          # Reusable preview modal
│   │   ├── NotificationModal.jsx
│   │   ├── Sidebar.jsx        # Desktop sidebar & mobile drawer
│   │   ├── SocialIcons.jsx    # SVG icons for GitHub, LinkedIn
│   │   └── ThemeToggle.jsx    # Neumorphic dark/light toggle
│   ├── data/                  # ⭐️ CONTENT MANAGEMENT FILES
│   │   ├── personal.js        # Bio, contact, social links & EmailJS keys
│   │   ├── skills.js          # Technical skills & categories
│   │   ├── projects.js        # Portfolio projects & links
│   │   ├── education.js       # Academic history & achievements
│   │   └── certifications.js  # Certificates & credentials
│   ├── sections/              # Website sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                # Main layout & scroll spy logic
│   ├── index.css              # Neumorphic CSS utility classes & Tailwind
│   └── main.jsx               # Entry point
├── CONTENT-MANAGEMENT-GUIDE.md# Detailed guide for updating your content
├── package.json
├── tailwind.config.js         # Neumorphic color palette & dual shadows
└── vite.config.js             # Vite configuration
```

---

## 🌐 Deployment to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Hasan Ahmed personal portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Visit [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New Project** and import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live worldwide in seconds!

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
