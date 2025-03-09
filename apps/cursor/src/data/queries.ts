import { createClient } from "@/utils/supabase/server";

export async function getUserProfile(userId: string) {
  const supabase = await createClient({ admin: true });

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  return data;
}

export async function getPopularPosts() {
  const supabase = await createClient({ admin: true });
  const { data } = await supabase.rpc("get_popular_posts");

  return data;
}
