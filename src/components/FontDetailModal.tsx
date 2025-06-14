
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, ExternalLink, Star, Type, Palette, User, Calendar } from "lucide-react";
import { Font } from "@/pages/Index";
import { useToast } from "@/hooks/use-toast";

interface FontDetailModalProps {
  font: Font;
  onClose: () => void;
}

const FontDetailModal = ({ font, onClose }: FontDetailModalProps) => {
  const { toast } = useToast();

  const handleDirectDownload = () => {
    // Simulate download
    toast({
      title: "Download Started",
      description: `${font.name} font files are being downloaded...`,
    });
  };

  const handleGoogleFontsDownload = () => {
    if (font.googleFontsUrl) {
      window.open(font.googleFontsUrl, '_blank');
    }
  };

  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "1234567890 !@#$%^&*()",
    "Typography is the art and technique of arranging type",
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Type className="h-5 w-5 text-white" />
            </div>
            <span>{font.name}</span>
            <Badge variant="secondary">{font.category}</Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <Card className="p-6 bg-gradient-to-r from-slate-50 to-slate-100">
            <p className="text-slate-700 leading-relaxed">{font.description}</p>
          </Card>

          {/* Font Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <User className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="font-medium text-slate-900">{font.designer}</div>
              <div className="text-sm text-slate-500">Designer</div>
            </Card>
            <Card className="p-4 text-center">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <div className="font-medium text-slate-900">{font.year}</div>
              <div className="text-sm text-slate-500">Year</div>
            </Card>
            <Card className="p-4 text-center">
              <Palette className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <div className="font-medium text-slate-900">{font.weights.length}</div>
              <div className="text-sm text-slate-500">Weights</div>
            </Card>
            <Card className="p-4 text-center">
              <Star className="h-6 w-6 mx-auto mb-2 text-yellow-500 fill-current" />
              <div className="font-medium text-slate-900">{font.popularity}%</div>
              <div className="text-sm text-slate-500">Popularity</div>
            </Card>
          </div>

          {/* Font Weights */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Palette className="h-5 w-5 mr-2 text-purple-600" />
              Available Weights
            </h3>
            <div className="flex flex-wrap gap-2">
              {font.weights.map((weight) => (
                <Badge key={weight} variant="outline" className="px-3 py-1">
                  {weight === "400" ? "Regular" : weight === "700" ? "Bold" : weight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Font Styles */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Available Styles</h3>
            <div className="flex flex-wrap gap-2">
              {font.styles.map((style) => (
                <Badge key={style} variant="outline" className="px-3 py-1 capitalize">
                  {style}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Font Preview */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Type className="h-5 w-5 mr-2 text-blue-600" />
              Font Preview
            </h3>
            <div className="space-y-4">
              {sampleTexts.map((text, index) => (
                <Card key={index} className="p-4">
                  <div 
                    className={`text-slate-800 ${
                      index === 0 ? 'text-2xl' : 
                      index === 1 ? 'text-xl font-bold tracking-wider' :
                      index === 2 ? 'text-lg tracking-wide' :
                      index === 3 ? 'text-base font-mono' :
                      'text-base leading-relaxed'
                    }`}
                    style={{ 
                      fontFamily: font.name === 'Inter' ? 'Inter, sans-serif' : 
                                  font.name === 'Playfair Display' ? 'Playfair Display, serif' :
                                  'system-ui, sans-serif' 
                    }}
                  >
                    {text}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Download Buttons */}
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <h3 className="text-lg font-semibold mb-4 text-center">Download Options</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDirectDownload}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 h-auto"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Font Files
              </Button>
              
              {font.googleFontsUrl && (
                <Button 
                  onClick={handleGoogleFontsDownload}
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 h-auto"
                  size="lg"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Get from Google Fonts
                </Button>
              )}
            </div>
            <p className="text-center text-sm text-slate-600 mt-4">
              Free for personal and commercial use
            </p>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FontDetailModal;
