import { Button } from "@workspace/ui/components/button"

export default function PlaygroundPage() {
  return (
    <>
      <div
        className="flex min-h-svh items-end p-6 text-background"
        style={{
          backgroundImage: "url(/images/bg/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex min-w-0 flex-col gap-4">
          <div>
            <h1 className="font-display text-[10rem] leading-[0.5]">
              Karimun Kemujan
            </h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
      <div className="flex min-h-[50svh] items-center justify-center p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project ready!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </>
  )
}
