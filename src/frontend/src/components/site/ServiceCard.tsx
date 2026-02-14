import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-md h-full">
      <CardHeader>
        <div className="w-14 h-14 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
          <service.icon className="h-7 w-7 text-brand-blue" />
        </div>
        <CardTitle className="text-xl">{service.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{service.description}</p>
      </CardContent>
    </Card>
  );
}
