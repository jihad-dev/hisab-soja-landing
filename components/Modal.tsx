"use client";
import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = { open: boolean; onClose: () => void; title: string; side?: boolean; children: ReactNode };

export default function Modal({ open, onClose, title, side = false, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`fixed inset-0 z-[60] flex ${side ? "justify-end" : "items-center justify-center p-4"}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <button aria-label="বন্ধ করুন" onClick={onClose} className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />
          <motion.div
            role="dialog" aria-modal="true" aria-label={title}
            initial={side ? { x: "100%" } : { opacity: 0, y: 24 }}
            animate={side ? { x: 0 } : { opacity: 1, y: 0 }}
            exit={side ? { x: "100%" } : { opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className={`relative overflow-y-auto bg-white shadow-2xl ${
              side ? "h-full w-full max-w-md" : "max-h-[85vh] w-full max-w-lg rounded-3xl"
            }`}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
              <h2 className="text-lg font-bold">{title}</h2>
              <button onClick={onClose} aria-label="বন্ধ করুন" className="rounded-full p-2 text-slate2 hover:bg-slate-100">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
