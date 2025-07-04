"use client";

import { PrinterIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from "./ui/drawer";

export const PrintDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="fixed right-4 bottom-4 size-16 rounded-full shadow-2xl print:hidden">
                    <PrinterIcon />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Print Resume</DrawerTitle>
                        <DrawerDescription>
                            Open your browser&apos;s print dialog to create a hard copy.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0"></div>
                    <DrawerFooter>
                        <Button onClick={() => window.print()}>Print</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
