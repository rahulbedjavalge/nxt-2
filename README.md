# Nxt Action — MVP Prototype

This repository contains a lightweight HTML/CSS/JS prototype that visualizes the MVP outlined in
`prd.md`. The single-page experience walks through the core flow:

1. Compliance scope selection.
2. Document ingest + OCR preview.
3. Action Board for obligations.
4. Deadline tracker with risk scoring.
5. Proof Vault for evidence tracking.

## Run locally

This is a static prototype, so any simple web server will work.

1. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

   Or with Node:
   ```bash
   npx serve .
   ```

2. Open `http://localhost:8000` (or the URL shown in your terminal).

No dependency install is required. Edit `config.js` to adjust the environment parameters shown in the MVP Progress section.

## Environment parameters

The prototype reads environment-style values from `config.js` and displays them in the MVP Progress
section. Update the file to reflect your local or hosted setup.

1. Copy the template:
   ```bash
   cp .env.example .env
   ```
2. Mirror the values you want in `config.js` (future builds can load `.env` directly).

Key parameters:

- `API_BASE_URL` — backend gateway for ingestion + extraction.
- `STORAGE_REGION` — EU-only storage region.
- `AI_PROVIDER` — LLM extraction provider.
- `OCR_PROVIDER` — OCR engine for scans.
- `VECTOR_DB` — semantic search datastore.
- `DEMO_MODE` — mock data toggle for the UI.

## Files

- `index.html` — Page structure and content.
- `styles.css` — Visual styling and layout.
- `app.js` — Action Board interactivity.
- `config.js` — Local environment configuration for the UI.
