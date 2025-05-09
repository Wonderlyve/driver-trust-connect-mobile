
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { User, Home, Settings, Menu } from 'lucide-react';
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
    toast({
      title: "Notifications",
      description: "Fonctionnalité à venir prochainement",
    });
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
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
