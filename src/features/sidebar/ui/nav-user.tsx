import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@/shared/ui/kit/avatar"
import { Button } from "@/shared/ui/kit/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/kit/tooltip"
import { LogOutIcon } from "lucide-react"
import { useNavigate } from "react-router"

export function NavUser({
  userString,
}: {
  userString: string
}) {
  const user = JSON.parse(userString)

  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear()
    navigate('/auth/login')
  }

  return (
    <div className="flex gap-2 items-center bg-muted/80 rounded-lg p-2 border">
      <Avatar>
        <AvatarFallback>IIS</AvatarFallback>
        <AvatarBadge className="bg-green-800 dark:bg-green-600" />
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user.login}</span>
        <span className="truncate text-xs">Доступ {user.access}го уровня.</span>
      </div>
      <Tooltip>
        <TooltipTrigger render={
          <Button
            variant='link'
            size='icon-sm'
            className='ml-auto'
            onClick={logout}
          >
            <LogOutIcon />
          </Button>
        }
        />
        <TooltipContent side="top" align="start">
          <p>Нажмите, чтобы выйти из ИИС</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
