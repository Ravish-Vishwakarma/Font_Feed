
import { useState } from "react";
import FontCard from "@/components/FontCard";
import FontDetailModal from "@/components/FontDetailModal";
import { Card } from "@/components/ui/card";
import { Search, Type } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface Font {
  id: string;
  name: string;
  category: string;
  description: string;
  preview: string;
  weights: string[];
  styles: string[];
  googleFontsUrl?: string;
  designer: string;
  year: string;
  popularity: number;
  fileUrl: string;
}

const fonts: Font[] = [
  {
    id: "1",
    name: "Inter",
    category: "Sans Serif",
    description: "A typeface specially designed for user interfaces with focus on high legibility of small-to-medium sized text on computer screens.",
    preview: "The quick brown fox jumps over the lazy dog",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Inter",
    designer: "Rasmus Andersson",
    year: "2016",
    popularity: 98,
    fileUrl: "/fonts/inter.zip"
  },
  {
    id: "2",
    name: "Playfair Display",
    category: "Serif",
    description: "A transitional design with high contrast and distinctive details. Perfect for headlines and editorial design.",
    preview: "Elegant Typography Design",
    weights: ["400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Playfair+Display",
    designer: "Claus Eggers Sørensen",
    year: "2010",
    popularity: 94,
    fileUrl: "/fonts/playfair-display.zip"
  },
  {
    id: "3",
    name: "Roboto",
    category: "Sans Serif",
    description: "A neo-grotesque sans-serif typeface family developed by Google as the system font for Android.",
    preview: "Modern & Clean Typography",
    weights: ["100", "300", "400", "500", "700", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Roboto",
    designer: "Christian Robertson",
    year: "2011",
    popularity: 96,
    fileUrl: "/fonts/roboto.zip"
  },
  {
    id: "4",
    name: "Montserrat",
    category: "Sans Serif",
    description: "Inspired by the old posters and signs in the traditional Montserrat neighborhood of Buenos Aires.",
    preview: "Beautiful Sans Serif",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Montserrat",
    designer: "Julieta Ulanovsky",
    year: "2011",
    popularity: 92,
    fileUrl: "/fonts/montserrat.zip"
  },
  {
    id: "5",
    name: "Open Sans",
    category: "Sans Serif",
    description: "A humanist sans serif typeface designed by Steve Matteson. Optimized for print, web, and mobile interfaces.",
    preview: "Friendly & Readable Text",
    weights: ["300", "400", "500", "600", "700", "800"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Open+Sans",
    designer: "Steve Matteson",
    year: "2011",
    popularity: 95,
    fileUrl: "/fonts/open-sans.zip"
  },
  {
    id: "6",
    name: "Lora",
    category: "Serif",
    description: "A well-balanced contemporary serif with roots in calligraphy. Perfect for body text and headlines.",
    preview: "Classical Beauty in Text",
    weights: ["400", "500", "600", "700"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Lora",
    designer: "Cyrus Highsmith",
    year: "2011",
    popularity: 88,
    fileUrl: "/fonts/lora.zip"
  },
  {
    id: "7",
    name: "Poppins",
    category: "Sans Serif",
    description: "A geometric sans serif with rounded edges. Each letterform is nearly monolinear with optical corrections.",
    preview: "Geometric & Modern Style",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Poppins",
    designer: "Indian Type Foundry",
    year: "2014",
    popularity: 93,
    fileUrl: "/fonts/poppins.zip"
  },
  {
    id: "8",
    name: "Source Sans Pro",
    category: "Sans Serif",
    description: "Adobe's first open source typeface family, designed by Paul D. Hunt for user interfaces and extended reading.",
    preview: "Professional Interface Font",
    weights: ["200", "300", "400", "600", "700", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Source+Sans+Pro",
    designer: "Paul D. Hunt",
    year: "2012",
    popularity: 89,
    fileUrl: "/fonts/source-sans-pro.zip"
  }
];

const Index = () => {
  const [selectedFont, setSelectedFont] = useState<Font | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(fonts.map(font => font.category)))];
  
  const filteredFonts = fonts.filter(font => {
    const matchesSearch = font.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         font.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || font.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Type className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Font Feed</h1>
                <p className="text-sm text-slate-600">Discover & Download Beautiful Fonts</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">{filteredFonts.length} fonts available</p>
              <p className="text-xs text-slate-500">Free for personal & commercial use</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search fonts by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <div className="text-2xl font-bold text-blue-700">{fonts.length}</div>
            <div className="text-sm text-blue-600">Total Fonts</div>
          </Card>
          <Card className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <div className="text-2xl font-bold text-purple-700">{categories.length - 1}</div>
            <div className="text-sm text-purple-600">Categories</div>
          </Card>
          <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <div className="text-2xl font-bold text-green-700">100%</div>
            <div className="text-sm text-green-600">Free Fonts</div>
          </Card>
        </div>

        {/* Font Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFonts.map((font) => (
            <FontCard
              key={font.id}
              font={font}
              onClick={() => setSelectedFont(font)}
            />
          ))}
        </div>

        {filteredFonts.length === 0 && (
          <div className="text-center py-12">
            <Type className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No fonts found</h3>
            <p className="text-slate-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Font Detail Modal */}
      {selectedFont && (
        <FontDetailModal
          font={selectedFont}
          onClose={() => setSelectedFont(null)}
        />
      )}
    </div>
  );
};

export default Index;
