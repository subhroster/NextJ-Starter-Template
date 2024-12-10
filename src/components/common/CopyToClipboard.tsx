import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function CopyToClipboard({
  value,
  popoverMessage = "Copied!",
  duration = 1000,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsOpen(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, duration);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          className={className}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <p className="text-sm font-medium">{popoverMessage}</p>
      </PopoverContent>
    </Popover>
  );
}
