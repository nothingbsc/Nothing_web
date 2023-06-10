"use client"
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Statistics from '@/components/Statistics'
import Roadmap from '@/components/Roadmap'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    bg: "#000000",
  },
})

export default function Home() {
  return (

    <>
      <Hero />
      <Features  />
      <Statistics  />
      <Roadmap /> 
     

    </>
  )
}
