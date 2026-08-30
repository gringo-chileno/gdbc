# GDBC Voting Page Setup

## 1. Google Apps Script (vote backend)

This receives votes and writes them to a Google Sheet.

1. Go to https://script.google.com and create a new project
2. Name it "GDBC Votes"
3. Replace the default code with the contents of `apps-script.js`
4. Click **Deploy > New deployment**
5. Type: **Web app**
6. Execute as: **Me**
7. Who has access: **Anyone**
8. Click **Deploy** and copy the URL
9. Paste the URL into `index.html` where it says `scriptUrl: ''`

## 2. Hosting (Spacefast)

The live page is https://gringodadsbookclub.view.fast/ and it serves the `site/` folder.

Republish after any edit:

```
sf publish site -m "what changed"
```

The space is `spc_2be2c6d999564ee8bd1068335e5d3f0d` on team `rob-team`. It already has a
public web viewer grant, so no extra step is needed after republishing.

The old GitHub Pages address, `gringo-chileno.github.io/gdbc`, now serves a redirect
page at the repo root so old WhatsApp links still land in the right place.

## 3. Updating books each month

Edit the `CONFIG.books` array in `site/index.html`. Each book needs:
- `title` - book title
- `author` - author name
- `goodreads` - link to Goodreads page
- `cover` - cover image URL (grab from Goodreads page source)

Apply the elimination rule: remove any book that got 0 votes in the last 2 voting rounds.

## 4. Checking results

Open the Google Sheet that the Apps Script created. Votes appear as rows with: timestamp, book title, voter name.
