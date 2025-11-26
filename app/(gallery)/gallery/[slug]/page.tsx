import { properties } from "@/lib/data/properties"
import { GlenelgTransformationView } from "@/components/gallery/GlenelgTransformationView"
import { MelbourneStreetTransformationView } from "@/components/gallery/MelbourneStreetTransformationView"
import { ClearviewTransformationView } from "@/components/gallery/ClearviewTransformationView"
import { EnfieldTransformationView } from "@/components/gallery/EnfieldTransformationView"
import { WestBeachTransformationView } from "@/components/gallery/WestBeachTransformationView"
import { SeafordTransformationView } from "@/components/gallery/SeafordTransformationView"
import { ParklandVistaTransformationView } from "@/components/gallery/ParklandVistaTransformationView"
import { SouthTerraceTransformationView } from "@/components/gallery/SouthTerraceTransformationView"
import { notFound } from "next/navigation"

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = properties.find((p) => p.slug === params.slug)

  if (!property) {
    notFound()
  }

  if (property.slug === "melbourne-street-hideaway") {
    return <MelbourneStreetTransformationView property={property} />
  }

  if (property.slug === "cosy-glenelg-getaway") {
    return <GlenelgTransformationView property={property} />
  }

  if (property.slug === "clearview-serene-family-home") {
    return <ClearviewTransformationView property={property} />
  }

  if (property.slug === "enfield-grand-residence") {
    return <EnfieldTransformationView property={property} />
  }

  if (property.slug === "west-beach-getaway") {
    return <WestBeachTransformationView property={property} />
  }

  if (property.slug === "seaford-coastal-residence") {
    return <SeafordTransformationView property={property} />
  }

  if (property.slug === "parkland-vista") {
    return <ParklandVistaTransformationView />
  }

  if (property.slug === "south-terrace-apartment") {
    return <SouthTerraceTransformationView property={property} />
  }

  // For other properties, show a simple detail page
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-600">{property.description}</p>
    </div>
  )
}
