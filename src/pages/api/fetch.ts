import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

function formatData(data: any) {
  const formattedData = data.slice(1).map((row: any) => {
    return {
      key: Math.random().toString(36),
      date: row[0],
      customer: row[1],
      content: row[2],
      price: Number(row[3]),
      manufacturingCost: Number(row[4]),
      otherCost: Number(row[5]),
      invoiceCost: Number(row[6]),
    };
  });

  return formattedData;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'error method' });

  try {
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

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Allen-list!A1:G',
    });

    const rows = response.data.values;

    const formattedData = formatData(rows);

    return res.status(200).json({ data: formattedData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
