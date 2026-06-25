export const trackEvent = async (eventName: string, customData?: Record<string, any>) => {
  const eventId = `evt_${Date.now()}_${Math.floor(Math.random() * 1000000)}`;

  // 1. Pixel Tracking (Frontend)
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData || {}, { eventID: eventId });
  }

  // 2. Conversions API Tracking (Backend)
  try {
    const url = window.location.href;
    const userAgent = navigator.userAgent;
    
    // Attempt to get Meta cookies if available for deduplication/matching
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : undefined;
    };
    
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    // We call our Vercel Serverless Function
    // We don't await blocking the UI, let it run in background
    fetch('/api/capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        eventUrl: url,
        userAgent,
        fbp,
        fbc,
        customData
      })
    }).catch(console.error); // Catch any network errors quietly
    
  } catch (err) {
    console.error("CAPI error:", err);
  }
};
