import type { IconProps } from "./types"

export default function IFrontEnd({ size, color, strokeWidth }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      font-size={size || "20px"}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width={strokeWidth || 2}
      stroke={color || "currentColor"}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="4" width="18" height="12" rx="1"></rect>
      <path d="M7 20h10"></path>
      <path d="M9 16v4"></path>
      <path d="M15 16v4"></path>
      <path d="M9 12v-4"></path>
      <path d="M12 12v-1"></path>
      <path d="M15 12v-2"></path>
      <path d="M12 12v-1"></path>
    </svg>
  )
}
