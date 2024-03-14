import supabase, { supabaseUrl } from "./supabase";

export async function getHotelRoom(totalPeople) {
  const { data, error } = await supabase
    .from("hotelroom")
    .select("*")
    .gte("maxCapacity", totalPeople);

  if (error) {
    console.error(error);
    throw new Error("Hotel room could not be loaded");
  }

  return data;
}

export async function getBookingHotelRoom(id) {
  const { data, error } = await supabase
    .from("hotelroom")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Hotel room could not be loaded");
  }

  return data;
}
