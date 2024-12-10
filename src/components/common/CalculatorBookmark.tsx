"use client";
import { useAtom } from "jotai";
import { bookmarksAtom } from "@/store/atoms/bookmarks";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CalculatorBookmark({
  calculatorId,
  title,
}: CalculatorBookmarkProps) {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  const isFavorite = bookmarks.includes(calculatorId);

  const toggleFavorite = () => {
    setBookmarks((prev) =>
      isFavorite
        ? prev.filter((id) => id !== calculatorId)
        : [...prev, calculatorId]
    );
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          pressed={isFavorite}
          onPressedChange={toggleFavorite}
          className="hover:bg-primary/10 data-[state=on]:bg-primary/20"
        >
          {isFavorite ? (
            <BookmarkCheck className="mr-2 h-5 w-5 text-primary" />
          ) : (
            <Bookmark className="mr-2 h-5 w-5 text-muted-foreground" />
          )}
          Bookmark
        </Toggle>
      </TooltipTrigger>
      <TooltipContent>
        {isFavorite
          ? `Remove ${title} from favorites`
          : `Add ${title} to favorites`}
      </TooltipContent>
    </Tooltip>
  );
}
