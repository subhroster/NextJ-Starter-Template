export function Footer() {
  return (
    <footer role="contentinfo" className="border-t py-6 md:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center md:h-24">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
