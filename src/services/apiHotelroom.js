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
