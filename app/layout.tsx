"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#000000",
      },
    }),
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body ><ChakraProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
        </ChakraProvider></body>
    </html>
  )
}
