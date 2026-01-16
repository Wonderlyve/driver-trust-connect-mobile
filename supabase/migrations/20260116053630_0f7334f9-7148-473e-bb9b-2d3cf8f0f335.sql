-- Create enum for marital status
CREATE TYPE public.marital_status AS ENUM ('celibataire', 'marie', 'divorce', 'veuf');

-- Create enum for subscription type
CREATE TYPE public.subscription_type AS ENUM ('basic', 'premium', 'vip');

-- Create members table
CREATE TABLE public.members (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    nom TEXT NOT NULL,
    post_nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    date_naissance DATE NOT NULL,
    metier TEXT NOT NULL,
    avenue TEXT NOT NULL,
    numero TEXT NOT NULL,
    commune TEXT NOT NULL,
    etat_civil marital_status NOT NULL,
    nombre_enfants INTEGER NOT NULL DEFAULT 0,
    abonnement subscription_type NOT NULL DEFAULT 'basic',
    nfc_link TEXT UNIQUE,
    points INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- Allow public read access for now (can be restricted later)
CREATE POLICY "Members are viewable by everyone" 
ON public.members 
FOR SELECT 
USING (true);

-- Allow public insert for registration
CREATE POLICY "Anyone can register as a member" 
ON public.members 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_members_updated_at
BEFORE UPDATE ON public.members
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();