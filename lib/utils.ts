import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [ 
  "DC262",
  "D9770",
  "059669",
  "7C3AED",
  "DB2777"
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number){
  return COLORS[connectionId% COLORS.length]
}
