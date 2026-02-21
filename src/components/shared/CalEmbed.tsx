"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalEmbedProps {
    calLink: string;
}

export function CalEmbed({ calLink }: CalEmbedProps) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", {
                theme: "dark",
                styles: {
                    branding: { brandColor: "#ffffff" },
                    body: { background: "transparent" },
                },
                cssVarsPerTheme: {
                    dark: {
                        "--cal-bg": "transparent",
                        "--cal-bg-default": "transparent",
                        "--cal-bg-muted": "transparent",
                        "--cal-bg-subtle": "transparent",
                        "--cal-bg-emphasis": "transparent",
                    },
                    light: {
                        "--cal-bg": "transparent",
                        "--cal-bg-default": "transparent",
                        "--cal-bg-muted": "transparent",
                        "--cal-bg-subtle": "transparent",
                        "--cal-bg-emphasis": "transparent",
                    },
                },
                hideEventTypeDetails: false,
            });
        })();
    }, []);

    return (
        <div className="h-[1435px] md:h-[456px] w-full md:w-[960px] overflow-hidden rounded-2xl">
            <Cal calLink={calLink} config={{ theme: "dark" }} />
        </div>
    );
}
