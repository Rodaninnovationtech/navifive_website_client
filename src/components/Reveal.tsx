import { motion } from "framer-motion";
import { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface MaskedLinesProps {
    lines: ReactNode[];
    className?: string;
    delay?: number;
    stagger?: number;
    testId?: string;
}

/** Signature on-load moment: lines rise out of overflow-hidden masks. */
export function MaskedLines({ lines, className = "", delay = 0, stagger = 0.1, testId }: MaskedLinesProps) {
    return (
        <span data-testid={testId} className={`block ${className}`}>
            {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                    <motion.span
                        className="block will-change-transform"
                        initial={{ y: "115%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1.1, ease: EASE, delay: delay + i * stagger }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

interface FadeUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    testId?: string;
}

export function FadeUp({ children, className = "", delay = 0, y = 32, testId }: FadeUpProps) {
    return (
        <motion.div
            data-testid={testId}
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}
