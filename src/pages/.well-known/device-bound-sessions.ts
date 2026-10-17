import type { APIRoute } from "astro";

export const prerender = false;

const deviceBoundSessions = {
  registering_origins: [
    "https://passport-api.postal.wiki",
    "https://devpassport-api.postal.wiki",
    "https://prepassport-api.postal.wiki",
    "https://sandboxpassport-api.postal.wiki",
  ],
  relying_origins: [] as string[],
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify(deviceBoundSessions), {
    headers: {
      "Content-Type": "application/json",
    },
  });
