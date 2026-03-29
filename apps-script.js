// Google Apps Script - paste this into script.google.com
// Creates a "GDBC Votes" spreadsheet on first run

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = getOrCreateSheet();

  if (data.type === 'vote') {
    var sheet = ss.getSheetByName('Votes');
    sheet.appendRow([data.timestamp, data.book, data.voter]);
  } else if (data.type === 'suggestion') {
    var sheet = ss.getSheetByName('Suggestions');
    sheet.appendRow([data.timestamp, data.title, data.author]);
  }

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  var files = DriveApp.getFilesByName('GDBC Votes');
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }

  var ss = SpreadsheetApp.create('GDBC Votes');

  var votesSheet = ss.getActiveSheet();
  votesSheet.setName('Votes');
  votesSheet.appendRow(['Timestamp', 'Book', 'Voter']);

  var suggestionsSheet = ss.insertSheet('Suggestions');
  suggestionsSheet.appendRow(['Timestamp', 'Title', 'Author']);

  return ss;
}
