#!/usr/bin/env node

import path from "path";

import { loadEnvConfig } from "@next/env";

loadEnvConfig(path.join(__dirname, `./..`), false);

// Check if user has forgot to change NEXT_PUBLIC_SITE_URL
if (
  typeof process.env.NEXT_PUBLIC_SITE_URL === "undefined" ||
  process.env.NEXT_PUBLIC_SITE_URL.startsWith("http://localhost") ||
  process.env.NEXT_PUBLIC_SITE_URL.startsWith("https://localhost")
) {
  console.error(
    "\x1b[41m",
    "\x1b[1m[ERROR]",
    "\x1b[0m",
    `"\x1b[1mSite URL is still set to LOCALHOST, please set this to the correct URL!\x1b[0m".`
  );
  process.exit(1);
}

export {};
