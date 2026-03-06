import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface NewsletterPayload {
  subject: string;
  htmlContent: string;
  fromName?: string;
  fromEmail?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Supabase configuration is missing");
    }

    const { subject, htmlContent, fromName, fromEmail } =
      (await req.json()) as NewsletterPayload;

    if (!subject || !htmlContent) {
      return new Response(
        JSON.stringify({ error: "subject and htmlContent are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fetch all active subscribers
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: subscribers, error: dbError } = await supabase
      .from("newsletter_subscribers")
      .select("email")
      .eq("is_active", true);

    if (dbError) {
      throw new Error(`Failed to fetch subscribers: ${dbError.message}`);
    }

    if (!subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: "No active subscribers found", sent: 0 }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const senderName = fromName || "Mission House Ghana";
    const senderEmail = fromEmail || "onboarding@resend.dev";

    // Send emails in batches of 50
    const batchSize = 50;
    let totalSent = 0;
    const errors: string[] = [];

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      const emailPromises = batch.map(async (subscriber) => {
        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: `${senderName} <${senderEmail}>`,
              to: [subscriber.email],
              subject,
              html: htmlContent,
            }),
          });

          const data = await res.json();
          if (!res.ok) {
            errors.push(`${subscriber.email}: ${JSON.stringify(data)}`);
          } else {
            totalSent++;
          }
        } catch (e) {
          errors.push(`${subscriber.email}: ${e instanceof Error ? e.message : "Unknown error"}`);
        }
      });

      await Promise.all(emailPromises);
    }

    return new Response(
      JSON.stringify({
        success: true,
        sent: totalSent,
        failed: errors.length,
        errors: errors.length > 0 ? errors : undefined,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Newsletter send error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
