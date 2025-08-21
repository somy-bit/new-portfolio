
import {  NextResponse } from 'next/server'
import { client } from '@/lib/sanityClient'

export type Experience = {
    title: string;
    company: string;
    date: string;
    accomplishments: string[]
}



export async function GET() {



    try {

        const query = `
  *[_type == "experience"]{
    _id,
    title,
    company,
    location,
    date,
    accomplishments[]
  }
`;

        const experiences = await client.fetch(query)


        console.log("experience", experiences)

        return NextResponse.json(experiences)





    } catch (error) {
        console.error('Error reading or parsing file:', error)
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
    }

}