# blog_app_dashboard
# 📝 My Blog App (Next.js)

A modern and interactive blogging web application built with **Next.js**. The app supports dark mode, dynamic blog pages from markdown files, a beautiful landing page, a contact form, and a profile-based About page.

## 🚀 Features

- 🌐 Built with **Next.js**
- 💅 Styled using **CSS & TailwindCSS** (or inline styles)
- 🗂 Blog content powered by **Markdown** with `gray-matter`
- 📱 Responsive design
- 🌓 Dark/Light theme toggle (optional)
- 🖼 Background images and blog post cards
- 🧠 Modular `About Us`, `Contact Us`, and `Home` pages
- 🔗 "Read More" links to individual blog pages

---

## 📁 Folder Structure

my_blog_app/
├── public/
│ ├── images/
│ │ ├── bg.png
│ │ ├── post1.png
│ │ └── profile.png
├── posts/
│ ├── post1.md
│ ├── post2.md
│ └── post3.md
├── pages/
│ ├── index.js # Landing Page
│ ├── home.js # Blog Grid Page
│ ├── about.js # About Me
│ ├── contact.js # Contact Form
│ └── posts/
│ └── [slug].js # Dynamic Blog Post Page
├── styles/
│ └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/my_blog_app.git
cd my_blog_app
---
title: "My First Blog Post"
date: "2025-07-01"
excerpt: "This is a short summary of my first blog post."
coverImage: "/images/post1.png"
---

## Welcome!

Here is the full content of my first blog post...
📦 Dependencies
1.Next.js
2.React
3.gray-matter
4.remark / remark-html
5.Tailwind CSS (optional)


![Screenshot (61)](https://github.com/user-attachments/assets/6e4b9f22-d891-4935-91a6-8f1c5c6103a8)
![Screenshot (63)](https://github.com/user-attachments/assets/583937a1-176b-44a5-9d6e-c4066df20538)
![Screenshot (64)](https://github.com/user-attachments/assets/b7f1fd45-24a9-40e4-a1cb-4ae1036874b7)

![Screenshot (65)](https://github.com/user-attachments/assets/85705e67-dc8a-4f21-bac1-5af674676ab0)


