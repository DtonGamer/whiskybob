// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zrsijxvhbflbbwodtaaj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyc2lqeHZoYmZsYmJ3b2R0YWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMDQzODYsImV4cCI6MjA2MDY4MDM4Nn0.MO_DBi0PP2Cx-C5Xu39uZx2Pw_Ka9AYvKSlSkoYEJmw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);