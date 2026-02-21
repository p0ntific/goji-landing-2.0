"use client";

import { useEffect } from "react";

const METRIKA_ID = 106947168;
const COOKIE_CONSENT_KEY = "goji-cookie-consent";

export function YandexMetrika() {
    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (consent === "accepted") {
            initMetrika();
        }

        const onAccept = () => initMetrika();
        window.addEventListener("cookie-consent-accepted", onAccept);
        return () =>
            window.removeEventListener("cookie-consent-accepted", onAccept);
    }, []);

    return (
        <noscript>
            <div>
                <img
                    src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                />
            </div>
        </noscript>
    );
}

function initMetrika() {
    if (window.ym) return;

    const id = METRIKA_ID;
    const src = `https://mc.yandex.ru/metrika/tag.js?id=${id}`;

    // Check if script is already loaded
    for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === src) return;
    }

    // Define ym function
    const ymFunc = function (...args: unknown[]) {
        ymFunc.a.push(args);
    };
    ymFunc.a = [] as unknown[];
    ymFunc.l = Number(new Date());
    window.ym = ymFunc;

    // Load script
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Initialize
    window.ym!(id, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        ecommerce: "dataLayer",
    });
}

declare global {
    interface Window {
        ym?: ((...args: unknown[]) => void) & { a?: unknown[]; l?: number };
    }
}
