export function Badge({ children, className }) {
    return <span className={`inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded ${className}`}>
      {children}
    </span>;
  }
  