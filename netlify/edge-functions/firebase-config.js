export default async () => {
  const config = {
    apiKey:            Deno.env.get("FIREBASE_API_KEY")            ?? "",
    authDomain:        Deno.env.get("FIREBASE_AUTH_DOMAIN")        ?? "",
    projectId:         Deno.env.get("FIREBASE_PROJECT_ID")         ?? "",
    storageBucket:     Deno.env.get("FIREBASE_STORAGE_BUCKET")     ?? "",
    messagingSenderId: Deno.env.get("FIREBASE_MESSAGING_SENDER_ID") ?? "",
    appId:             Deno.env.get("FIREBASE_APP_ID")             ?? "",
    measurementId:     Deno.env.get("FIREBASE_MEASUREMENT_ID")     ?? "",
  };

  return new Response(
    `window.firebaseConfig = ${JSON.stringify(config)};`,
    {
      headers: {
        "content-type": "application/javascript; charset=utf-8",
        "cache-control": "no-store",
      },
    }
  );
};
