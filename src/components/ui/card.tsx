interface CardProps {
  children: React.ReactNode;
  className?: string;
}


export function Card({ children, className }: CardProps) {
  return <div className={`Card shadow-md p-4 rounded-md border border-opacity-50 border-primary ${className}`}>{children}</div>;
}

export function CardIcon({ children }: { children: React.ReactNode }) {
  return <div className="CardIcon">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <div className="font-black w-full text-center CardTitle mb-3 text-primary text-xl">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="text-center CardContent text-secondary">{children}</div>;
}
