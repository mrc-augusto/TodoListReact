import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "./Text";

export const badgeVariants = cva('inline-flex items-center justify-center rounded-full',{
  variants:{
    variant:{
      secondary: 'bg-pink-light ',
      primary: 'bg-green-light '
    },
    size:{
      sm: 'py-0.5 px-2'
    }
  },
  defaultVariants:{
    variant: 'primary',
    size: 'sm'
  }
})

export const badgeTextVariants = cva('',{
  variants: {
    variant: {
      primary: 'text-green-dark',
      secondary: 'text-pink-dark'
    }
  },
  defaultVariants:{
    variant: 'primary'
  }
})
  
interface BadgeProps 
  extends React.ComponentProps<'div'>, 
  VariantProps<typeof badgeVariants>{}

export function Badge({
  variant,
  size, 
  className, 
  children, 
  ...props
}: BadgeProps){
  return(
    <div className={badgeVariants({variant, size, className})} {...props}>
      <Text className={badgeTextVariants({variant})}>
        {children}
      </Text>
    </div>
  )
}