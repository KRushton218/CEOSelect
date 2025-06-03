"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      // Submit logic here
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-black to-neutral-900 text-neutral-100 flex items-center justify-center px-6 relative">
      <div className="w-full max-w-5xl flex flex-col md:flex-row md:items-stretch md:justify-between gap-12 py-24">
        <div className="flex-1 flex flex-col justify-center space-y-6 md:max-w-md">
          <div className="h-20 md:h-24 w-auto">
            <Logo />
          </div>
          <h2 className="text-lg text-neutral-300 font-medium tracking-tight">
  Shape what comes next.
</h2>
<div className="text-sm md:text-base text-neutral-400 space-y-3 leading-snug">
  <p>
    CEO Select is a private, invitation-only group built in partnership with a cutting-edge venture studio and select venture capital partners.
  </p>
  <p>
    Members gain access to private strategy briefings, curated peer forums, and early-stage ventures not available elsewhere.
  </p>
  <p>
    Rolling applications. Apply starting 6/10.
  </p>
</div>
        </div>

        <div className="hidden md:block w-px bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-800 opacity-70"></div>

        <div className="flex-1 flex flex-col justify-center w-full md:w-80">
          <div className="relative">
            <motion.div
              className="absolute inset-[-20px] rounded-2xl blur-2xl bg-gray-500/40 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10"
            >
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="w-full space-y-4 p-6 rounded-md border border-neutral-800 bg-neutral-900/70 backdrop-blur-md shadow-xl"
                >
                  <h3 className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-2">
                    Request Early Access
                  </h3>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:ring-0"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-neutral-200 hover:ring-2 hover:ring-white hover:ring-offset-1 transition-all duration-300 font-medium"
                  >
                    Request Early Access
                  </Button>
                  <div className="text-xs font-mono text-neutral-600 italic text-center pt-2">
                    Private. No spam. Unsubscribe anytime.
                  </div>
                </form>
              ) : (
                <div className="w-full flex items-center justify-center">
                  <p className="text-neutral-300 text-center">Thank you. You'll hear from us soon.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}