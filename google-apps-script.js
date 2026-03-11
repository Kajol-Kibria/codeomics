// ╔══════════════════════════════════════════════════════════════════╗
// ║       GOOGLE APPS SCRIPT — Codeomics Contact Form Handler      ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// SETUP (takes ~3 minutes):
//
//  1. Go to https://script.google.com → New Project
//  2. Delete any existing code and paste THIS ENTIRE FILE
//  3. Replace "YOUR_EMAIL@gmail.com" below with your real email
//  4. Click  Deploy → New Deployment
//  5. Select type → "Web app"
//  6. Set "Execute as" → Me
//  7. Set "Who has access" → Anyone
//  8. Click Deploy → Authorize when prompted
//  9. Copy the Web App URL
// 10. Paste it into Contact.jsx at the GOOGLE_SCRIPT_URL constant
//
// That's it! Your contact form will now send you emails.
// ─────────────────────────────────────────────────────────────────

const YOUR_EMAIL = "kajolkibria95@gmail.com"; // ← Change this to your email

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);

        const subject = `New Contact from ${data.name} — Codeomics`;
        const body = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW MESSAGE FROM CODEOMICS WEBSITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     ${data.name}
Email:    ${data.email}
Budget:   ${data.budget}

Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from Codeomics contact form
Time: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

        // Send email
        GmailApp.sendEmail(YOUR_EMAIL, subject, body, {
            replyTo: data.email,
            name: "Codeomics Contact Form",
        });

        // (Optional) Log to Google Sheet — uncomment the lines below
        // and create a sheet named "Contact Submissions" in a Google Sheet.
        // const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Contact Submissions");
        // sheet.appendRow([new Date(), data.name, data.email, data.budget, data.message]);

        return ContentService.createTextOutput(
            JSON.stringify({ success: true })
        ).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        return ContentService.createTextOutput(
            JSON.stringify({ success: false, error: error.toString() })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}

// Handle CORS preflight (GET requests)
function doGet() {
    return ContentService.createTextOutput(
        JSON.stringify({ status: "Codeomics contact form endpoint is active" })
    ).setMimeType(ContentService.MimeType.JSON);
}
