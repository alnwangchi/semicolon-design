import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req', req.body);

  if (req.method !== 'POST') return res.status(405).json({ message: 'error method' });
  try {
    const { date, customer, content, price, manufacturingCost, otherCost, invoiceCost } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Allen-list!A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[date, customer, content, price, manufacturingCost, otherCost, invoiceCost]],
      },
    });

    return res.status(201).json({ data: response });
  } catch {
    return res.status(500);
  }
}
