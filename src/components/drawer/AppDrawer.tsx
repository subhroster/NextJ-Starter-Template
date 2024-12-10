"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "@/store/atoms/bookmarks";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star, Calculator, X, BookMarked, Palette } from "lucide-react";
import { getCalculatorLinks } from "@/lib/utils/getCalculatorLinks";

const EmptyFavorites = () => (
  <div className="flex h-[200px] flex-col items-center justify-center space-y-4 p-4 text-center">
    <BookMarked className="h-12 w-12 text-muted-foreground" />
    <div className="space-y-2">
      <h3 className="font-medium">No favorites yet</h3>
      <p className="text-sm text-muted-foreground">
        Star your frequently used calculators to access them quickly
      </p>
    </div>
    <Button variant="outline" size="sm" asChild>
      <Link href="/calculators">Browse Calculators</Link>
    </Button>
  </div>
);

const FavoritesList = ({ favorites, calculatorLinks = [], onClose }) => (
  <div className="space-y-2">
    {favorites.map((calcId) => {
      const calc = calculatorLinks.find((c) => c.path.includes(calcId));
      if (!calc) return null;
      return (
        <Link
          key={calcId}
          href={calc.path}
          onClick={onClose}
          className="flex items-center rounded-lg p-2 transition-colors hover:bg-accent"
        >
          <Calculator className="mr-2 h-4 w-4" />
          <span>{calc.title}</span>
        </Link>
      );
    })}
  </div>
);

interface AppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppDrawer({ isOpen, onClose }: AppDrawerProps) {
  const [calculatorLinks, setCalculatorLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const links = await getCalculatorLinks();
      setCalculatorLinks(links);
    };
    fetchLinks();
  }, []);

  const [favorites] = useAtom(bookmarksAtom);

  return (
    <div
      className={`fixed right-0 top-0 h-screen w-80 transform border-l bg-background shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}
    >
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Quick Access</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Star className="h-5 w-5" />
            Favorites
          </h2>
          <ScrollArea className="h-[400px]">
            {favorites.length === 0 ? (
              <EmptyFavorites />
            ) : (
              <FavoritesList
                favorites={favorites}
                calculatorLinks={calculatorLinks}
                onClose={onClose}
              />
            )}
          </ScrollArea>
        </div>

        <Link
          href="/saved-pairs"
          className="flex items-center rounded-lg p-2 hover:bg-accent"
        >
          <Palette className="mr-2 h-4 w-4" />
          <span>Saved Color Pairs</span>
        </Link>
      </div>
    </div>
  );
}
