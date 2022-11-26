import type { IconProps } from "./types"

export default function IResume({ size, color, strokeWidth, className }: IconProps) {
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
      stroke-linejoin="round"
      class={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="5" y="3" width="14" height="18" rx="2"></rect>
      <line x1="9" y1="7" x2="15" y2="7"></line>
      <line x1="9" y1="11" x2="15" y2="11"></line>
      <line x1="9" y1="15" x2="13" y2="15"></line>
    </svg>
  )
}
