"use client"

import { motion } from "framer-motion"

export const ConstructionLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1920"
        version="1.1"
        style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <title>Construction Crane Logo</title>
        <g transform="translate(-64.003373,1024.5581)">
          {/* Crane arm - with animation */}
          <motion.path
            style={{
              fill: "none",
              stroke: "#FFB800",
              strokeWidth: "18",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "4",
              strokeOpacity: "1",
              strokeDasharray: "none",
              transformOrigin: '950px -600px'
            }}
            d="m 744.31206,-525.4826 209.24696,-173.97714 457.97348,164.30633 0,386.93182"
            animate={{ 
              y: [-2, 2, -2],
              rotate: [-0.3, 0.3, -0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          {/* Center tower support */}
          <motion.path
            style={{
              fill: "#3B82F6",
              stroke: "#2563EB",
              strokeWidth: "3",
            }}
            d="m 953.35701,-732.27541 c -6.11568,0.069 -11.60929,5.72067 -11.50526,11.83589 l -13.51072,206.02561 50.29642,0 -13.51071,-206.02561 c 0.10562,-6.20333 -5.5659,-11.90667 -11.76973,-11.83589 z"
          />
          
          {/* Horizontal cable - with animated dashed pattern */}
          <motion.path
            style={{
              fill: "#F59E0B",
              stroke: "#D97706",
              strokeWidth: "3",
              strokeDasharray: "10,5"
            }}
            d="m 956.95032,-497.52305 766.93528,-12.5741 c 6.643,0.0937 12.7532,-5.93041 12.7532,-12.5741 0,-6.6437 -6.1102,-12.66803 -12.7532,-12.57411 l -766.93528,-12.5741 z"
            animate={{ 
              strokeDashoffset: [0, -30]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Main tower structure */}
          <motion.path
            style={{
              fill: "#2563EB",
              fillOpacity: "1",
              stroke: "#1D4ED8",
              strokeWidth: "2"
            }}
            d="m 1338.2435,173.05685 0,430.10298 153.8566,0 0,-430.10298 z m -719.1415,-345.8069 0,775.81774 153.85656,0 0,-775.81774 z m -204.03945,775.84856 153.85656,0 0,-860.15222 -153.85656,0 z m -103.69458,0 50.17242,0 0,-860.15222 -50.17242,0 z m 617.13758,-1125.31248 0,1125.34307 50.18284,0 0,-1125.34307 z m -103.705,1125.3738 50.17241,0 0,-573.470636 -50.17241,0 z m 828.22055,-286.7355 0,286.73532 50.1724,0 0,-286.73532 z m -103.7049,286.73532 50.1829,0 0,-573.470639 -50.1829,0 z m -314.7673,1.8e-4 53.5117,0 0,-860.15108 -53.5117,0 z m -204.0394,0 153.8775,0 0,-860.15108 -153.8775,0 z"
          />
          
          {/* Platform base */}
          <motion.path
            style={{
              fill: "#F59E0B",
              fillOpacity: "1",
              stroke: "#D97706",
              strokeWidth: "3"
            }}
            d="m 619.102,-547.76268 0,84.02452 153.85656,0 0,-84.02452 z"
          />
          
          {/* Crane cabin - with enhanced vertical movement */}
          <motion.path
            style={{
              fill: "#EF4444",
              fillOpacity: "1",
              stroke: "#DC2626",
              strokeWidth: "2"
            }}
            d="m 1338.3009,-341.19281 0,286.775323 20.8615,0 0,-20.290033 39.5799,0 0,20.290033 32.8641,0 0,-20.290033 39.5799,0 0,20.290033 20.8616,0 0,-286.775323 -153.747,0 z"
            animate={{
              y: [-1, 200, 100, -1],
              x: [0, 0, 0, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.6, 1]
            }}
          />
          
          {/* Horizontal support */}
          <motion.path
            style={{
              fill: "#F59E0B",
              fillOpacity: "1",
              stroke: "#D97706", 
              strokeWidth: "3"
            }}
            d="m 956.14928,-547.76268 -189.1438,0 0,50.18285 189.1438,0 z"
          />
          
          {/* Control panels/windows - with animation */}
          <motion.path
            style={{
              fill: "#10B981",
              fillOpacity: "1",
              fillRule: "evenodd",
              stroke: "#059669",
              strokeWidth: "2"
            }}
            d="m 1431.5397,148.2165 39.6064,0 0,39.60642 -39.6064,0 z m -72.3423,0 39.6064,0 0,39.60642 -39.6064,0 z"
            animate={{
              fill: ["#10B981", "#34D399", "#10B981"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Vertical crane cable - connected to the building block */}
          <motion.line
            x1="1400" 
            y1="-500"
            x2="1400"
            y2="-340"
            stroke="#E6B800"
            strokeWidth="3"
            strokeDasharray="10,5"
            animate={{
              y2: [-340, -140, -240, -340],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.6, 1]
            }}
          />

          {/* Animated crane hook/weight - now just the hook */}
          <motion.circle
            cx="1400"
            cy="-500"
            r="15" 
            fill="#FFD700"
            stroke="#E6B800"
            strokeWidth="2"
          />

          {/* Safety blinking light */}
          <motion.circle
            cx="1490"
            cy="-720"
            r="12"
            fill="#FF4500"
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </g>
      </motion.svg>
    </div>
  )
}
