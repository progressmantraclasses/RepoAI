// import * as SelectPrimitive from "@radix-ui/react-select";

// export function Select({ children, className, ...props }) {
//   return <SelectPrimitive.Root className={`relative ${className}`} {...props}>{children}</SelectPrimitive.Root>;
// }



import * as SelectPrimitive from "@radix-ui/react-select";

export function Select({ children, className, ...props }) {
  return <SelectPrimitive.Root className={`relative ${className}`} {...props}>{children}</SelectPrimitive.Root>;
}

export function SelectTrigger({ children, className, ...props }) {
  return <SelectPrimitive.Trigger className={`border rounded px-4 py-2 ${className}`} {...props}>{children}</SelectPrimitive.Trigger>;
}

export function SelectValue({ className, ...props }) {
  return <SelectPrimitive.Value className={className} {...props} />;
}

export function SelectContent({ children, className }) {
  return <SelectPrimitive.Content className={`absolute bg-white shadow-md rounded ${className}`}>{children}</SelectPrimitive.Content>;
}

export function SelectItem({ children, className, ...props }) {
  return <SelectPrimitive.Item className={`px-4 py-2 hover:bg-gray-200 ${className}`} {...props}>{children}</SelectPrimitive.Item>;
}
