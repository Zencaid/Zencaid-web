'use client'

import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function InfoCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-[90%] max-w-xl mx-auto ThecheifeCaro " >
      <Carousel setApi={setApi} className="relative rounded-[20px]">
        <CarouselContent>
          {/* Slide 1 */}
          <CarouselItem>
            <div className="h-60 bg-blue-100 p-6 rounded-[30px] flex flex-col justify-center ">
              <h2 className="text-xl font-bold mb-2 themFats">Fatima Abdullahi</h2>
              <p style={{margin:'10px 0', fontWeight:"600"}}>Occupation: University Student</p>
              <p className="text-sm text-gray-700">
              “I booked an appointment with a gynecologist using the hospital app, and it was the easiest experience I’ve had with any healthcare service. No paperwork, no stress just a few clicks.”
              </p>
              <div className="flex gap-2 my-4">
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStarHalf} color="gold"/>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem>
            <div className="h-60 bg-green-100 p-6 rounded-[30px] flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2 themFats2">Chinelo Okafor</h2>
              <p style={{margin:'10px 0', fontWeight:"600"}}>Occupation: Banker</p>
              <p className="text-sm text-gray-700">
              “I used to spend hours waiting in line just to book an appointment. But with the hospital’s new software, I was able to schedule my visit from home in less than 3 minutes. I even received reminders before the appointment — it was smooth, fast, and stress-free.
              </p>
               <div className="flex gap-2 my-4">
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStarHalf} color="gold"/>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem>
            <div className="h-60 bg-yellow-100 p-6 rounded-[30px] flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2 themFats">Emeka Johnson</h2>
              <p style={{margin:'10px 0', fontWeight:"600"}}>Occupation:Software Developer</p>
              <p className="text-sm text-gray-700">
               “This software changed everything. I got to speak with a specialist through the virtual consultation option without even stepping into the hospital. The process was simple, and I felt heard and cared for.”

              </p>
               <div className="flex gap-2 my-4">
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
                <FontAwesomeIcon icon={faStar} color="gold"/>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

     
    </div>
  )
}