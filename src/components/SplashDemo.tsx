import { SplashCursor } from "@/components/ui/splash-cursor";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SplashDemoProps {
  onBack?: () => void;
}

export function SplashDemo({ onBack }: SplashDemoProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SplashCursor />
      
      {onBack && (
        <div className="absolute top-4 left-4 z-20">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-card/80 backdrop-blur-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Menu
          </Button>
        </div>
      )}
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fluid Dynamics
            </h1>
            <p className="text-xl text-muted-foreground">
              Move your cursor around to create beautiful fluid simulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-lg font-semibold text-primary mb-2">Interactive</h3>
              <p className="text-sm text-muted-foreground">
                Real-time fluid simulation that responds to your mouse movements and clicks
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-lg font-semibold text-accent mb-2">WebGL Powered</h3>
              <p className="text-sm text-muted-foreground">
                Hardware-accelerated graphics using WebGL for smooth 60fps performance
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-lg font-semibold text-success mb-2">Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Adjustable parameters for density, velocity, pressure, and visual effects
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-4 rounded-lg bg-muted/50 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong>Try it:</strong> Move your mouse around the screen and click to create splashes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}