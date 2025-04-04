# 📊 Google Sheet Data Extractor via Google Form

A web-based tool that extracts data from **Google Sheets** (populated through **Google Forms**) and displays it on a beautiful **React + Vite** frontend. Includes a download button to export the displayed data into **Excel (.xlsx)** format — all in one click!

---

## 🚀 Features

- ✅ Fetches responses from a public **Google Sheet**
- ✅ Clean and responsive UI with **Bootstrap** + **TailwindCSS**
- ✅ Button to **download data as Excel (.xlsx)** using the `xlsx` package
- ✅ Component styling with `clsx` and `tailwind-merge` for utility-class merging
- ✅ Icon support via **lucide-react**
- ✅ Fast, modern development environment with **Vite + React**

---

## 🧰 Tech Stack

| Tech               | Usage                           |
|--------------------|----------------------------------|
| **Vite + React**   | Frontend app setup               |
| **Bootstrap 5**    | Basic layout and styling         |
| **TailwindCSS**    | Utility-first custom styling     |
| **clsx**           | Conditional className merging    |
| **tailwind-merge** | Class conflict resolution        |
| **lucide-react**   | Clean, modern icons              |
| **xlsx**           | Generate Excel downloads         |

---

## 📦 Installation

```bash
git clone https://github.com/your-username/google-sheet-data-extractor.git
cd google-sheet-data-extractor
npm install
npm run dev
```

---

## 📝 How It Works

1. A **Google Form** is linked to a **Google Sheet** where all responses are stored.
2. The React frontend fetches this sheet as JSON (via [Google Visualization API](https://developers.google.com/chart/interactive/docs/querylanguage) or a custom endpoint).
3. The data is parsed and displayed in a table.
4. Clicking the **"Download as Excel"** button converts the data to `.xlsx` using the `xlsx` package and starts the download.

---

## 📸 Screenshots

| Web View | Excel Export |
|----------|--------------|
| ![Web Screenshot](your-screenshot-link) | ![Excel Screenshot](your-screenshot-link) |

---

## 🧠 Future Improvements

- 🔒 Authentication for private sheets
- 📊 Chart visualizations of the data
- 🔍 Filters and sorting options
- 🌐 Deploy on Vercel/Netlify

---

## 🙌 Credits

Built with ❤️ using open source tools and caffeine ☕.

---

## 📄 License

[MIT](LICENSE)
