
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
    switch (fontName.toLowerCase()) {
      case 'inter':
        return 'Inter, sans-serif';
      case 'playfair display':
        return 'Playfair Display, serif';
      case 'roboto':
        return 'Roboto, sans-serif';
      case 'montserrat':
        return 'Montserrat, sans-serif';
      case 'open sans':
        return 'Open Sans, sans-serif';
      case 'lora':
        return 'Lora, serif';
      case 'poppins':
        return 'Poppins, sans-serif';
      case 'source sans pro':
        return 'Source Sans Pro, sans-serif';
      default:
        return 'system-ui, sans-serif';
    }
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-slate-200 overflow-hidden"
      onClick={onClick}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
              {font.name}
            </h3>
            <Badge variant="secondary" className="mt-1 text-xs">
              {font.category}
            </Badge>
          </div>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-slate-600">{font.popularity}</span>
          </div>
        </div>

        {/* Font Preview */}
        <div className="mb-4">
          <div 
            className="text-2xl font-medium text-slate-800 mb-2 leading-tight"
            style={{ fontFamily: getFontFamily(font.name) }}
          >
            {font.name}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {font.preview}
          </p>
        </div>

        {/* Font Info */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Designer:</span>
            <span className="text-slate-700 font-medium">{font.designer}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Weights:</span>
            <span className="text-slate-700 font-medium">{font.weights.length} available</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-1 text-slate-500">
            <Download className="h-4 w-4" />
            <span className="text-sm">Click to download</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
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
