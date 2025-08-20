import React from 'react'
import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

export type ProjectInfo = {
    id: number;
    title: string;
    description: string;
    techs: Tech[];
    view: string;
    image: string;
    link: string;
    properties:string[];
}

export type Tech = {
    name: string;
    icon: string;
};

export  function GET(req: NextRequest) {

    const filePath = path.join(process.cwd(), 'data', 'data.json')

    try {
        const data = fs.readFileSync(filePath, 'utf8')
        const jsonData: ProjectInfo[] = JSON.parse(data)

        console.log("jsonData", jsonData)
        const field = req.nextUrl.searchParams?.get('field')
        const value = req.nextUrl.searchParams?.get('value')
        if (!field || !value) {
            return NextResponse.json(jsonData)
        }

        if (field && value) {
            const filtered = jsonData.filter(item => String((item as any)[field]) === value)
            return NextResponse.json(filtered)
        }
       
       
    } catch (error) {
        console.error('Error reading or parsing file:', error)
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
    }

}