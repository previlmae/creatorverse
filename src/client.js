import { createClient } from '@supabase/supabase-js';

const URL = 'https://nqagahhleaoziexnaqqu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xYWdhaGhsZWFvemlleG5hcXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MDY0OTMsImV4cCI6MjA4NTQ4MjQ5M30.lpIeOUbaKTkNTh4YhMrLu0To7Y4SW2CVgYn-dG6ockk';

export const supabase = createClient(URL, API_KEY);