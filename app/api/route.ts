import { NextResponse } from "next/server";
import axios from "axios";

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;
const TMDB_BASE_URL = "https://api.themoviedb.org/3/search/multi";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!TMDB_ACCESS_TOKEN) {
        return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    if (!query) {
        return NextResponse.json({ results: [] }, { status: 200 });
    }

    try {
        const { data } = await axios.get(TMDB_BASE_URL, {
            headers: {
                Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
                accept: "application/json",
            },
            params: { query },
        });

        return NextResponse.json({ results: data.results });
    } catch (error) {
        console.error("Error fetching from TMDB:", error);
        return NextResponse.json({ error: "Failed to fetch movies and TV shows" }, { status: 500 });
    }
}
