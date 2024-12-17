import React from "react";

interface ProjectInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const ProjectInfoCard = ({
  icon,
  label,
  value,
}: ProjectInfoCardProps) => (
  <div className="flex items-center">
    {icon}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);
