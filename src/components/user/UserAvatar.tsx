import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'

interface Props {
  className?: string | undefined
}
export function UserAvatar({ className }: Props) {
  return (
    <Avatar className={className}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
