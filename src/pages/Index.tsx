
import { useState } from "react";
import FontCard from "@/components/FontCard";
import FontDetailModal from "@/components/FontDetailModal";
import { ThemeToggle } from "@/components/ThemeToggle";
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
  },
  {
    id: "9",
    name: "Oswald",
    category: "Sans Serif",
    description: "A reworking of the classic gothic typeface style historically represented by designs such as Alternate Gothic.",
    preview: "Bold & Condensed Headlines",
    weights: ["200", "300", "400", "500", "600", "700"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Oswald",
    designer: "Vernon Adams",
    year: "2011",
    popularity: 87,
    fileUrl: "/fonts/oswald.zip"
  },
  {
    id: "10",
    name: "Merriweather",
    category: "Serif",
    description: "A serif typeface designed to be very readable on screens. It features a very large x-height, slightly condensed letterforms.",
    preview: "Readable Serif for Screens",
    weights: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Merriweather",
    designer: "Sorkin Type",
    year: "2010",
    popularity: 85,
    fileUrl: "/fonts/merriweather.zip"
  },
  {
    id: "11",
    name: "Nunito",
    category: "Sans Serif",
    description: "A well balanced sans serif typeface superfamily, with 2 versions: The project began with Nunito, created by Vernon Adams.",
    preview: "Rounded & Friendly Sans",
    weights: ["200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Nunito",
    designer: "Vernon Adams",
    year: "2014",
    popularity: 91,
    fileUrl: "/fonts/nunito.zip"
  },
  {
    id: "12",
    name: "Raleway",
    category: "Sans Serif",
    description: "An elegant sans-serif typeface family intended for headings and other large size usage.",
    preview: "Elegant Display Font",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Raleway",
    designer: "Matt McInerney",
    year: "2010",
    popularity: 84,
    fileUrl: "/fonts/raleway.zip"
  },
  {
    id: "13",
    name: "Dancing Script",
    category: "Handwriting",
    description: "A lively casual script where the letters bounce and change size slightly. Caps are big, and lowercase is small.",
    preview: "Casual & Lively Script",
    weights: ["400", "500", "600", "700"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Dancing+Script",
    designer: "Pablo Impallari",
    year: "2010",
    popularity: 82,
    fileUrl: "/fonts/dancing-script.zip"
  },
  {
    id: "14",
    name: "Lobster",
    category: "Display",
    description: "The Lobster font took a different approach. The new OpenType format gave us the possibility to have multiple versions.",
    preview: "Bold Script Display",
    weights: ["400"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Lobster",
    designer: "Pablo Impallari",
    year: "2010",
    popularity: 79,
    fileUrl: "/fonts/lobster.zip"
  },
  {
    id: "15",
    name: "Ubuntu",
    category: "Sans Serif",
    description: "The Ubuntu Font Family are a set of matching new libre/open fonts developed for the Ubuntu operating system.",
    preview: "Humanist Ubuntu Style",
    weights: ["300", "400", "500", "700"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Ubuntu",
    designer: "Dalton Maag",
    year: "2010",
    popularity: 86,
    fileUrl: "/fonts/ubuntu.zip"
  },
  {
    id: "16",
    name: "Crimson Text",
    category: "Serif",
    description: "Crimson Text is a font family for book production in the tradition of beautiful oldstyle typefaces.",
    preview: "Classic Book Typography",
    weights: ["400", "600", "700"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Crimson+Text",
    designer: "Sebastian Kosch",
    year: "2010",
    popularity: 78,
    fileUrl: "/fonts/crimson-text.zip"
  },
  {
    id: "17",
    name: "JetBrains Mono",
    category: "Monospace",
    description: "A typeface specifically designed for developers. With increased height for a better reading experience and ligatures for cleaner code.",
    preview: "const hello = 'world';",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/JetBrains+Mono",
    designer: "JetBrains",
    year: "2020",
    popularity: 89,
    fileUrl: "/fonts/jetbrains-mono.zip"
  },
  {
    id: "18",
    name: "Fira Code",
    category: "Monospace", 
    description: "A monospaced font with programming ligatures. It combines the readability of a monospace font with helpful typographic ligatures.",
    preview: "function() => { return 'code'; }",
    weights: ["300", "400", "500", "600", "700"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Fira+Code",
    designer: "Nikita Prokopov",
    year: "2014",
    popularity: 85,
    fileUrl: "/fonts/fira-code.zip"
  },
  {
    id: "19",
    name: "Space Mono",
    category: "Monospace",
    description: "A monospace type family designed for editorial use in display and text sizes. Works well for code and technical documentation.",
    preview: "System.out.println('Hello');",
    weights: ["400", "700"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Space+Mono",
    designer: "Colophon Foundry",
    year: "2016",
    popularity: 82,
    fileUrl: "/fonts/space-mono.zip"
  },
  {
    id: "20",
    name: "Inconsolata",
    category: "Monospace",
    description: "A monospace font, designed for code listings and the like. Has very clear, readable characters and excellent spacing.",
    preview: "if (condition) { execute(); }",
    weights: ["200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Inconsolata",
    designer: "Raph Levien",
    year: "2006",
    popularity: 81,
    fileUrl: "/fonts/inconsolata.zip"
  },
  {
    id: "21",
    name: "Source Code Pro",
    category: "Monospace",
    description: "Adobe's first open source typeface family designed for coding environments and other text-rich applications.",
    preview: "import React from 'react';",
    weights: ["200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Source+Code+Pro",
    designer: "Paul D. Hunt",
    year: "2012",
    popularity: 83,
    fileUrl: "/fonts/source-code-pro.zip"
  },
  {
    id: "22",
    name: "Roboto Mono",
    category: "Monospace",
    description: "A monospaced addition to the Roboto type family. Maintains the same feel and proportional characteristics as Roboto.",
    preview: "<div className='container'>",
    weights: ["100", "200", "300", "400", "500", "600", "700"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Roboto+Mono",
    designer: "Christian Robertson",
    year: "2015",
    popularity: 84,
    fileUrl: "/fonts/roboto-mono.zip"
  },
  {
    id: "23",
    name: "Rubik",
    category: "Sans Serif",
    description: "A sans serif font family with slightly rounded corners. Has a friendly appearance while maintaining excellent readability.",
    preview: "Modern & Friendly Design",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    googleFontsUrl: "https://fonts.google.com/specimen/Rubik",
    designer: "Philipp Hubert",
    year: "2015",
    popularity: 87,
    fileUrl: "/fonts/rubik.zip"
  },
  {
    id: "24",
    name: "Quicksand",
    category: "Sans Serif",
    description: "A display sans serif with rounded terminals. Perfect for both display and text use with a friendly, approachable character.",
    preview: "Clean & Rounded Typography",
    weights: ["300", "400", "500", "600", "700"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Quicksand",
    designer: "Andrew Paglinawan",
    year: "2008",
    popularity: 86,
    fileUrl: "/fonts/quicksand.zip"
  },
  {
    id: "25",
    name: "Comfortaa",
    category: "Display",
    description: "A rounded geometric sans-serif type design intended for large text usage. Has a modern, friendly, and approachable feel.",
    preview: "Rounded & Comfortable",
    weights: ["300", "400", "500", "600", "700"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Comfortaa",
    designer: "Johan Aakerlund",
    year: "2011",
    popularity: 83,
    fileUrl: "/fonts/comfortaa.zip"
  },
  {
    id: "26",
    name: "Pacifico",
    category: "Handwriting",
    description: "A brush script handwriting font inspired by the 1950s American surf culture. Perfect for logos and casual designs.",
    preview: "Surf & Retro Vibes",
    weights: ["400"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Pacifico",
    designer: "Vernon Adams",
    year: "2011",
    popularity: 80,
    fileUrl: "/fonts/pacifico.zip"
  },
  {
    id: "27",
    name: "Righteous",
    category: "Display",
    description: "A geometric sans-serif with a vintage feel. Perfect for headlines, logos, and display purposes with strong character.",
    preview: "Bold & Vintage Style",
    weights: ["400"],
    styles: ["normal"],
    googleFontsUrl: "https://fonts.google.com/specimen/Righteous",
    designer: "Astigmatic",
    year: "2012",
    popularity: 78,
    fileUrl: "/fonts/righteous.zip"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d51cb5e2-28be-4375-a7b7-ad3053505d9b.png" 
                alt="Font Feed Logo" 
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Font Feed</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Discover & Download Beautiful Fonts</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-slate-600 dark:text-slate-400">{filteredFonts.length} fonts available</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">Free for personal & commercial use</p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <Input
              type="text"
              placeholder="Search fonts by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 dark:text-slate-100"
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
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Font Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
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
            <Type className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">No fonts found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search or filter criteria</p>
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
