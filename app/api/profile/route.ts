import { client } from "@/lib/sanityClient";
import { NextResponse } from "next/server";

export async function GET() {


    try {

        const query = `*[_type == "profile"][0]{title}`

        const res = await client.fetch(query);
      

        return NextResponse.json(res);

     } catch (error) {
        console.log("error fetching profile data", error)
        return NextResponse.json("Failed to fetch profile data", { status: 500 });
    }




}