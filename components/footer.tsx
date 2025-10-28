export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/40">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hakim Alkafah. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built with Next.js, Tailwind CSS, and shadcn/ui</p>
        </div>
      </div>
    </footer>
  )
}
