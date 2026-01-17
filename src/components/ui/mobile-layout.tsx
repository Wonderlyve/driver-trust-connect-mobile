
import React, { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, Home, Settings, Menu, Bell, X, Info, Shield, MessageSquare, UserPlus, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  showMenu?: boolean;
  onMenuClick?: () => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  title = "Caesse",
  showBackButton = false,
  showMenu = true,
  onMenuClick
}) => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNotificationClick = () => {
    // Navigate to notifications page
    window.location.href = '/notifications';
  };
  
  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="mobile-header">
        <div className="flex items-center gap-2">
          {showMenu && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white p-1 hover:bg-dtc-blue/30"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-dtc-blue text-white border-r-0 w-64 p-0">
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-14 w-14 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Profile" />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Amadou Koné</p>
                      <p className="text-xs text-white/80">Premium</p>
                    </div>
                  </div>
                  
                  <nav className="space-y-2">
                    <Link to="/dashboard" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <Home size={18} />
                      <span>Tableau de bord</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <User size={18} />
                      <span>Mon profil</span>
                    </Link>
                    <Link to="/payment" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <CreditCard size={18} />
                      <span>Paiement</span>
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <Settings size={18} />
                      <span>Paramètres</span>
                    </Link>
                    <Link to="/register-member" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <UserPlus size={18} />
                      <span>Inscription membre</span>
                    </Link>
                    <Link to="/admin/dashboard" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10 bg-white/5" onClick={() => setIsMenuOpen(false)}>
                      <ShieldCheck size={18} />
                      <span>Administration</span>
                    </Link>
                    
                    <Separator className="my-2 bg-white/20" />
                    
                    <Link to="/about" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <Info size={18} />
                      <span>À propos</span>
                    </Link>
                    <Link to="/contact" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <MessageSquare size={18} />
                      <span>Contact</span>
                    </Link>
                    <Link to="/privacy" className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                      <Shield size={18} />
                      <span>Politique de confidentialité</span>
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleNotificationClick}
            className="text-white p-1 hover:bg-dtc-blue/30"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Avatar className="h-8 w-8 border border-white/20">
              <AvatarImage src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Profile" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>
      
      {/* Content */}
      <main className="mobile-content animate-fade-in">
        {children}
      </main>
      
      {/* Footer Navigation */}
      <footer className="mobile-footer">
        <Link to="/dashboard" className={`flex flex-col items-center p-1 ${location.pathname === '/dashboard' ? 'text-dtc-blue' : 'text-dtc-gray'}`}>
          <Home className="h-5 w-5" />
          <span className="text-xs">Accueil</span>
        </Link>
        <Link to="/payment" className={`flex flex-col items-center p-1 ${location.pathname === '/payment' ? 'text-dtc-blue' : 'text-dtc-gray'}`}>
          <CreditCard className="h-5 w-5" />
          <span className="text-xs">Paiement</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center p-1 ${location.pathname === '/profile' ? 'text-dtc-blue' : 'text-dtc-gray'}`}>
          <User className="h-5 w-5" />
          <span className="text-xs">Profil</span>
        </Link>
        <Link to="/settings" className={`flex flex-col items-center p-1 ${location.pathname === '/settings' ? 'text-dtc-blue' : 'text-dtc-gray'}`}>
          <Settings className="h-5 w-5" />
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
