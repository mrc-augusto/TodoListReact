import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

export const iconVariants = cva('',{
  variants:{
    animate:{
      true: 'animate-spin',
      false: ''
    }
  },
  defaultVariants: {
    animate: false
  }
})

interface IconProps 
  extends React.ComponentProps<'svg'>, 
    VariantProps<typeof iconVariants>{
  svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export function Icon({svg: SvgComponent, animate, className, ...props}: IconProps){
  return <SvgComponent 
    className={iconVariants({animate, className})} 
    {...props} 
  />
}