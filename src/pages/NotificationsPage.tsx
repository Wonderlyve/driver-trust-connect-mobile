
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, CreditCard, Gift, Coins, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const NotificationsPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  const allNotifications = [
    {
      id: 1,
      title: "Paiement confirmé",
      message: "Votre paiement de cotisation de 3,500 CDF a été confirmé.",
      date: "Aujourd'hui, 10:30",
      type: "payment",
      read: false,
      icon: <CreditCard className="h-5 w-5 text-dtc-blue" />
    },
    {
      id: 2,
      title: "Points ajoutés",
      message: "Vous avez gagné 50 points Driver Market pour votre cotisation d'aujourd'hui.",
      date: "Aujourd'hui, 10:30",
      type: "rewards",
      read: false,
      icon: <Gift className="h-5 w-5 text-dtc-orange" />
    },
    {
      id: 3,
      title: "Tirage de loterie",
      message: "Le tirage quotidien aura lieu à 20:00. Votre participation est confirmée.",
      date: "Aujourd'hui, 08:15",
      type: "lottery",
      read: false,
      icon: <Calendar className="h-5 w-5 text-dtc-green" />
    },
    {
      id: 4,
      title: "Mise à jour de crédit",
      message: "Votre demande de crédit de 50,000 CDF a été approuvée.",
      date: "Hier, 14:20",
      type: "credits",
      read: true,
      icon: <Coins className="h-5 w-5 text-dtc-sky" />
    },
    {
      id: 5,
      title: "Échéance de paiement",
      message: "Rappel: Votre prochaine cotisation est prévue pour demain.",
      date: "Hier, 09:45",
      type: "payment",
      read: true,
      icon: <AlertCircle className="h-5 w-5 text-dtc-red" />
    }
  ];
  
  const getFilteredNotifications = () => {
    if (selectedTab === 'all') {
      return allNotifications;
    }
    return allNotifications.filter(notification => notification.type === selectedTab);
  };
  
  const markAllAsRead = () => {
    // Logic to mark all notifications as read
  };
  
  return (
    <DashboardLayout title="Notifications">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Vos notifications</h2>
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Tout marquer comme lu
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="payment">Paiements</TabsTrigger>
            <TabsTrigger value="rewards">Récompenses</TabsTrigger>
            <TabsTrigger value="credits">Crédits</TabsTrigger>
          </TabsList>
          
          <TabsContent value={selectedTab}>
            <Card>
              <CardContent className="p-0">
                {getFilteredNotifications().length > 0 ? (
                  <div className="divide-y">
                    {getFilteredNotifications().map(notification => (
                      <div 
                        key={notification.id} 
                        className={`p-4 ${notification.read ? '' : 'bg-blue-50'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                            {notification.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className={`font-medium ${notification.read ? '' : 'text-dtc-blue'}`}>
                                {notification.title}
                              </h3>
                              <span className="text-xs text-gray-500">{notification.date}</span>
                            </div>
                            <p className="text-sm mt-1 text-gray-600">{notification.message}</p>
                            
                            {!notification.read && (
                              <div className="mt-2 flex justify-end">
                                <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Marquer comme lu
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Bell className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">Aucune notification dans cette catégorie</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;
