module.exports = {
  addr: 3000,
  region: "us",
  hostname: process.env.NGROK_DOMAIN, // If you have a custom domain
  inspect: false,
  web_allow_naive_browser_connections: true, // Skip browser warning
  basic_auth: process.env.NGROK_AUTH, // Optional: Add basic auth for additional security
  auth_token: process.env.NGROK_AUTHTOKEN, // Add your ngrok auth token
};
