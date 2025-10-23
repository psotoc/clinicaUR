// Supabase Configuration
const SUPABASE_URL = 'https://jwbhcbeasopnnovqodmu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3YmhjYmVhc29wbm5vdnFvZG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMjkyODksImV4cCI6MjA3NjgwNTI4OX0.KuXFagtqnpMmRHKAocsibM-VZ9UfkrOr7oBulB2Rxz0';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
