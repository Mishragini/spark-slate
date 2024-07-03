import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export interface HintProps{
    label :string;
    children: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset ?: number;
    alignOffSet ?: number
}

export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffSet
}:HintProps) =>{
    return(
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                className="text-white bg-black border-black"
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffSet}
                >
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}