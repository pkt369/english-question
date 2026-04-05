import { Link } from 'react-router';

interface BackButtonProps {
  to: string;
  label: string;
}

export function BackButton({ to, label }: BackButtonProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 px-4 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
    >
      <span>&larr;</span>
      <span>{label}</span>
    </Link>
  );
}
