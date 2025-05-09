
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { User, Home, Settings, Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  showMenu?: boolean;
  onMenuClick?: () => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  title = "Driver Trust Connect",
  showBackButton = false,
  showMenu = true,
  onMenuClick
}) => {
  const { toast } = useToast();
  
  const handleNotificationClick = () => {
    // Navigate to notifications page instead of showing a toast
    window.location.href = '/notifications';
  };
  
  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="mobile-header">
        <div className="flex items-center gap-2">
          {showMenu && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onMenuClick} 
              className="text-white p-1 hover:bg-dtc-blue/30"
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleNotificationClick}
          className="text-white p-1 hover:bg-dtc-blue/30"
        >
          <Bell className="h-6 w-6" />
        </Button>
      </header>
      
      {/* Content */}
      <main className="mobile-content animate-fade-in">
        {children}
      </main>
      
      {/* Footer Navigation */}
      <footer className="mobile-footer">
        <Link to="/dashboard" className="flex flex-col items-center p-1">
          <Home className="h-6 w-6 text-dtc-blue" />
          <span className="text-xs">Accueil</span>
        </Link>
        <Link to="/payment" className="flex flex-col items-center p-1">
          <CreditCard className="h-6 w-6 text-dtc-gray" />
          <span className="text-xs">Paiement</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center p-1">
          <User className="h-6 w-6 text-dtc-gray" />
          <span className="text-xs">Profil</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center p-1">
          <Settings className="h-6 w-6 text-dtc-gray" />
          <span className="text-xs">Paramètres</span>
        </Link>
      </footer>
    </div>
  );
};

export default MobileLayout;

function CreditCard(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
