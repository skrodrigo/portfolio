import { cn } from "@/lib/utils";

interface DiagonalLinesProps {
  /**
   * Color of the line
   */
  color?: string;

  /**
   * Spacing between lines
   */
  spacing?: number;

  /**
   * Content of the component
   */
  children?: React.ReactNode;

  /**
   * Additional classes
   */
  className?: string;
}

function Placeholder() {
  return (
    <div className="flex max-h-full min-h-64 min-w-72 max-w-full items-center justify-center">
    </div>
  );
}

export default function DiagonalLines({
  color = "hsl(var(--border))",
  spacing = 10,
  children,
  className,
}: DiagonalLinesProps) {
  return (
    <div className={cn("w-screen h-screen", className)}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg,
                  ${color} 0,
                  ${color} 0.5px,
                  transparent 0,
                  transparent 50%)`,
          backgroundSize: `${spacing}px ${spacing}px`,
        }}
      >
        {children ?? <Placeholder />}
      </div>
    </div>
  );
}
