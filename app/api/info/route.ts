
import { NextRequest, NextResponse } from 'next/server'
import {client} from '@/lib/sanityClient'

export type ProjectInfo = {
    _id: number;
    title: string;
    description: string;
    techs: Tech[];
    viewUrl: string;
    imageUrl: string;
    link: string;
    properties:string[];
}

export type Tech = {
    name: string;
    icon: string;
};

export async function GET(req: NextRequest) {


    try {
        const query =`
    *[_type == "project"]{
      _id,
      title,
      description,
      link,
      "viewUrl": view.asset->url,
      "imageUrl": image.asset->url,
      techs[]{
        name,
        icon
      },
      properties[]
    } | order(title asc)
  `

        const products = await client.fetch(query) as ProjectInfo[]
        

        const field = req.nextUrl.searchParams?.get('field')
        const value = req.nextUrl.searchParams?.get('value')
        if (!field || !value) {
            return NextResponse.json(products)
        }

        if (field && value) {
            const filtered = products.filter(item => (item._id).toString() === value)
            
            return NextResponse.json(filtered)
        }
       
       
    } catch (error) {
        console.error('Error reading or parsing file:', error)
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
    }

}