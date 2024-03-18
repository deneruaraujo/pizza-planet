import { SuccessCheckout } from "@/src/components/checkout/SuccessCheckout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compra Finalizada",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function page() {
  return (
    <SuccessCheckout />
  )
}