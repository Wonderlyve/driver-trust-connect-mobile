
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Bell, 
  Globe, 
  Moon, 
  Shield, 
  HelpCircle, 
  Info, 
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };
  
  return (
    <DashboardLayout title="Paramètres">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">Paramètres de l'application</h2>
          
          <Card className="p-0">
            <div className="divide-y">
              {/* Notifications settings */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Bell className="h-5 w-5 text-dtc-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Notifications</p>
                    <p className="text-xs text-gray-500">Gérer les paramètres de notification</p>
                  </div>
                </div>
                <div>
                  <Switch id="notifications" defaultChecked />
                </div>
              </div>
              
              {/* Language settings */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-dtc-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Langue</p>
                    <p className="text-xs text-gray-500">Français (Congo)</p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
              
              {/* Dark mode settings */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Moon className="h-5 w-5 text-dtc-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Mode sombre</p>
                    <p className="text-xs text-gray-500">Activer le mode sombre</p>
                  </div>
                </div>
                <div>
                  <Switch id="darkmode" />
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <h2 className="text-lg font-medium mb-4">Sécurité et confidentialité</h2>
          
          <Card className="p-0">
            <div className="divide-y">
              {/* Security settings */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-dtc-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Mot de passe et sécurité</p>
                    <p className="text-xs text-gray-500">Gérer les paramètres de sécurité</p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <h2 className="text-lg font-medium mb-4">Support</h2>
          
          <Card className="p-0">
            <div className="divide-y">
              {/* Help center */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-dtc-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Centre d'aide</p>
                    <p className="text-xs text-gray-500">Questions fréquentes et guides</p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
              
              {/* About */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Info className="h-5 w-5 text-dtc-blue" />
                  </div>
                  <div>
                    <p className="font-medium">À propos</p>
                    <p className="text-xs text-gray-500">Version 1.0.0</p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Separator />
        
        <div>
          <Button 
            variant="outline" 
            className="w-full border-red-300 text-red-500 hover:text-red-700 hover:bg-red-50 flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Déconnexion</span>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
