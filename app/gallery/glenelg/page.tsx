import { properties } from "@/lib/properties"
import { GlenelgTransformationView } from "@/components/gallery/GlenelgTransformationView"
import { notFound } from "next/navigation"

export default function GlenelgTransformationPage() {
  const property = properties.find((p) => p.slug === "cosy-glenelg-getaway")

  if (!property) {
    notFound()
  }

  return <GlenelgTransformationView property={property} />
}
