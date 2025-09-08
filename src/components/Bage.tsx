import { cva, cx, type VariantProps } from "class-variance-authority";
import { Text } from "./Text";
import { Skeleton } from "./Skeleton";

export const badgeVariants = cva('inline-flex items-center justify-center rounded-full',{
  variants:{
    variant:{
      none: '',
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
      none: '',
      primary: 'text-green-dark',
      secondary: 'text-pink-dark'
    }
  },
  defaultVariants:{
    variant: 'primary'
  }
})

export const badgeSkeletonVariants = cva('',{
  variants:{
    size:{
      sm: 'h-6 w-6'
    }
  },
  defaultVariants:{
    size: 'sm'
  }
})
  
interface BadgeProps 
  extends React.ComponentProps<'div'>, 
  VariantProps<typeof badgeVariants>{
    loading?: boolean
  }

export function Badge({
  variant,
  size, 
  className, 
  children,
  loading,
  ...props
}: BadgeProps){
  if(loading){
   return(
      <Skeleton 
        rounded='full'
        className={cx(
          badgeVariants({variant: 'none'}),
          badgeSkeletonVariants({size}),
          className
        )}
      />
    ) 
  }
  return(
    <div className={badgeVariants({variant, size, className})} {...props}>
      <Text className={badgeTextVariants({variant})}>
        {children}
      </Text>
    </div>
  )
}