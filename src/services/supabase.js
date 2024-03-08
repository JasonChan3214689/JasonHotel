import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kbrlofpizgjqttsbdjad.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticmxvZnBpemdqcXR0c2JkamFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0Mjc4NTQsImV4cCI6MjAyNDAwMzg1NH0.p2v7_20BzMImVtKIYa70QEAQG2wDd24Crq_UsWB6I8o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
