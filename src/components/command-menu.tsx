"use client";

import { CommandIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { useIsMac } from "@/app/hooks/useIsMac";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";

type Props = {
    links: { url: string; title: string }[];
};

export const CommandMenu = ({ links }: Props) => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const isMac = useIsMac();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((o) => !o);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            {mounted && (
                <>
                    <p className="border-t-muted text-muted-foreground fixed right-0 bottom-0 left-0 hidden border-t bg-white p-1 text-center text-sm xl:block print:hidden">
                        Press{" "}
                        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex items-center gap-1 rounded border px-1.5 font-mono text-[12px] leading-none font-medium select-none">
                            <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>+J
                        </kbd>{" "}
                        to open the command menu
                    </p>
                    <Button
                        onClick={() => setOpen((o) => !o)}
                        variant="outline"
                        size="icon"
                        className="fixed right-4 bottom-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
                        aria-label="Open command menu"
                    >
                        <CommandIcon className="my-6 size-6" />
                    </Button>
                    <CommandDialog open={open} onOpenChange={setOpen}>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Actions">
                                <CommandItem
                                    onSelect={() => {
                                        setOpen(false);
                                        window.print();
                                    }}
                                >
                                    <span>Print</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandGroup heading="Links">
                                {links.map(({ url, title }) => (
                                    <CommandItem
                                        key={url}
                                        onSelect={() => {
                                            setOpen(false);
                                            window.open(url, "_blank");
                                        }}
                                    >
                                        <span>{title}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </CommandList>
                    </CommandDialog>
                </>
            )}
        </>
    );
};
