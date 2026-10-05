# Gyani Tutorials website

Next.js 16 (App Router) website for Gyani Tutorials: home tuition in Dehradun and online tuition across India.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Gyani Tutorials website"
git branch -M main
git remote add origin https://github.com/<your-username>/gyani-tutorials.git
git push -u origin main
```

## Deploy
Import the GitHub repo on [Vercel](https://vercel.com/new). No settings are needed.

## Pages
- `/` home page: services, courses, gallery, tutors, why us, review, tutor form, student form
- `/blog` blog page with three articles

## What to edit
- **Phone / WhatsApp:** search for `917668789504` and `76687 89504` (`components/`, `app/page.js`).
- **Photos:** save images in `public/images/` and set `src` on the `<Photo />` components in `app/page.js`, e.g. `<Photo src="/images/tutor1.jpg" alt="Amit Sharma" />`. Illustrations show until you add a photo.
- **Tutors:** replace the "Tutor name / Qualification · Experience" placeholders in `app/page.js` with real details.
- **Reviews and blog posts:** edit the text in `app/page.js` and `app/blog/page.js`.
- **Colours and fonts:** CSS variables at the top of `app/globals.css`.

The student and tutor forms open WhatsApp with the details filled in. They do not store data.
