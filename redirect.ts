// redirect.ts

const redirectUrl = "http://srv234979.hoster-test.ru/sd/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
