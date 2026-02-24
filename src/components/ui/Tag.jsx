export default function Tag({ children, className = "" }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-sm glass text-text-secondary border border-val-border ${className}`}>
      {children}
    </span>
  );
}
