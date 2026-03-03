import { ArrowBigLeftDashIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/kit/tooltip";
import { Button, buttonVariants } from "./ui/kit/button";
import { Link } from "react-router";




interface ButtonLinkProps {
    url: string;
    label: string;
    tooltipText: string;
}

export function ButtonLink({
    url,
    label,
    tooltipText
}: ButtonLinkProps) {
    return (
        <Tooltip>
            <TooltipTrigger
                render={
                    <Link to={url}
                        className={buttonVariants({ variant: 'ghost', size: 'xs' })}
                    >
                        <ArrowBigLeftDashIcon />
                        {label}
                    </Link>
                }
            >
            </TooltipTrigger>
            <TooltipContent>
                <p>{tooltipText}</p>
            </TooltipContent>
        </Tooltip>
    )
}