export function onRequest(context) {
  return new Response(JSON.stringify({
    NAME: context.env.NAME,
    PHONE: context.env.PHONE
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
} 