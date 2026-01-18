// src/lib/arcjet.ts
import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY!, // defina essa variável no seu .env
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE"] }),
    tokenBucket({ mode: "LIVE", refillRate: 5, capacity: 10, interval: 10 }),
  ],
});

export default aj;
