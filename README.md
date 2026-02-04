# Nxt Action — MVP Prototype

This repository contains a lightweight HTML/CSS/JS prototype that visualizes the MVP outlined in
`prd.md`. The single-page experience walks through the core flow:

1. Compliance scope selection.
2. Document ingest + OCR preview.
3. Action Board for obligations.
4. Deadline tracker with risk scoring.
5. Proof Vault for evidence tracking.

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Files

- `index.html` — Page structure and content.
- `styles.css` — Visual styling and layout.
- `app.js` — Action Board interactivity.
