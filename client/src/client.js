import {createClient} from '@supabase/supabase-js'
const URL = 'https://ytfzcocjbjjzeqhjjwlk.supabase.co';
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Znpjb2NqYmpqemVxaGpqd2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwNTA3ODMsImV4cCI6MTk5NTYyNjc4M30.n9YGYN3OsKCLNdVIEprxEogbR78R_0eqz7-z4cisXBM";
export const supabase = createClient(URL, API_KEY);
