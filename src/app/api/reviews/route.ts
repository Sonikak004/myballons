import { NextResponse } from "next/server";

export async function GET() {
  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.NEXT_PUBLIC_PLACE_ID; // Provide default or keep in env

  if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
    return NextResponse.json(
      { error: "API key or Place ID missing" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`,
      { next: { revalidate: 3600 * 24 } } // Cache for 24 hours
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Google Reviews");
    }

    const data = await res.json();
    
    // Map the Google format to our frontend format
    const reviews = data.result?.reviews?.map((r: any, idx: number) => ({
      id: idx + 1,
      name: r.author_name,
      text: r.text,
      rating: r.rating,
      time: r.relative_time_description,
      avatar: r.profile_photo_url,
    })) || [];

    return NextResponse.json({
      reviews,
      rating: data.result?.rating,
      total: data.result?.user_ratings_total,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load reviews" },
      { status: 500 }
    );
  }
}
