/**
 * RSVP → Google Sheet  (Google Apps Script)
 * ------------------------------------------------------------------
 * Routes each RSVP to a separate tab per side of the family:
 *   - side "groom"  -> tab "Karen"
 *   - side "bride"  -> tab "Elvina"
 *   - anything else -> tab "RSVPs" (fallback)
 * Both tabs live in this same spreadsheet and are created automatically.
 *
 * SETUP (one time, ~3 minutes):
 * 1. Open your Sheet -> Extensions > Apps Script. Paste ALL of this file. Save.
 * 2. Deploy > New deployment > Web app.
 *      - Execute as: "Me"
 *      - Who has access: "Anyone"    <-- must be "Anyone"
 *    Deploy, authorize.
 * 3. Copy the Web app URL (ends in /exec) into .env.local:
 *      NEXT_PUBLIC_RSVP_ENDPOINT="https://script.google.com/macros/s/XXXX/exec"
 *    then restart `npm run dev`.
 *
 * If you edit this script later, you must Deploy > Manage deployments > edit >
 * "New version" for changes to take effect (the /exec URL stays the same).
 */

// The spreadsheet (document) title.
var SPREADSHEET_TITLE = 'Karen & Elvina — Wedding RSVPs';

// Map the stable side key sent by the form to a tab name.
var SHEETS_BY_SIDE = {
  groom: 'Karen',
  bride: 'Elvina',
};

var HEADERS = [
  'Անուն Ազգանուն',
  'Ո՞ւմ հյուրն է',
  'Մասնակցություն',
  'Որ արարողություններին են մասնակցելու',
  'Հյուրերի Քանակը',
  'Նամակ',
  'Submitted At',
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // avoid two submissions writing at once

  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss.getName() !== SPREADSHEET_TITLE) {
      ss.rename(SPREADSHEET_TITLE);
    }

    var sheetName = SHEETS_BY_SIDE[data.side] || 'RSVPs';
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    // Write the header row the first time this tab is used.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      data.name || '',
      data.guestOf || '',
      data.attendance || '',
      data.participation || '',
      data.guests || '',
      data.message || '',
      data.submittedAt || new Date().toISOString(),
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success', sheet: sheetName }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
