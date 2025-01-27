import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {

        const  body  = await req.json()
        const newIssue = await prisma.issue.create({ data: { title: body.title, description: body.description } })
        return NextResponse.json(newIssue, { status: 201 })

    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)

    }
}