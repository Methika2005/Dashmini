import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pxzmpxajutuxsskiupek.supabase.co"
const supabaseKey = "sb_publishable_75So72eRP2LG339sbTZu4w_ftagXiD7"

export const supabase = createClient(supabaseUrl, supabaseKey)