import { GoogleSpreadsheet } from 'google-spreadsheet'

const appendSpreadsheet = async (row) => {
  // const SPREADSHEET_ID = '114s6J8gvLiM5EVG_iLq94B7oBliy4JSz3PdCmIMDIkg';
  const SPREADSHEET_ID = '1ynaqTmbsz-3P1hg27zGNE7RYl7aDiDlBnwH1uIzWv8Y';
  // const SHEET_ID = '1854561860';
  const SHEET_ID = '162208092';
  const CLIENT_EMAIL = 'google-sheets-tcc-luciano@api-project-97132085860.iam.gserviceaccount.com';
  const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCYaSJE9720dCOH\n1sC0R5CqWCGtf4mzRNIkJAfEnXClTr05mEZ6g2KWjuA+yNXSan+ARnTaULUdMYzG\nk0zhXhIgvVyXDh5wyN5ML+rHSvNm/3eejWyAhqIa0Ri4Xiw4insOvnSMY8PKRFYm\nXE8cP2VHMe/0LU17CDPGqau69YYc4+WIJEDt2b6R46XC9PYW/X5hhhJD4pDwzMD/\n7nALxCQ7s9RSmY4vicHRYMWUaXt7Nx3CNgM3TNhHbWTpBvakboycS9c4kqRL8hae\n68EGmUSm9uj1oeslaHhoJVJeqeaefycm80obdZT6SKBftxCn7klRskUFcm+5zvQd\n1opj5z/DAgMBAAECgf8zf1KU+yCeWJ+oxmdWgtfetuiqNu3QJPDcRVBantfxAyns\nzAcEXmBxftVGYZXeAx4RubzCB4Mq2hM3BY50l9SIO3ONlreyZCy4kXhC3pBfvPIu\nIJsI0nTzmrM/mJJYiHIMCU5YIV2GepChZY9VfBY8eCMb3jLP33WfKrVb9pnaKKDq\npcuTvdJX93qYIVizmhdhshJtftNt5XeTEaIKjCIpYvxVq8sRuXR1GVrAfNPG5yuU\nfkMeGCUJRbEYYoYBFLg+VErz1C9JrZ0TlW8g15EW3ZUtyNDBovFmHMZ7fPZDjzq/\nJ57CNDw0tHu6DIpinqW88ASm5c9bvFwkdcC70ZECgYEA103clsh0NfzadmCNuJn3\n++DHlb3joTdaeST5EtMezTQiadPCo/+gWuaSNxYkZ7AoruGtY59NT/q5qER2uI3H\nyuk6Ov62+M7YDjfXMGWnEHtXJnFCQjRif4HmV8Gw2Wf00gOX9CJ+cnFJj53SxUlC\n0j3HWpUki8kGa3yxA04T4VECgYEAtTf7kc37Si4UEZvKj1+ULjRtPIdGscwGkHNE\nqF0bNGBLbkefyOvKQWKCKk9icDxRLdFAlOhUlTsw16u8SMZvV60BObo87buoYeoy\nIQTAy09WvfJFCnxDiFUQlzArh0m2vsZ5U0T0MZlzaEQEDuTauJvOCrqKrG5tny+8\nxiRpatMCgYAB6/8BFY78AGLO1bPOJwmwpOQDMSu7/6t+E1dp1JqcyE9aVHqTTi/X\nP+GkPj1a85aZYQhUMFLXWOyZVOseYJ2c8RIE/ssRU39YOSVhmDayjfdML4yg3KjY\nbIdq1x7GAgiMa13K3xfz25EFiCoeerXu/IAwDc7CtKuq//Twi5zf0QKBgAw8WG8S\n0lnC3LYHp9igYnfwMEP6+kn89aCBN+yKRND3g4BRs7c0PHbHuPQ0YfgkCnMmgs7L\nFRLyaSzWuqLLSy9HTiLgsUZ3+jmKP5I9KOtRUxEGL6UymLi2zaT3qqi60Gz3J6/4\nouhKbSFoHkIHL8FxO6s7xys3VY1/Aqb6RGfjAoGAfcNSWYpAaN38YHjjLDQRiaFI\nHzj2vXl7W3pqxIgkPkEql7N3VJ6hXt5KIkLXb0QM/NaEe+VGJ8kptLFyRAHbx8t7\nYvMT096ly0xrpe7AM4SX0t0U74mrV77U/f7BsDnhGxI5fUVGeIhDtZrNnmDEvotr\nT78uB2tdxgFB3CJsMeg=\n-----END PRIVATE KEY-----\n';

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID)
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
}

export default (req, res) => {
  /* add new Row data */
  if (req.method === 'POST') {
    // const newRow = req.body;
    console.log(req.body)
    const newRow = JSON.parse(req.body)

    appendSpreadsheet(newRow)
    res.statusCode = 201
    res.json({
        code: 201,
        data: {
            message: 'Created'
        }
    })
  }
}