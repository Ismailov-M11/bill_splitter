import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--card-bg)] group-[.toaster]:text-[var(--text-color)] group-[.toaster]:border-[var(--input-border)] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[var(--muted-text)]",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-[var(--card-bg)] group-[.toast]:text-[var(--muted-text)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
