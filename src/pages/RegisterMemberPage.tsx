import * as React from "react";
import MobileLayout from "@/components/ui/mobile-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, UserPlus } from "lucide-react";
import { format, differenceInYears } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Schéma de validation Zod avec messages détaillés
const memberFormSchema = z.object({
  nom: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le nom ne peut pas dépasser 50 caractères" })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes" }),
  postNom: z
    .string()
    .max(50, { message: "Le post-nom ne peut pas dépasser 50 caractères" })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]*$/, { message: "Le post-nom ne peut contenir que des lettres, espaces, tirets et apostrophes" })
    .optional()
    .or(z.literal("")),
  prenom: z
    .string()
    .min(2, { message: "Le prénom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le prénom ne peut pas dépasser 50 caractères" })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: "Le prénom ne peut contenir que des lettres, espaces, tirets et apostrophes" }),
  dateNaissance: z
    .date({ required_error: "La date de naissance est requise" })
    .refine((date) => differenceInYears(new Date(), date) >= 18, {
      message: "Le membre doit avoir au moins 18 ans"
    })
    .refine((date) => differenceInYears(new Date(), date) <= 100, {
      message: "La date de naissance semble incorrecte"
    }),
  metier: z
    .string()
    .min(2, { message: "Le métier doit contenir au moins 2 caractères" })
    .max(100, { message: "Le métier ne peut pas dépasser 100 caractères" }),
  avenue: z
    .string()
    .min(2, { message: "L'avenue doit contenir au moins 2 caractères" })
    .max(100, { message: "L'avenue ne peut pas dépasser 100 caractères" }),
  numero: z
    .string()
    .min(1, { message: "Le numéro est requis" })
    .max(20, { message: "Le numéro ne peut pas dépasser 20 caractères" })
    .regex(/^[a-zA-Z0-9\s/-]+$/, { message: "Le numéro ne peut contenir que des chiffres, lettres, espaces, tirets et barres obliques" }),
  commune: z
    .string()
    .min(1, { message: "Veuillez sélectionner une commune" }),
  etatCivil: z
    .string()
    .min(1, { message: "Veuillez sélectionner un état civil" }),
  nombreEnfants: z
    .string()
    .refine((val) => val === "" || (!isNaN(parseInt(val)) && parseInt(val) >= 0 && parseInt(val) <= 30), {
      message: "Le nombre d'enfants doit être un nombre entre 0 et 30"
    })
    .optional()
    .or(z.literal("")),
  abonnement: z
    .string()
    .min(1, { message: "Veuillez sélectionner un type d'abonnement" }),
});

type MemberFormValues = z.infer<typeof memberFormSchema>;

const RegisterMemberPage = () => {
  const { toast } = useToast();
  
  const form = useForm<MemberFormValues>({
    resolver: zodResolver(memberFormSchema),
    defaultValues: {
      nom: "",
      postNom: "",
      prenom: "",
      metier: "",
      avenue: "",
      numero: "",
      commune: "",
      etatCivil: "",
      nombreEnfants: "",
      abonnement: "",
    },
  });

  const onSubmit = (data: MemberFormValues) => {
    toast({
      title: "Inscription réussie",
      description: `${data.prenom} ${data.nom} a été enregistré avec succès.`
    });

    form.reset();
  };

  const communes = [
    "Bandalungwa", "Barumbu", "Bumbu", "Gombe", "Kalamu", 
    "Kasa-Vubu", "Kimbanseke", "Kinshasa", "Kintambo", "Kisenso",
    "Lemba", "Limete", "Lingwala", "Makala", "Maluku",
    "Masina", "Matete", "Mont-Ngafula", "Ndjili", "Ngaba",
    "Ngaliema", "Ngiri-Ngiri", "Nsele", "Selembao"
  ];

  return (
    <MobileLayout title="Inscription membre" showBackButton>
      <div className="p-4 space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Nouveau membre
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Identité */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm text-muted-foreground">Identité</h3>
                  
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Entrez le nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="postNom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Post-nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Entrez le post-nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Entrez le prénom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dateNaissance"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date de naissance *</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "PPP", { locale: fr }) : "Sélectionner une date"}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              captionLayout="dropdown-buttons"
                              fromYear={1940}
                              toYear={2010}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Profession */}
                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-medium text-sm text-muted-foreground">Profession</h3>
                  
                  <FormField
                    control={form.control}
                    name="metier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Métier *</FormLabel>
                        <FormControl>
                          <Input placeholder="Entrez le métier" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Adresse */}
                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-medium text-sm text-muted-foreground">Adresse complète</h3>
                  
                  <FormField
                    control={form.control}
                    name="avenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Avenue *</FormLabel>
                        <FormControl>
                          <Input placeholder="Entrez l'avenue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numero"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro *</FormLabel>
                        <FormControl>
                          <Input placeholder="Entrez le numéro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="commune"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Commune *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez une commune" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {communes.map((commune) => (
                              <SelectItem key={commune} value={commune}>
                                {commune}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Situation familiale */}
                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-medium text-sm text-muted-foreground">Situation familiale</h3>
                  
                  <FormField
                    control={form.control}
                    name="etatCivil"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>État civil *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez l'état civil" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="celibataire">Célibataire</SelectItem>
                            <SelectItem value="marie">Marié(e)</SelectItem>
                            <SelectItem value="divorce">Divorcé(e)</SelectItem>
                            <SelectItem value="veuf">Veuf/Veuve</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nombreEnfants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre d'enfants</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="0" 
                            min="0"
                            max="30"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Abonnement */}
                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-medium text-sm text-muted-foreground">Abonnement</h3>
                  
                  <FormField
                    control={form.control}
                    name="abonnement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type d'abonnement *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un abonnement" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mensuel">Mensuel - 10 000 FC</SelectItem>
                            <SelectItem value="trimestriel">Trimestriel - 25 000 FC</SelectItem>
                            <SelectItem value="semestriel">Semestriel - 45 000 FC</SelectItem>
                            <SelectItem value="annuel">Annuel - 80 000 FC</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full mt-6">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Enregistrer le membre
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default RegisterMemberPage;
