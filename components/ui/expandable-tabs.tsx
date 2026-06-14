"use client";

import * as React from "react";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tab {
  title: string;
  icon: LucideIcon;
  href?: string;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  href?: never;
}

export type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

/** Small local replacement for usehooks-ts' useOnClickOutside. */
function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const buttonVariants = {
  initial: { gap: 0, paddingLeft: ".5rem", paddingRight: ".5rem" },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition: Transition = {
  delay: 0.1,
  type: "spring",
  bounce: 0,
  duration: 0.6,
};

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-ink",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement | null>(null);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-1 h-6 w-px bg-ink/15" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn("flex items-center gap-1", className)}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        return (
          <motion.button
            key={tab.title}
            type="button"
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index)}
            transition={transition}
            aria-label={tab.title}
            className={cn(
              "relative flex items-center rounded-full py-2 font-sans text-[11px] uppercase tracking-wide2 transition-colors duration-300",
              selected === index
                ? cn("bg-ink/[0.06]", activeColor)
                : "text-stone hover:bg-ink/[0.04] hover:text-ink",
            )}
          >
            <Icon size={18} strokeWidth={1.4} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
