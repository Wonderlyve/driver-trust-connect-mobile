
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
}

const ModuleCard = ({
  title,
  description,
  icon,
  to,
  bgColor = 'bg-white',
  textColor = 'text-dtc-dark',
  disabled = false
}: ModuleCardProps) => {
  const cardContent = (
    <div className={cn(
      "module-card flex flex-col gap-2 h-full",
      bgColor,
      textColor,
      disabled && "opacity-50 cursor-not-allowed"
    )}>
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-full bg-dtc-light">
          {icon}
        </div>
        <h3 className="font-medium text-sm">{title}</h3>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
  
  if (disabled) {
    return cardContent;
  }
  
  return (
    <Link to={to} className="block">
      {cardContent}
    </Link>
  );
};

export default ModuleCard;
