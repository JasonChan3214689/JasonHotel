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
  /* 
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
  } */

  if (authError) throw new Error(authError.message);

  const userId = data.user.id;

  const { data2, error2 } = await supabase
    .from("guests")
    .insert([
      {
        fullName: fullName,
        email: email,
        nationality: "HongKong",
        countryFlag: "https://flagcdn.com/hk.svg",
        userId: userId,
      },
    ])
    .single();

  if (error2) throw new Error(error2.message);

  return data, data2;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return { data, error };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function getCurrentGuests(id) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("userId", id);

  if (error) {
    console.error(error);
    throw new Error("guests could not be loaded");
  }

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
