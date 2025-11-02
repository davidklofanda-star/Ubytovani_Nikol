import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const sendContactEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    roomType: v.string(),
    dateFrom: v.string(),
    dateTo: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const { name, email, phone, roomType, dateFrom, dateTo, message } = args;

    try {
      const resend = new Resend(process.env.RESEND_API_KEY!);
      
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "silvaprachovska@centrum.cz",
        subject: "Nová rezervace - Ubytování Nikol",
        text: `
Nová rezervace z webu Ubytování Nikol:

Jméno: ${name}
Email: ${email}
Telefon: ${phone}
Typ pokoje: ${roomType}
Datum od: ${dateFrom}
Datum do: ${dateTo}

Zpráva:
${message}
        `,
      });

      console.log('[sendContactEmail] Email sent successfully');
      return { success: true };
    } catch (err: any) {
      console.error('[sendContactEmail] Exception', err?.message || err);
      throw new Error('Nepodařilo se odeslat email');
    }
  },
});