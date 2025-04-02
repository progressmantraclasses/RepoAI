// export function Card({ children, className }) {
//     return <div className={`border rounded-lg p-4 shadow-sm ${className}`}>{children}</div>;
//   }
  


export function Card({ children, className }) {
    return <div className={`border rounded-lg p-4 shadow-sm ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ children, className }) {
    return <div className={`border-b p-4 ${className}`}>{children}</div>;
  }
  
  export function CardTitle({ children, className }) {
    return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
  }
  
  export function CardDescription({ children, className }) {
    return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  