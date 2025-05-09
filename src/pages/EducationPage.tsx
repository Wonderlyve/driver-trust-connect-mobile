
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Book, Award, Clock, CheckCircle, PlayCircle } from 'lucide-react';

const EducationPage = () => {
  const ongoingCourses = [
    {
      id: 1,
      title: "Éducation financière",
      progress: 45,
      duration: "2h 30min",
      completed: "1h 15min",
      image: "/placeholder.svg"
    }
  ];
  
  const availableCourses = [
    {
      id: 1,
      title: "Alphabétisation",
      level: "Débutant",
      duration: "10h",
      category: "Éducation",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Informatique de base",
      level: "Débutant",
      duration: "8h",
      category: "Technologie",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Gestion d'entreprise",
      level: "Intermédiaire",
      duration: "15h",
      category: "Business",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Mécanique auto",
      level: "Intermédiaire",
      duration: "12h",
      category: "Technique",
      image: "/placeholder.svg"
    }
  ];
  
  const scholarships = [
    {
      id: 1,
      title: "Bourse d'études secondaires",
      eligible: "Membre Premium+",
      deadline: "30 juin 2025",
      status: "Ouvert"
    },
    {
      id: 2,
      title: "Formation professionnelle",
      eligible: "Tous les membres",
      deadline: "15 juillet 2025",
      status: "Ouvert"
    }
  ];
  
  return (
    <DashboardLayout title="Formation">
      <div className="space-y-6">
        {/* Ongoing Courses */}
        <div>
          <h2 className="text-lg font-medium mb-4">Cours en cours</h2>
          
          {ongoingCourses.length > 0 ? (
            <div className="space-y-4">
              {ongoingCourses.map(course => (
                <Card key={course.id}>
                  <div className="flex">
                    <div className="w-1/3">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="h-full w-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="font-medium">{course.title}</h3>
                      
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{course.completed} / {course.duration}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <Button className="mt-3 w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Continuer
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-gray-50 border border-dashed">
              <CardContent className="text-center py-6">
                <Book className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Aucun cours en cours</p>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Available Courses */}
        <div>
          <h2 className="text-lg font-medium mb-4">Formations disponibles</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {availableCourses.map(course => (
              <Card key={course.id} className="overflow-hidden">
                <div className="flex">
                  <div className="w-1/3">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-medium">{course.title}</h3>
                    
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span className="px-2 py-1 bg-gray-100 rounded-full">{course.level}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <Button className="w-full" variant="outline">
                        Commencer
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Scholarships */}
        <div>
          <h2 className="text-lg font-medium mb-4">Bourses d'études (Premium+)</h2>
          
          <div className="space-y-4">
            {scholarships.map(scholarship => (
              <Card key={scholarship.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{scholarship.title}</CardTitle>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      {scholarship.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-dtc-blue" />
                      <span className="text-sm">Éligibilité: {scholarship.eligible}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-dtc-blue" />
                      <span className="text-sm">Date limite: {scholarship.deadline}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Postuler</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EducationPage;
