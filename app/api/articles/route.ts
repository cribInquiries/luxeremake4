import { NextResponse, type NextRequest } from "next/server"
import { GoogleGenAI } from "@google/genai"

export async function POST(request: NextRequest) {
  try {
    const { topic } = await request.json()
    if (!topic) {
      return NextResponse.json({ error: "Missing topic." }, { status: 400 })
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })
    const prompt = `
      
      `.trim()

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      temperature: 0.7,
      maxOutputTokens: 700,
    })

    return NextResponse.json({ article: response.text })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    console.error("Article generation error:", error)
    return NextResponse.json({ error: "Failed to generate article.", details: errorMessage }, { status: 500 })
  }
}
