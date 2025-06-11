// redirect.ts

const redirectUrl = "http://srv235081.hoster-test.ru/gcu/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
