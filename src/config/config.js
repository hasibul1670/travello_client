const config = {
  // serverURL:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://ivtripapidev.azurewebsites.net/'
  //     : 'http://localhost:5000/',
  serverURL: 'http://localhost:5000/',
  // serverURL: 'https://ivtripapidev.azurewebsites.net/',

  fileServer: 'https://tourmanager.blob.core.windows.net/',
  imageContainer: 'trip/',
  blobUrl: 'https://tourmanager.blob.core.windows.net/ivtrip/',
  PRODURL: 'https://ivtrip.azurewebsites.net',
  DEVURL: 'http://localhost:7001',
  FLIGHT_BASEURL: 'https://bdf.centralindia.cloudapp.azure.com/api/enterprise',

  FLIGHT_API_KEY:
    'RFUzNzRsV0xXUnNYJkJrNlQ2JERwMnQqdmlwTWM3VW5oWXRAdUxFRkt3bnpiakFBQjNyRmpHQWpuRktmb0dMcQ==',

  //test-server-API-Key
  // FLIGHT_API_KEY:
  //   'emZPciNvOFJhMGhzY0JLWSUtVm9ENVVDN0habzFyX2Q2XlhiRzFmXkNNeUduWllIUmxzUXdyMGx0SEVKdnYlbg==',
};

export default config;

// serverURL:
//   process.env.NODE_ENV === 'production'
//   ? 'https://ivtripapi.azurewebsites.net/'
//     : 'http://localhost:5000/',
