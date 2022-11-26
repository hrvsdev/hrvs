import type { Component } from "solid-js"
import type { IconProps } from "../../Icons/types"

export interface IHeaderButton {
  href: string
  name: string
  Icon: Component<IconProps>
}
