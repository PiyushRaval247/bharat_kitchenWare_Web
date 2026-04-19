import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// We provide placeholder values to prevent the build from crashing when env vars are missing.
// This allows the frontend to deploy successfully.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
