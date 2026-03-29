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

## 2. GitHub Pages

1. Create a repo called `gdbc` on the `gringo-chileno` GitHub account
2. Push the `index.html` file
3. Go to repo Settings > Pages > Source: main branch
4. Your site will be at `gringo-chileno.github.io/gdbc`

## 3. Updating books each month

Edit the `CONFIG.books` array in `index.html`. Each book needs:
- `title` - book title
- `author` - author name
- `goodreads` - link to Goodreads page
- `cover` - cover image URL (grab from Goodreads page source)

Apply the elimination rule: remove any book that got 0 votes in the last 2 voting rounds.

## 4. Checking results

Open the Google Sheet that the Apps Script created. Votes appear as rows with: timestamp, book title, voter name.
