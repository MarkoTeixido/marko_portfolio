"use client";

import { useEffect, useState } from "react";

export default function TimeDisplay() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "America/Argentina/Buenos_Aires",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };
            setTime(now.toLocaleTimeString("en-US", options));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    // Avoid hydration mismatch by rendering a placeholder or nothing initially
    if (!time) return <span className="opacity-0">00:00:00 PM</span>;

    return <span>{time}</span>;
}
