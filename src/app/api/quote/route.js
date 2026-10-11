// TODO: Integrate a provider such as a verified transactional email or CRM endpoint.
// No credentials, data storage or successful submissions are configured here.
// The public QuoteForm intentionally uses a working, user-controlled WhatsApp handoff.
export async function POST() {
  return Response.json({ ok: false, error: 'Server-side enquiry submission is not configured. Please use the WhatsApp form.' }, { status: 501 })
}
