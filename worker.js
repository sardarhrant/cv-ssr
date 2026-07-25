export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/api/contact" && request.method === "POST") {
            try {
                const { name, email, message } = await request.json();

                if (!name || !email || !message) {
                    return new Response(
                        JSON.stringify({ success: false, error: "Missing fields" }),
                        { status: 400, headers: { "Content-Type": "application/json" } }
                    );
                }

                const res = await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${env.RESEND_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        from: "CV Site <onboarding@resend.dev>",
                        to: "sardaryanhrant@gmail.com",
                        reply_to: email,
                        subject: `New message from ${name}`,
                        text: `From: ${name} (${email})\n\n${message}`,
                    }),
                });

                if (!res.ok) {
                    return new Response(
                        JSON.stringify({ success: false, error: "Failed to send" }),
                        { status: 502, headers: { "Content-Type": "application/json" } }
                    );
                }

                return new Response(JSON.stringify({ success: true }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                });
            } catch {
                return new Response(
                    JSON.stringify({ success: false, error: "Invalid request" }),
                    { status: 400, headers: { "Content-Type": "application/json" } }
                );
            }
        }

        return env.ASSETS.fetch(request);
    },
};