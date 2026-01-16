
import React from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Settings, LogOut, CreditCard, User, Bell } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title = "Dashboard" 
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    // Logique de déconnexion à implémenter
    navigate('/');
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[280px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle>Caresse</SheetTitle>
            <SheetDescription>Cadre d'Accompagnement et d'Entraide pour la Sécurité Socio-Économique</SheetDescription>
          </SheetHeader>
          <div className="py-6">
            <div className="bg-dtc-light p-4 rounded-lg mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-dtc-blue flex items-center justify-center text-white">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Amadou Koné</h3>
                  <p className="text-sm text-gray-500">Premium</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-white p-2 rounded-md text-center">
                  <p className="text-xs text-gray-500">Points</p>
                  <p className="font-medium">1,250</p>
                </div>
                <div className="bg-white p-2 rounded-md text-center">
                  <p className="text-xs text-gray-500">Solde</p>
                  <p className="font-medium">2,500 FCFA</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" onClick={() => {
                navigate('/profile');
                setOpen(false);
              }}>
                <User className="mr-2 h-4 w-4" />
                <span>Mon Profil</span>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" onClick={() => {
                navigate('/payment');
                setOpen(false);
              }}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Paiements</span>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" onClick={() => {
                navigate('/notifications');
                setOpen(false);
              }}>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" onClick={() => {
                navigate('/settings');
                setOpen(false);
              }}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Paramètres</span>
              </Button>
            </div>
            
            <div className="mt-10 pt-4 border-t">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      
      <MobileLayout 
        title={title} 
        showMenu={true} 
        onMenuClick={() => setOpen(true)}
      >
        {children}
      </MobileLayout>
    </>
  );
};

export default DashboardLayout;
