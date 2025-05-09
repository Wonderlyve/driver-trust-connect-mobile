
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Users, Calendar, PlusCircle, ClipboardList, MapPin, Phone } from 'lucide-react';

const HealthPage = () => {
  const familyMembers = [
    { 
      name: "Kabongo Mulumba", 
      relation: "Membre principal", 
      age: 34,
      covered: true
    },
    { 
      name: "Mujinga Kabongo", 
      relation: "Épouse", 
      age: 29,
      covered: true
    },
    { 
      name: "Kalala Kabongo", 
      relation: "Fils", 
      age: 8,
      covered: false
    }
  ];
  
  const upcomingAppointments = [
    {
      type: "Consultation générale",
      date: "25 mai 2025",
      time: "14:30",
      location: "Centre médical Kinshasa",
      doctor: "Dr. Mutombo"
    }
  ];
  
  const healthFacilities = [
    {
      name: "Centre Médical Kinshasa",
      address: "Avenue Lumumba 45, Kinshasa",
      phone: "+243 99 123 4567",
      distance: "3.5 km",
      type: "Centre médical"
    },
    {
      name: "Hôpital Général de Référence",
      address: "Boulevard du 30 Juin, Kinshasa",
      phone: "+243 99 765 4321",
      distance: "5.2 km",
      type: "Hôpital"
    },
    {
      name: "Cabinet Médical Saint Joseph",
      address: "Rue Kasai 12, Kinshasa",
      phone: "+243 81 234 5678",
      distance: "1.8 km",
      type: "Cabinet médical"
    }
  ];
  
  return (
    <DashboardLayout title="Santé">
      <div className="space-y-6">
        {/* Health coverage status */}
        <Card className="bg-gradient-to-r from-dtc-blue to-dtc-sky border-none">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col text-white">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <h2 className="text-lg font-medium">Couverture sanitaire</h2>
              </div>
              <p className="text-3xl font-bold mt-2">Premium</p>
              <div className="mt-4 flex gap-3">
                <div className="bg-white/20 rounded-full px-3 py-1 text-xs">
                  Actif
                </div>
                <div className="bg-white/20 rounded-full px-3 py-1 text-xs">
                  Expire: 31 Déc 2025
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="coverage" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="coverage">Couverture</TabsTrigger>
            <TabsTrigger value="family">Famille</TabsTrigger>
            <TabsTrigger value="centers">Centres</TabsTrigger>
          </TabsList>
          
          <TabsContent value="coverage" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Avantages de santé</CardTitle>
                <CardDescription>Programme Premium</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="divide-y">
                  <div className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium">Consultations médicales</p>
                      <p className="text-green-500">Couvert à 80%</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Centres médicaux partenaires</p>
                  </div>
                  
                  <div className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium">Médicaments de base</p>
                      <p className="text-green-500">Couvert à 70%</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Pharmacies partenaires</p>
                  </div>
                  
                  <div className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium">Hospitalisation</p>
                      <p className="text-green-500">Couvert à 60%</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Jusqu'à 5 jours</p>
                  </div>
                  
                  <div className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium">Soins dentaires</p>
                      <p className="text-yellow-500">Couvert à 40%</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Cliniques dentaires partenaires</p>
                  </div>
                  
                  <div className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium">Soins oculaires</p>
                      <p className="text-yellow-500">Couvert à 50%</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Cliniques partenaires</p>
                  </div>
                  
                  <div className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium">Interventions chirurgicales</p>
                      <p className="text-red-500">Non couvert</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Nécessite une mise à niveau Premium+</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Passer à Premium+
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Rendez-vous à venir</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center mt-1">
                          <Calendar className="h-5 w-5 text-dtc-blue" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{appointment.type}</p>
                          <p className="text-xs text-gray-500">{appointment.date} • {appointment.time}</p>
                          <p className="text-xs text-gray-500 mt-1">{appointment.location}</p>
                          <p className="text-xs text-gray-500">Dr. {appointment.doctor}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Détails
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Calendar className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">Aucun rendez-vous à venir</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Prendre un rendez-vous
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="family" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Membres de famille</CardTitle>
                <CardDescription>Membres couverts par votre plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {familyMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-dtc-blue" />
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-gray-500">{member.relation}</p>
                            <span className="text-xs text-gray-400">•</span>
                            <p className="text-xs text-gray-500">{member.age} ans</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        {member.covered ? (
                          <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            Couvert
                          </div>
                        ) : (
                          <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            Non couvert
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-2">
                  <Button variant="outline" className="w-full">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Ajouter un membre
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Premium: jusqu'à 3 membres • Premium+: jusqu'à 6 membres
                  </p>
                </div>
              </CardFooter>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">CNSS</CardTitle>
                <CardDescription>Caisse Nationale de Sécurité Sociale</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <ClipboardList className="h-5 w-5 text-dtc-blue" />
                    <h3 className="font-medium">Statut d'intégration</h3>
                  </div>
                  <p className="text-sm">Votre compte Driver Trust Capital est lié à la CNSS.</p>
                  <p className="text-sm mt-2">Numéro CNSS: <span className="font-medium">DTC-32145-KIN</span></p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Mettre à jour les informations CNSS
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="centers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Centres de santé partenaires</CardTitle>
                <CardDescription>Accessibles avec votre couverture</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {healthFacilities.map((facility, index) => (
                    <div key={index} className="p-4">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{facility.name}</h3>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {facility.distance}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-dtc-blue" />
                          <span>{facility.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-dtc-blue" />
                          <span>{facility.phone}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Itinéraire
                        </Button>
                        <Button size="sm" className="flex-1">
                          Appeler
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HealthPage;
