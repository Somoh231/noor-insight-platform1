import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Optional DOM id for the `<h2>` (ARIA labelledby targets). */
  id?: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  id,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-10 bg-gold/70" aria-hidden />
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      </div>
      <h2
        id={id}
        className="mt-6 text-balance text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[2rem] lg:text-[2.25rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "text-dgray/82 mt-6 max-w-prose text-base leading-[1.75] sm:text-lg sm:leading-[1.75]",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
