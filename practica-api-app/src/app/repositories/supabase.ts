import {createClient} from '@supabase/supabase-js'

const supabaseUrl = "https://esrybgzmmmtfkmazwxjs.supabase.co";
const supabaseKey = "sb_publishable_JKD37MGAS0ueqmfy0OYwqQ_H1tBKEoD";

//Creamos la conexion con supabase

export const supabase = createClient(supabaseUrl,supabaseKey);