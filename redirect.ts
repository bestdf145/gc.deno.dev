// redirect.ts

const redirectUrl = "https://smson.online/cgv8q";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
