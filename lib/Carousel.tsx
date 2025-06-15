// app/page.tsx or a separate component
'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"

export default function ExampleCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full max-w-xl mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="h-48 bg-gray-200 flex items-center justify-center text-xl font-bold">
              Slide 1
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-48 bg-gray-300 flex items-center justify-center text-xl font-bold">
              Slide 2
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-48 bg-gray-400 flex items-center justify-center text-xl font-bold">
              Slide 3
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p className="text-center mt-4 text-sm text-muted-foreground">
        Slide {current} of {count}
      </p>
    </div>
  )
}