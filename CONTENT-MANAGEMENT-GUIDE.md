# Content Management Guide

Welcome to your Personal Portfolio! This guide explains how you can easily manage, update, and expand your portfolio content **without touching any UI code or styling components**.

All content is centralized in JavaScript data files inside `src/data/` and asset folders inside `public/`.

---

## Table of Contents
1. [Updating Personal Information & Links](#1-updating-personal-information--links)
2. [Replacing Profile Pictures & Hero Images](#2-replacing-profile-pictures--hero-images)
3. [Managing Technical Skills](#3-managing-technical-skills)
4. [Adding or Editing Projects](#4-adding-or-editing-projects)
5. [Updating Education Details](#5-updating-education-details)
6. [Managing Certificates](#6-managing-certificates)
7. [Updating Your CV / Resume PDF](#7-updating-your-cv--resume-pdf)
8. [Configuring EmailJS for the Contact Form](#8-configuring-emailjs-for-the-contact-form)
9. [Deploying Changes to Production](#9-deploying-changes-to-production)

---

## 1. Updating Personal Information & Links

File: `src/data/personal.js`

Here you can change:
- Your name, titles, greeting, and bio statements.
- Your email, location, degree, and career goal.
- Social media profiles (GitHub, LinkedIn, Twitter, WhatsApp).
- The quote displayed on the Bento grid.
- Key statistics (years experience, completed projects, problem solving count).

### Example:
```javascript
export const personalInfo = {
  name: "Hasan Ahmed",
  role: "Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "your.real.email@gmail.com",
  
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    whatsapp: "https://wa.me/8801700000000"
  },
  // ...
};
```

---

## 2. Replacing Profile Pictures & Hero Images

Folder: `public/images/`

Your portfolio uses the following image assets:
- `public/images/avatar.png` — Circular profile picture in the sidebar.
- `public/images/hero-portrait.png` — Cutout portrait in the hero section.
- `public/images/about-illustration.png` — Tech illustration shown in the About card.

### To Replace Images:
1. Save your new photo inside `public/images/` (e.g. `public/images/my-new-photo.png`).
2. Open `src/data/personal.js` and update the path:
   ```javascript
   avatar: "/images/my-new-photo.png",
   heroPortrait: "/images/my-new-photo.png",
   ```
3. Save the file. The website will immediately update!

---

## 3. Managing Technical Skills

File: `src/data/skills.js`

You can add new skills, edit proficiency levels, or reorder categories.

### Adding a New Skill:
Simply add a new object to the `skillsData` array:

```javascript
{
  id: "docker",
  name: "Docker",
  category: "Tools & Core",      // Options: "Languages", "Frontend", "Backend & Database", "Tools & Core"
  level: 80,                    // Percentage from 1 to 100
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  featured: true                 // Set to true to display on default grid
}
```

> **Tip:** You can use free developer SVG icons directly from [Devicon.dev](https://devicon.dev/).

---

## 4. Adding or Editing Projects

File: `src/data/projects.js`

To add a new project, add an entry to the `projectsData` array:

```javascript
{
  id: "my-awesome-app",
  title: "My Awesome App",
  shortDescription: "A short 1-sentence summary of what this app does.",
  description: "A detailed 2-3 sentence overview explaining architecture, problem solved, and stack.",
  category: "Full Stack",        // Options: "Web App", "Full Stack", "Frontend", "Software"
  featured: true,                // true shows on default view, false shows when "View All" is toggled
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800", // Or local path like "/images/project1.png"
  tags: ["React", "Node.js", "Tailwind CSS"],
  liveUrl: "https://myapp.com",  // Set to "#" if no live link
  githubUrl: "https://github.com/hasanahmed/myapp",
  features: [
    "Authentication with JWT and OAuth",
    "Real-time database updates",
    "Responsive neumorphic UI"
  ]
}
```

New entries automatically appear in the project showcase with filtering and modal details!

---

## 5. Updating Education Details

File: `src/data/education.js`

Add or edit degrees, university accomplishments, and coursework:

```javascript
{
  id: "msc-cse",
  degree: "M.Sc. in Computer Science",
  institution: "University Name",
  location: "Dhaka, Bangladesh",
  period: "2026 - 2028",
  status: "Upcoming",
  grade: "CGPA: 4.00",
  description: "Advanced research in Distributed Systems and Artificial Intelligence.",
  highlights: [
    "Published research paper on algorithmic efficiency",
    "Graduate Teaching Assistant"
  ]
}
```

---

## 6. Managing Certificates

File: `src/data/certifications.js`

Add newly earned certifications:

```javascript
{
  id: "cert-aws-cloud",
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  issueDate: "2026",
  credentialId: "AWS-CCP-98124",
  credentialUrl: "https://aws.amazon.com/verification",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  skills: ["Cloud Architecture", "AWS Lambda", "S3", "EC2", "IAM"],
  description: "Validation of overall understanding of the AWS Cloud platform and foundational cloud concepts."
}
```

Clicking **Preview** in the Certifications gallery will automatically display your certificate in an interactive modal!

---

## 7. Updating Your CV / Resume PDF

Folder: `public/resume/`

1. Export your latest resume as a PDF file named `Hasan_Ahmed_Resume.pdf`.
2. Replace the file at `public/resume/Hasan_Ahmed_Resume.pdf`.
3. If you name it differently, update the reference in `src/data/personal.js`:
   ```javascript
   resumePdf: "/resume/Your_New_Resume_Name.pdf",
   ```

Both the **Download CV** button in the Hero banner and the **Download PDF** button in the Resume section will automatically download this file.

---

## 8. Configuring EmailJS for the Contact Form

The contact form currently runs in graceful **Demo Mode** (simulates sending with confetti and success alerts so testing works out of the box).

To receive emails directly in your inbox:
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account.
2. In the EmailJS dashboard:
   - Add an **Email Service** (e.g. Gmail) -> Copy your `Service ID`.
   - Create an **Email Template** -> Copy your `Template ID`.
   - Go to **Account** -> Copy your `Public Key`.
3. Open `src/data/personal.js` and paste your keys:
   ```javascript
   emailjs: {
     serviceId: "service_xxxxxxx",
     templateId: "template_xxxxxxx",
     publicKey: "user_xxxxxxxxxxxx"
   }
   ```
4. Save the file. All messages sent through your website's contact form will now land directly in your email inbox!

---

## 9. Deploying Changes to Production

Whenever you edit your data files or add new assets, simply commit and push your changes:

```bash
git add .
git commit -m "Update portfolio projects and skills"
git push origin main
```

If your project is connected to Vercel or Netlify, it will automatically build and deploy your updates within seconds!
