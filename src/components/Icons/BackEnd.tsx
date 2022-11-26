import type { IconProps } from "./types"

export default function IBackEnd({ size, color, strokeWidth, className }: IconProps) {
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-server-cog"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.25"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="3" y="4" width="18" height="8" rx="3"></rect>
        <path d="M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5"></path>
        <circle cx="18.001" cy="18" r="2"></circle>
        <path d="M18.001 14.5v1.5"></path>
        <path d="M18.001 20v1.5"></path>
        <path d="M21.032 16.25l-1.299 .75"></path>
        <path d="M16.27 19l-1.3 .75"></path>
        <path d="M14.97 16.25l1.3 .75"></path>
        <path d="M19.733 19l1.3 .75"></path>
        <path d="M7 8v.01"></path>
        <path d="M7 16v.01"></path>
      </svg>
    </svg>
  )
}
