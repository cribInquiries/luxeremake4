"use server"

import type { Article } from "@/lib/types/article"

export async function getAllArticles(limit = 10, offset = 0) {
  const mockArticles: Article[] = []

  return {
    success: true,
    data: mockArticles,
    total: 0,
  }
}
