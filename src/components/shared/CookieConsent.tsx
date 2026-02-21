"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "goji-cookie-consent";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
        setIsVisible(false);
        window.dispatchEvent(new Event("cookie-consent-accepted"));
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[420px] z-50 rounded-2xl border border-[rgba(16,16,16,0.08)] bg-white p-5 shadow-lg"
                >
                    <p className="text-sm text-[#101010] leading-relaxed">
                        Мы используем файлы cookie для улучшения работы сайта.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={handleAccept}
                            className="flex-1 md:flex-none rounded-xl bg-[#101010] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] cursor-pointer"
                        >
                            Принять
                        </button>
                        <button
                            onClick={handleDecline}
                            className="flex-1 md:flex-none rounded-xl border border-[rgba(16,16,16,0.1)] bg-white px-5 py-2.5 text-sm font-medium text-[#101010] transition-colors hover:bg-gray-50 cursor-pointer"
                        >
                            Отклонить
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
