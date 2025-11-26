import { properties } from "@/lib/properties"
import { GlenelgTransformationView } from "@/components/gallery/GlenelgTransformationView"
import { notFound } from "next/navigation"

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = properties.find((p) => p.slug === params.slug)

  if (!property) {
    notFound()
  }

  // For now, only Glenelg has the transformation view
  if (property.slug === "cosy-glenelg-getaway") {
    return <GlenelgTransformationView property={property} />
  }

  // For other properties, show a simple detail page
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-600">{property.description}</p>
    </div>
  )
}
