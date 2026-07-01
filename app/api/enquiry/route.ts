import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  studentClass: z.string().min(1),
  exam: z.string().min(1),
  batch: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: Connect to your CRM / Google Sheet / email service here.
    // Example integrations you can wire up:
    //  - Send an email via Resend/SendGrid to the admissions team
    //  - Push a row to Google Sheets via a service account
    //  - Forward the lead to a CRM (e.g. LeadSquared, Zoho) via their API
    //
    // For now we log the lead server-side so nothing is lost during development.
    console.log("New enquiry received:", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid form submission" },
      { status: 400 }
    );
  }
}
