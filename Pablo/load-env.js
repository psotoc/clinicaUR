// Load environment variables for browser
// This file reads .env and makes variables available

async function loadEnv() {
    try {
        const response = await fetch('.env');
        const text = await response.text();

        const env = {};
        text.split('\n').forEach(line => {
            line = line.trim();
            if (line && !line.startsWith('#')) {
                const [key, ...valueParts] = line.split('=');
                const value = valueParts.join('=').trim();
                env[key.trim()] = value;
            }
        });

        return env;
    } catch (error) {
        console.error('Error loading .env file:', error);
        return {};
    }
}

// Export for use
window.loadEnv = loadEnv;
