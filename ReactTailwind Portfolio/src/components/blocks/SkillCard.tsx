import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type SkillCardProps = {
  imageSrc: string; // png image url
  name: string;
  description?: string; // will be trimmed to ~10 words if longer
  percent: number; // 0-100
};

export default function SkillCard({ imageSrc, name, description = "", percent, }: SkillCardProps) {
  // sanitize percent
  const pct = Math.max(0, Math.min(100, Math.round(percent)));

  // ensure description is ~10 words
  const trimToTenWords = (text: string) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    if (words.length <= 10) return words.join(" ");
    return words.slice(0, 10).join(" ") + "...";
  };

  const desc = trimToTenWords(description || "");

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center gap-4 pb-1">
        <img
          src={imageSrc}
          alt={`${name} logo`}
          className=" h-14 p-2 "
        />
        <div className="flex-1 min-w-0">
          <CardTitle className="text-lg font-semibold truncate">{name}</CardTitle>
          <CardDescription className="text-xs text-muted-foreground leading-snug">
            {desc}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex items-center space-x-4">
        <Progress value={pct} className="h-3" />
        <span className="text-sm font-medium text-muted-foreground">{pct}%</span>
      </CardContent>
    </Card>
  );
}

/*
Example usage:

<SkillCard
  imageSrc="/images/react.png"
  name="React"
  description="Build interactive UIs using components, hooks and state management."
  percent={85}
/>

Notes:
- This component uses shadcn/ui Card + Progress.
- Automatically styled with shadcn theme for dark & light mode.
- Description is trimmed to 10 words.
*/