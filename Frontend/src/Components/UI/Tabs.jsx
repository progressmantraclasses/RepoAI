// import * as TabsPrimitive from "@radix-ui/react-tabs";

// export function Tabs({ children, className, ...props }) {
//   return <TabsPrimitive.Root className={`flex ${className}`} {...props}>{children}</TabsPrimitive.Root>;
// }


import * as TabsPrimitive from "@radix-ui/react-tabs";

export function Tabs({ children, className, ...props }) {
  return <TabsPrimitive.Root className={`flex flex-col ${className}`} {...props}>{children}</TabsPrimitive.Root>;
}

export function TabsList({ children, className }) {
  return <TabsPrimitive.List className={`flex space-x-2 border-b ${className}`}>{children}</TabsPrimitive.List>;
}

export function TabsTrigger({ children, className, ...props }) {
  return <TabsPrimitive.Trigger className={`px-4 py-2 rounded ${className}`} {...props}>{children}</TabsPrimitive.Trigger>;
}

export function TabsContent({ children, className, ...props }) {
  return <TabsPrimitive.Content className={`p-4 ${className}`} {...props}>{children}</TabsPrimitive.Content>;
}
