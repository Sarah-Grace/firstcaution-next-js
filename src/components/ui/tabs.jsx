"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center transition-all focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-primary pt-0 pr-[34px] pb-[14px] pl-[34px] border-0 border-b-0 relative text-grey-2 font-medium bg-transparent data-[state=active]:after:h-[3px] data-[state=active]:after:contents data-[state=active]:after:w-full data-[state=active]:after:bg-primary data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:block data-[state=active]:after:rounded-t-[10px]",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-[50px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
