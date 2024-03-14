import supabase, { supabaseUrl } from "./supabase";

export async function createBooking(newBooking) {
  console.log(newBooking);
  const { data, error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function getBooking(guestId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("guestId", guestId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be find");
  }
  return data;
}
