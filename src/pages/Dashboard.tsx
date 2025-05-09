
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import ModuleCard from '@/components/dashboard/module-card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  CreditCard,
  Gift,
  Heart,
  Book,
  Calendar,
  MapPin,
  MessageSquare,
  BadgeDollarSign,
  Coins
} from 'lucide-react';

const Dashboard = () => {
  const [progress, setProgress] = useState(65);
  
  return (
    <DashboardLayout title="Tableau de bord">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="bg-dtc-blue text-white p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-lg font-medium">Bonjour, Amadou!</h2>
              <p className="text-sm text-white/80">Abonnement Premium</p>
            </div>
            <Button className="bg-dtc-orange text-white hover:bg-dtc-orange/90 text-xs h-8">
              Renouveler
            </Button>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm">Cotisation mensuelle</p>
              <p className="text-sm font-medium">65%</p>
            </div>
            <Progress value={progress} className="h-2 bg-white/30" />
            <p className="text-xs mt-2 text-white/80">
              Prochain paiement: 3,500 FCFA • 15 mai 2025
            </p>
          </div>
        </div>
        
        {/* Points Section */}
        <div className="bg-gradient-to-r from-dtc-sky to-blue-400 p-4 rounded-lg text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Vos points Driver Market</p>
              <h2 className="text-3xl font-bold">1,250</h2>
            </div>
            <Button className="bg-white text-dtc-sky hover:bg-white/90 h-9">
              Échanger
            </Button>
          </div>
        </div>
        
        {/* Modules Grid */}
        <div>
          <h2 className="text-lg font-medium mb-4">Services</h2>
          <div className="grid grid-cols-2 gap-4">
            <ModuleCard 
              title="Paiement" 
              description="Gérez vos cotisations et paiements" 
              icon={<CreditCard className="h-5 w-5 text-dtc-blue" />}
              to="/payment"
            />
            
            <ModuleCard 
              title="Récompenses" 
              description="Échangez vos points contre des produits" 
              icon={<Gift className="h-5 w-5 text-dtc-orange" />}
              to="/rewards"
            />
            
            <ModuleCard 
              title="Crédits" 
              description="Demandez des crédits et microfinance" 
              icon={<Coins className="h-5 w-5 text-dtc-sky" />}
              to="/credits"
            />
            
            <ModuleCard 
              title="Santé" 
              description="Accédez à votre couverture sanitaire" 
              icon={<Heart className="h-5 w-5 text-red-500" />}
              to="/health"
            />
            
            <ModuleCard 
              title="Formation" 
              description="Programmes de formation continue" 
              icon={<Book className="h-5 w-5 text-purple-500" />}
              to="/education"
            />
            
            <ModuleCard 
              title="Loterie" 
              description="Participez aux tirages et gagnez" 
              icon={<Calendar className="h-5 w-5 text-dtc-green" />}
              to="/lottery"
            />
            
            <ModuleCard 
              title="Market Map" 
              description="Localisez les stands Driver Market" 
              icon={<MapPin className="h-5 w-5 text-dtc-blue" />}
              to="/map"
            />
            
            <ModuleCard 
              title="Assistance" 
              description="Contactez notre support client" 
              icon={<MessageSquare className="h-5 w-5 text-dtc-gray" />}
              to="/support"
            />
          </div>
        </div>
        
        {/* Upcoming Payment */}
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Prochaine cotisation</p>
              <h3 className="font-medium">3,500 FCFA</h3>
              <p className="text-xs text-gray-500">15 mai 2025</p>
            </div>
            <Button className="bg-dtc-blue text-white hover:bg-dtc-blue/90">
              Payer maintenant
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
