import type { IconProps } from "./types"

export default function IMail({ size, color, strokeWidth, className }: IconProps) {
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
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
  )
}
