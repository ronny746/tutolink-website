/**
 * Submits lead data to Google Sheet / Excel webhook
 * @param {Object} leadData 
 */
export async function submitLeadToGoogleSheet(leadData) {
  // Configured Webhook / Google Apps Script URL
  const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbzuZfhlS2buNY1Jc_h8GXVI7VwRpUrUuzmwokGH1Qk4uTfm4eFKtBaR6sKQ99fnZtASIg/exec";

  const payload = {
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    instituteName: leadData.instituteName || "",
    ownerName: leadData.ownerName || "",
    mobile: leadData.mobile || "",
    city: leadData.city || "",
    studentCount: leadData.studentCount || "",
    targetExam: leadData.targetExam || "JEE / NEET",
    preferredTime: leadData.preferredTime || "Morning",
    source: "Website Lead Form"
  };

  // If a Google Sheet Web App URL is configured, send the POST request
  if (googleSheetUrl) {
    try {
      await fetch(googleSheetUrl, {
        method: "POST",
        mode: "no-cors", // Google Apps Script Web App CORS handler
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("Lead successfully submitted to Google Sheet!");
    } catch (error) {
      console.error("Error submitting lead to Google Sheet:", error);
    }
  }

  // Also save to LocalStorage so institute admins can inspect/export leads anytime
  saveLeadToLocalStorage(payload);
  
  return payload;
}

/**
 * Local backup helper to save leads in browser memory
 */
function saveLeadToLocalStorage(lead) {
  try {
    const existing = JSON.parse(localStorage.getItem("tutolink_leads") || "[]");
    existing.unshift(lead);
    localStorage.setItem("tutolink_leads", JSON.stringify(existing));
  } catch (e) {
    console.error("Error saving lead locally:", e);
  }
}

/**
 * Utility to download all captured leads directly as a CSV file (opens in Excel)
 */
export function downloadLeadsAsCSV() {
  try {
    const leads = JSON.parse(localStorage.getItem("tutolink_leads") || "[]");
    if (leads.length === 0) {
      alert("No leads captured yet!");
      return;
    }

    const headers = ["Timestamp", "Institute Name", "Owner Name", "Mobile", "City", "Student Count", "Target Exam", "Preferred Time", "Source"];
    
    const csvRows = [
      headers.join(","),
      ...leads.map(l => [
        `"${l.timestamp}"`,
        `"${l.instituteName}"`,
        `"${l.ownerName}"`,
        `"${l.mobile}"`,
        `"${l.city}"`,
        `"${l.studentCount}"`,
        `"${l.targetExam}"`,
        `"${l.preferredTime}"`,
        `"${l.source}"`
      ].join(","))
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tutolink_leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (e) {
    console.error("Error exporting leads to CSV:", e);
  }
}
