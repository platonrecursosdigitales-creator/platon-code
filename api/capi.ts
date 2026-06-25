export default async function handler(req: any, res: any) {
  // Configuración de CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { eventName, eventId, eventUrl, userAgent, fbp, fbc, customData } = req.body;

  const CAPI_TOKEN = process.env.META_CAPI_TOKEN || "EAAVfV5r9VOMBR584aaZCPL49oniNkC3k9EiG3e4tHby2BNCGPZCLEVfftCCxsmLCNHYOy91qjVgZC5XoYtYKV5UXizThEid5ZAVxoWxHkEwoi7sSylRmrQZBDeZCj1KuwmWKMdqIrJ5WRNARN4lrTFUw3OTquTet76RJjAlCmKEQ28W8gqCJ9iZByc10fR5PQFjQgZDZD";
  const PIXEL_ID = process.env.META_PIXEL_ID || '856230780501588';

  if (!CAPI_TOKEN) {
    console.error("Missing META_CAPI_TOKEN env variable");
    return res.status(500).json({ error: 'Missing configuration' });
  }

  // La IP real la obtenemos de los headers que Vercel inyecta
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';

  // Formato oficial para Facebook Conversions API
  const eventData = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventUrl,
        action_source: "website",
        user_data: {
          client_ip_address: clientIp.split(',')[0].trim(),
          client_user_agent: userAgent,
          fbp: fbp || undefined,
          fbc: fbc || undefined
        },
        custom_data: customData || {}
      }
    ]
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${CAPI_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();
    if (!response.ok) {
      console.error("Facebook API error:", result);
      return res.status(response.status).json(result);
    }

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error calling Facebook Graph API:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
