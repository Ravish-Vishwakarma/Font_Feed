
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download } from "lucide-react";
import { Font } from "@/pages/Index";

interface FontCardProps {
  font: Font;
  onClick: () => void;
}

const FontCard = ({ font, onClick }: FontCardProps) => {
  // Get the appropriate font family for rendering
  const getFontFamily = (fontName: string) => {
    const fontMap: { [key: string]: string } = {
      'inter': 'Inter, sans-serif',
      'playfair display': 'Playfair Display, serif',
      'roboto': 'Roboto, sans-serif',
      'montserrat': 'Montserrat, sans-serif',
      'open sans': 'Open Sans, sans-serif',
      'lora': 'Lora, serif',
      'poppins': 'Poppins, sans-serif',
      'source sans pro': 'Source Sans Pro, sans-serif',
      'oswald': 'Oswald, sans-serif',
      'merriweather': 'Merriweather, serif',
      'nunito': 'Nunito, sans-serif',
      'raleway': 'Raleway, sans-serif',
      'dancing script': 'Dancing Script, cursive',
      'lobster': 'Lobster, cursive',
      'ubuntu': 'Ubuntu, sans-serif',
      'crimson text': 'Crimson Text, serif',
      'jetbrains mono': 'JetBrains Mono, monospace',
      'fira code': 'Fira Code, monospace',
      'space mono': 'Space Mono, monospace',
      'inconsolata': 'Inconsolata, monospace',
      'source code pro': 'Source Code Pro, monospace',
      'roboto mono': 'Roboto Mono, monospace',
      'rubik': 'Rubik, sans-serif',
      'quicksand': 'Quicksand, sans-serif',
      'comfortaa': 'Comfortaa, cursive',
      'pacifico': 'Pacifico, cursive',
      'righteous': 'Righteous, cursive'
    };
    
    return fontMap[fontName.toLowerCase()] || 'system-ui, sans-serif';
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden"
      onClick={onClick}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {font.name}
            </h3>
            <Badge variant="secondary" className="mt-1 text-xs dark:bg-slate-700 dark:text-slate-300">
              {font.category}
            </Badge>
          </div>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{font.popularity}</span>
          </div>
        </div>

        {/* Font Preview */}
        <div className="mb-4">
          <div 
            className="text-2xl font-medium text-slate-900 dark:text-white mb-2 leading-tight"
            style={{ fontFamily: getFontFamily(font.name) }}
          >
            {font.name}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {font.preview}
          </p>
        </div>

        {/* Font Info */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">Designer:</span>
            <span className="text-slate-700 dark:text-slate-200 font-medium">{font.designer}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">Weights:</span>
            <span className="text-slate-700 dark:text-slate-200 font-medium">{font.weights.length} available</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
            <Download className="h-4 w-4" />
            <span className="text-sm">Click to download</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
              View Details
            </Badge>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Card>
  );
};

export default FontCard;
