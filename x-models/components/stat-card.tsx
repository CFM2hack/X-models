import { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
};

export function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-card-foreground">
      <div className="mb-2">{icon}</div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
