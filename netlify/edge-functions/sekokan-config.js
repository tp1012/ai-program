export default async () => {
  const config = {
    apiKey:            Deno.env.get("SEKOKAN_FIREBASE_API_KEY")            ?? "",
    authDomain:        Deno.env.get("SEKOKAN_FIREBASE_AUTH_DOMAIN")        ?? "",
    projectId:         Deno.env.get("SEKOKAN_FIREBASE_PROJECT_ID")         ?? "",
    storageBucket:     Deno.env.get("SEKOKAN_FIREBASE_STORAGE_BUCKET")     ?? "",
    messagingSenderId: Deno.env.get("SEKOKAN_FIREBASE_MESSAGING_SENDER_ID") ?? "",
    appId:             Deno.env.get("SEKOKAN_FIREBASE_APP_ID")             ?? "",
    measurementId:     Deno.env.get("SEKOKAN_FIREBASE_MEASUREMENT_ID")     ?? "",
  };

  return new Response(
    `window.firebaseConfig = ${JSON.stringify(config)};\nwindow.constructionAppId = 'construction-sim-v3';`,
    {
      headers: {
        "content-type": "application/javascript; charset=utf-8",
        "cache-control": "no-store",
      },
    }
  );
};
