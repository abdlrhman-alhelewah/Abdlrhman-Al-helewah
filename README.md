# Portfolio Website — Abdlrhman Al Helewah
### Digital Marketing Specialist | Performance Marketing · Content Strategy · AI & Automation

A production-ready personal portfolio website built with **100% Vanilla HTML5, CSS3, and JavaScript**. Zero external build dependencies, frameworks, or database requirements. 100% static and compatible with **GitHub Pages** free hosting.

---

## 📁 Project Structure

```text
/
├── index.html            # Main semantic markup & content architecture
├── style.css             # Vanilla CSS3 styling, design tokens & dark premium theme
├── script.js             # Vanilla JS data architecture, case studies modal & interactivity
└── assets/
    └── icons/            # Scalable vector graphics (SVGs) for channels & tools
```

---

## 🚀 How to Run Locally (No Installation Required)

Because this website uses pure HTML, CSS, and JavaScript:

1. **Download or clone** the project folder to your computer.
2. Ensure the files (`index.html`, `style.css`, `script.js`, and `assets/`) are in the same folder.
3. **Double-click `index.html`** or right-click and choose **"Open With" → Chrome, Safari, Edge, or Firefox**.
4. That's it! The portfolio runs immediately in your browser with zero terminal commands or setup.

---

## ✏️ How to Edit & Customize Your Information

### 1. Update Case Studies
Open `script.js` in any text editor (VS Code, Notepad, Sublime Text). Near the top, you will find the `CASE_STUDIES` array:
- Update the client name, industry, challenge, strategy, and verified numbers.
- Replace bracketed placeholders like `[XX%]` or `[XX,XXX]` with your verified statistics as client NDAs permit.
- To add a new case study, duplicate one of the objects inside the array and fill in your details.

### 2. Update Experience & Dates
Open `index.html` and search for:
- `<!-- EXPERIENCE SECTION -->`
- Replace `[START DATE]` with your start date (e.g., `Jan 2024 — Present`).
- Fill in your verified impact numbers inside `<span class="placeholder-badge">[X]</span>`.

### 3. Contact & Social Channels
Your contact details are integrated across the hero bar and contact cards:
- LinkedIn: `https://www.linkedin.com/in/abdlrhman-al-helewah`
- WhatsApp: `+20 155 340 4607` (`https://wa.me/201553404607`)
- Email: `abdlrhmanmahmoud@gmail.com`
- The contact form is configured to send emails directly to `abdlrhmanmahmoud@gmail.com` via `mailto:`, with a built-in one-click "Copy Message" button for visitors.

### 4. Update Certifications
In `index.html`, search for `<!-- CERTIFICATIONS -->` and replace `[CREDENTIAL_ID]` and `[COMPLETION_DATE]` with your real credentials and dates.

---

## 🌐 How to Publish for Free on GitHub Pages

You can host this website completely free of charge with a custom `.github.io` link:

### Step 1: Create a GitHub Account
If you don't already have one, sign up for free at [github.com](https://github.com).

### Step 2: Create a New Repository
1. Click the **"+"** icon in the top-right corner of GitHub and select **"New repository"**.
2. Name your repository:
   - For a personal root domain, name it: `<your-username>.github.io` (e.g., `abdlrhman.github.io`).
   - Or name it any project name you prefer (e.g., `portfolio`).
3. Make sure the repository visibility is set to **Public**.
4. Leave other options unchecked and click **"Create repository"**.

### Step 3: Upload Your Files
1. On your new repository page, click **"uploading an existing file"**.
2. Drag and drop all project files (`index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder).
3. Under "Commit changes", type `Initial portfolio release` and click **"Commit changes"**.

### Step 4: Enable GitHub Pages
1. Go to your repository's **Settings** tab.
2. On the left sidebar under "Code and automation", click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.

### Step 5: Access Your Live Website
- Within 1–2 minutes, GitHub Pages will deploy your site and provide your live URL (e.g., `https://<your-username>.github.io/` or `https://<your-username>.github.io/portfolio/`).
- Test the link on your phone, laptop, or share it directly with recruiters and clients.

### Step 6: Updating Your Website Later
Whenever you want to add new case studies or update metrics:
1. Edit the file on your computer (or directly on GitHub by clicking the pencil icon on any file).
2. Save/commit your changes.
3. GitHub Pages will automatically update your live site within seconds!
