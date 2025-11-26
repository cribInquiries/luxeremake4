"use server"

export async function getArticle(id: string) {
  return {
    success: false,
    error: "Article not found. Please connect your database.",
    data: null,
  }
}
