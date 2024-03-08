import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const role = "guest";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        role,
      },
    },
  });

  if (error) throw new Error(error.message);

  let authError = null;

  if (data?.user && !data.user?.identities.length) {
    authError = {
      name: "AuthApiError",
      message: "This email has already been registered",
    };
  } else if (error) {
    authError = {
      name: error.name,
      message: error.message,
    };
  }

  if (authError) throw new Error(authError.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return { data, error };
}
