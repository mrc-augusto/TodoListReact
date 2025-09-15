import  React from "react"
import { Icon } from "./Icon"
import { cva, type VariantProps } from "class-variance-authority"
import { Text } from "./Text"
import { Skeleton } from "./Skeleton"
import SpinnerIcon from '../assets/icons/Spinner.svg?react'

export const buttonVariants = cva('flex items-center justify-center cursor pointer transition rounded-lg group gap-2',{
  variants:{
    variant:{
      primary: 'bg-gray-200 hover:bg-pink-light'
    },
    size:{
      md: 'h-14 py-4 px-5'
    },
    disabled: {
      true: 'opacity-50 pointer-events-none'
    },
    handling:{
      true: 'pointer-events-none'
    }
  },
  defaultVariants:{
    variant: 'primary',
    size: 'md',
    disabled: false,
    handling: false
  }
})

export const buttonIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-pink-base'
    },
    size: {
      md: 'w-5 h-5'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export const buttonTextVariants = cva('',{
  variants:{
    variant:{
      primary: 'text-gray-400'
    }
  },
  defaultVariants:{
    variant: 'primary'
  }
})

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg']
  loading?: boolean
  handling?: boolean
}

export function Button({
  variant, 
  size,
  disabled,
  className,
  children,
  icon,
  loading,
  handling,
  ...props
}: ButtonProps){
  if(loading){
    return(
      <Skeleton
        className={buttonIconVariants({
          variant,
          size,
          className
        })}
      />
    )
  }
  return(
    <button 
      className={buttonVariants({variant, size, disabled, handling, className})} 
      {...props}
    >
      {
        icon && (
          <Icon 
            svg={handling ? SpinnerIcon : icon} 
            animate={handling}
            className={buttonIconVariants({variant, size})} 
          />
        )
      }
      <Text className={buttonTextVariants({variant})}>
        {children}
      </Text>
    </button>
  )
}