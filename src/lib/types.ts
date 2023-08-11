type ButtonIconEnum = 'burger' | 'close' | 'plus'
type ButtonTypeEnum = 'accordion' | 'link' | 'primary' | 'regular' | 'stripped' | 'tab'
type HeadingLevelEnum = '1' | '2' | '3'
type TextSizeEnum = 'smallest' | 'smaller' | 'regular' | 'subtitle'


interface HeadingProps {
  children: React.ReactNode,
  level: HeadingLevelEnum,
  padded?: boolean,
  size?: TextSizeEnum,
}

interface ButtonProps {
  children?: React.ReactNode,
  controlledID?: string,
  // handleClick: () => void,
  icon?: ButtonIconEnum,
  id?: string,
  isActive?: boolean,
  isExpandable?: boolean,
  title: string
  type: ButtonTypeEnum,
  wrap?: keyof JSX.IntrinsicElements,
}


export type {
  ButtonProps,
  HeadingProps
}