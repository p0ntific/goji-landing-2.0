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
                    body: { background: "#171717" },
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
        <div className=" w-full md:max-w-[960px] overflow-hidden rounded-3xl">
            <Cal
                calLink={calLink}
                config={{
                    "ui.color-scheme": "dark",
                    theme: "dark",
                    "cal.embed.pageType": "user.event.booking.slots",
                }}
            />
        </div>
    );
}
