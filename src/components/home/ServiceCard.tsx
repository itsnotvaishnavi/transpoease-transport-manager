
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  bgColorClass: string;
  buttonColorClass: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  linkTo,
  bgColorClass,
  buttonColorClass,
}) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-all duration-300 ${bgColorClass} border-none rounded-2xl`}>
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-display mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button
          asChild
          className={`${buttonColorClass} font-medium hover:opacity-90 transition-all`}
        >
          <Link to={linkTo}>Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
