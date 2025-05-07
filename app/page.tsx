"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Icons
import { Linkedin, X, ArrowRight, Lock, Github, Mail } from "lucide-react"

// Types
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  className: string;
}

// Constants
const SITE_INFO = {
  name: "Barrezueta.me",
  url: "https://barrezueta.me",
  email: "Anthony@Barrezueta.me",
  currentYear: new Date().getFullYear(),
}

// Custom Fiverr icon component
const FiverrIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 1.5H13a.75.75 0 0 1 .75.75v1.5h-3v-1.5a.75.75 0 0 1 .75-.75h-.25Zm-1.5 0v3h3v9.75a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V1.5H11v1.5h-1.5V1.5h.25ZM6.25 6a.75.75 0 1 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" />
  </svg>
)

// Social media links configuration
const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anthonybarrezueta/",
    icon: <Linkedin className="h-4 w-4" />,
    className: "bg-blue-900/30 hover:bg-blue-800/50 border-blue-900/50 text-blue-300"
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/anthonybarc",
    icon: <FiverrIcon className="h-4 w-4" />,
    className: "bg-green-900/30 hover:bg-green-800/50 border-green-900/50 text-green-300"
  },
  {
    name: "GitHub",
    url: "https://github.com/AnthonyBasdfg",
    icon: <Github className="h-4 w-4" />,
    className: "bg-slate-800/50 hover:bg-slate-700/50 border-slate-700/50 text-slate-300"
  },
  {
    name: "Email",
    url: `mailto:${SITE_INFO.email}`,
    icon: <Mail className="h-4 w-4" />,
    className: "bg-purple-900/30 hover:bg-purple-800/50 border-purple-900/50 text-purple-300"
  }
]

// Component for numeric keypad
const KeyPad = ({ onKeyPress }: { onKeyPress: (value: string) => void }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <Button
          key={num}
          variant="outline"
          className="h-14 text-xl bg-slate-800 hover:bg-slate-700 border-slate-700"
          onClick={() => onKeyPress(num.toString())}
        >
          {num}
        </Button>
      ))}
      <Button
        variant="outline"
        className="h-14 text-xl bg-red-900/40 hover:bg-red-800/60 border-red-900/60 text-red-400"
        onClick={() => onKeyPress("clear")}
      >
        <X className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="h-14 text-xl bg-slate-800 hover:bg-slate-700 border-slate-700"
        onClick={() => onKeyPress("0")}
      >
        0
      </Button>
      <Button
        variant="outline"
        className="h-14 text-xl bg-emerald-900/40 hover:bg-emerald-800/60 border-emerald-900/60 text-emerald-400"
        onClick={() => onKeyPress("submit")}
      >
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

// Component for social links section
const SocialLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {SOCIAL_LINKS.map((link) => (
        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            variant="outline"
            className={`w-full ${link.className}`}
          >
            {link.icon}
            <span className="sr-only md:not-sr-only md:ml-2 md:inline-block">{link.name}</span>
          </Button>
        </Link>
      ))}
    </div>
  )
}

// Separating the interactive component (Client Component)
const PinEntrySection = () => {
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [shake, setShake] = useState(false)
  
  const handleKeyPress = (value: string) => {
    if (value === "clear") {
      setPin("")
      setError("")
    } else if (value === "submit") {
      if (pin.length !== 4) {
        setError("Oops! You must enter exactly 4 digits.")
        triggerShakeAnimation()
      } else {
        setError("Oops! The PIN is incorrect. Please try again or contact the administrator.")
        triggerShakeAnimation()
        setPin("")
      }
    } else {
      if (pin.length < 4) {
        setPin((prev) => prev + value)
        setError("")
      }
    }
  }
  
  const triggerShakeAnimation = () => {
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  // Easter egg check
  useEffect(() => {
    if (pin === "DontExist") {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        setPin("")
      }, 3000)
    }
  }, [pin])

  return (
    <>
      {/* Success notification */}
      <AnimatePresence>
        {showSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-8 p-4 bg-green-500/20 rounded-lg border border-green-500/30"
          >
            <p className="text-green-400 font-medium">You found the easter egg! 🎉</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="space-y-6">
        <div className="text-slate-300 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="h-4 w-4 text-yellow-500" />
            <p>Restricted Area - Authorized Personnel Only</p>
          </div>
          <p className="text-sm text-slate-400">Enter access code to continue:</p>
        </div>

        <motion.div
          animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <Input
            type="password"
            value={pin}
            readOnly
            className="text-center text-2xl h-14 bg-slate-900 border-slate-700 focus:border-yellow-500/50"
          />

          {/* Keypad component */}
          <KeyPad onKeyPress={handleKeyPress} />

          {/* Error message */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm text-center"
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      </div>
    </>
  )
}

// Main page component (Server Component)
export default function ConstructionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-slate-800 bg-slate-950/60 backdrop-blur-sm">
          {/* Header section */}
          <CardHeader className="text-center space-y-1">
            <div className="mx-auto mb-4">
              <Image src="/icon.png" alt="Logo" width={80} height={80} className="rounded-full" priority />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              <Link href={SITE_INFO.url} className="hover:text-slate-300 transition-colors">
                {SITE_INFO.name}
              </Link>
            </CardTitle>
            <p className="text-slate-400 text-lg">Website Under Construction</p>
          </CardHeader>
          
          {/* PIN Entry section */}
          <CardContent>
            <PinEntrySection />
          </CardContent>

          {/* Social links section */}
          <CardFooter className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-800">
            <h3 className="text-sm font-medium text-slate-400 mb-2">Connect with me</h3>
            
            <SocialLinks />
            
            <p className="text-xs text-center text-slate-500 mt-2">
              Connect with me on social media or hire my services
            </p>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-slate-500 text-sm"
      >
        © {SITE_INFO.currentYear} {SITE_INFO.name} • All rights reserved
      </motion.p>
    </main>
  )
}
