
import React from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminAnalytics = () => {
  // Users data
  const usersData = [
    { month: 'Jan', count: 45 },
    { month: 'Feb', count: 72 },
    { month: 'Mar', count: 95 },
    { month: 'Avr', count: 124 },
    { month: 'Mai', count: 168 }
  ];

  // Revenue data
  const revenueData = [
    { month: 'Jan', cotisations: 235000, credits: 120000 },
    { month: 'Feb', cotisations: 298000, credits: 145000 },
    { month: 'Mar', cotisations: 342000, credits: 180000 },
    { month: 'Avr', cotisations: 401000, credits: 225000 },
    { month: 'Mai', cotisations: 479000, credits: 265000 }
  ];

  // Subscription data
  const subscriptionData = [
    { name: 'Standard', value: 185 },
    { name: 'Premium', value: 124 },
    { name: 'Basic', value: 95 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // Credits data
  const creditsData = [
    { month: 'Jan', demandes: 28, approuves: 22, rembourses: 15 },
    { month: 'Feb', demandes: 35, approuves: 30, rembourses: 18 },
    { month: 'Mar', demandes: 42, approuves: 36, rembourses: 25 },
    { month: 'Avr', demandes: 50, approuves: 43, rembourses: 31 },
    { month: 'Mai', demandes: 58, approuves: 48, rembourses: 35 }
  ];

  return (
    <MobileLayout title="Analyse des données">
      <div className="space-y-6 pb-6">
        <div className="bg-dtc-blue text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Tableau de bord analytique</h2>
          <p className="text-sm opacity-90">Statistiques et analyses des données Caresse</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-sm text-gray-500">Membres totaux</p>
              <p className="text-2xl font-bold text-dtc-blue">404</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-sm text-gray-500">Cotisations ce mois</p>
              <p className="text-2xl font-bold text-dtc-orange">479K CDF</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-sm text-gray-500">Crédits en cours</p>
              <p className="text-2xl font-bold text-dtc-blue">42</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-sm text-gray-500">Taux remboursement</p>
              <p className="text-2xl font-bold text-dtc-orange">87%</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="users">Membres</TabsTrigger>
            <TabsTrigger value="revenue">Revenus</TabsTrigger>
            <TabsTrigger value="subscriptions">Abonnements</TabsTrigger>
            <TabsTrigger value="credits">Crédits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users">
            <Card>
              <CardHeader className="py-4 px-4">
                <CardTitle className="text-sm font-medium">Nouveaux membres par mois</CardTitle>
              </CardHeader>
              <CardContent className="p-1">
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={usersData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#2563EB" name="Nouveaux membres" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="revenue">
            <Card>
              <CardHeader className="py-4 px-4">
                <CardTitle className="text-sm font-medium">Revenus mensuels (CDF)</CardTitle>
              </CardHeader>
              <CardContent className="p-1">
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value} CDF`} />
                      <Legend />
                      <Line type="monotone" dataKey="cotisations" stroke="#2563EB" activeDot={{ r: 8 }} name="Cotisations" />
                      <Line type="monotone" dataKey="credits" stroke="#F97316" name="Remboursements crédits" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="subscriptions">
            <Card>
              <CardHeader className="py-4 px-4">
                <CardTitle className="text-sm font-medium">Répartition des abonnements</CardTitle>
              </CardHeader>
              <CardContent className="p-1 flex justify-center">
                <div className="h-[220px] w-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={subscriptionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {subscriptionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} membres`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="credits">
            <Card>
              <CardHeader className="py-4 px-4">
                <CardTitle className="text-sm font-medium">Statut des crédits par mois</CardTitle>
              </CardHeader>
              <CardContent className="p-1">
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={creditsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="demandes" fill="#94A3B8" name="Demandes" />
                      <Bar dataKey="approuves" fill="#2563EB" name="Approuvés" />
                      <Bar dataKey="rembourses" fill="#16A34A" name="Remboursés" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default AdminAnalytics;
