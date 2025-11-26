// Supabase Configuration
// Load credentials from environment variables

let supabase;

async function initSupabase() {
    const env = await loadEnv();

    const SUPABASE_URL = env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.error('Supabase credentials not found in .env file');
        return null;
    }

    // Initialize Supabase client
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabase;
}

// Initialize on load
window.initSupabase = initSupabase;
