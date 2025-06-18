import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const emailConfig = {
      fromEmail: process.env.FROM_EMAIL || "bohraproperty360@gmail.com",
      smtpHost: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      smtpUser: process.env.SMTP_USER || "8ff54e001@smtp-brevo.com",
      smtpPassword: process.env.SMTP_PASSWORD || "k4TVsrKBZWwH3Aa6",
    };

    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Note: Using fallback values for now, environment variables will be fixed later

    // Create transporter using email config (with fallback values)
    const transporter = nodemailer.createTransport({
      host: emailConfig.smtpHost,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailConfig.smtpUser,
        pass: emailConfig.smtpPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content for you (main notification)
    const mailOptions = {
      from: `"Bohra Property Website" <${emailConfig.fromEmail}>`,
      to: emailConfig.fromEmail, // Your main email where notifications will come
      replyTo: email,
      subject: `🏠 New Inquiry from ${name} - Bohra Property`,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🏠 New Property Inquiry</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Bohra Property Contact Form</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <div style="background-color: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 25px;">
                <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px;">📋 Customer Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 100px;">👤 Name:</td>
                    <td style="padding: 8px 0; color: #333;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">📧 Email:</td>
                    <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">📱 Phone:</td>
                    <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #fff8f0; border-left: 4px solid #ff9800; padding: 20px; margin-bottom: 25px;">
                <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">💬 Customer Message</h3>
                <div style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
                  <p style="margin: 0; line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div style="text-align: center; margin: 25px 0;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 0 10px;">✉️ Reply via Email</a>
                <a href="tel:${phone}" style="display: inline-block; background-color: #4caf50; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 0 10px;">📞 Call Now</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                📅 Received: ${new Date().toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })} IST
              </p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
                🌐 Sent from Bohra Property website contact form
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply email for customer
    const autoReplyOptions = {
      from: `"Bohra Property Team" <${emailConfig.fromEmail}>`,
      to: email,
      subject:
        "🏠 Thank you for contacting Bohra Property - We'll respond within 24 hours",
      headers: {
        "X-Auto-Response-Suppress": "OOF, DR, RN, NRN",
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You - Bohra Property</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f0f4f8;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
            
            <!-- Header with Logo Area -->
            <div style="background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); padding: 40px 30px; text-align: center;">
              <div style="background-color: white; border-radius: 50%; width: 80px; height: 80px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 40px;">
                🏠
              </div>
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Thank You!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">We've received your inquiry</p>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #333; margin: 0 0 10px 0; font-size: 24px;">Dear ${name},</h2>
                <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 0;">
                  Thank you for reaching out to <strong style="color: #4CAF50;">Bohra Property</strong>. 
                  We have received your inquiry and our expert team will get back to you within 
                  <strong style="color: #ff6b35;">24 hours</strong>.
                </p>
              </div>
              
              <!-- Message Summary Card -->
              <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%); border-radius: 12px; padding: 25px; margin: 25px 0; border: 1px solid #e1e8f0;">
                <h3 style="color: #333; margin: 0 0 20px 0; font-size: 20px; text-align: center;">📝 Your Inquiry Summary</h3>
                
                <div style="background-color: white; border-radius: 8px; padding: 20px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #f0f0f0;">
                      <td style="padding: 12px 0; color: #666; font-weight: bold; width: 100px;">👤 Name:</td>
                      <td style="padding: 12px 0; color: #333; font-size: 16px;">${name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f0f0f0;">
                      <td style="padding: 12px 0; color: #666; font-weight: bold;">📧 Email:</td>
                      <td style="padding: 12px 0; color: #4CAF50; font-size: 16px;">${email}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f0f0f0;">
                      <td style="padding: 12px 0; color: #666; font-weight: bold;">📱 Phone:</td>
                      <td style="padding: 12px 0; color: #333; font-size: 16px;">${phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; color: #666; font-weight: bold; vertical-align: top;">💬 Message:</td>
                      <td style="padding: 12px 0; color: #333; font-size: 16px; line-height: 1.5;">${message}</td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <!-- Contact Information Card -->
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; padding: 25px; margin: 25px 0;">
                <h3 style="margin: 0 0 20px 0; font-size: 20px; text-align: center;">📞 Our Contact Information</h3>
                <div style="text-align: center;">
                  <p style="margin: 10px 0; font-size: 16px;"><strong>🏢 Address:</strong><br>SCO 63, 1st Floor, OLD Judicial Complex<br>Civil Line, Sector-15, Part-1, Gurugram</p>
                  <p style="margin: 15px 0; font-size: 16px;"><strong>📞 Phone:</strong> +91 9999913030 | +91 9990859732</p>
                                                        <p style="margin: 10px 0; font-size: 16px;"><strong>✉️ Email:</strong> ${
                                                          emailConfig.fromEmail
                                                        }</p>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div style="text-align: center; margin: 30px 0;">
                <div style="background-color: #fff3cd; border-radius: 8px; padding: 20px; border-left: 4px solid #ffc107;">
                  <p style="margin: 0; color: #856404; font-size: 16px;">
                    <strong>🕐 Response Time:</strong> Our property experts typically respond within 2-4 hours during business hours.
                  </p>
                </div>
              </div>
              
              <!-- Social Proof -->
              <div style="text-align: center; margin: 25px 0;">
                <p style="color: #666; margin: 0; font-size: 14px;">
                  ⭐ Trusted by 500+ property investors in Gurugram
                </p>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 25px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0 0 10px 0; color: #333; font-size: 18px; font-weight: bold;">
                Best regards,<br>
                <span style="color: #4CAF50;">Bohra Property Team</span>
              </p>
              <p style="margin: 0; font-size: 12px; color: #666;">
                📅 Sent: ${new Date().toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })} IST
              </p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
                🌐 This is an automated response from Bohra Property website
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    try {
      // First send notification to you
      const mainEmailResult = await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("❌ Error sending notification email:", error);
      throw new Error("Failed to send notification email");
    }

    try {
      // Then send auto-reply to customer
      const autoReplyResult = await transporter.sendMail(autoReplyOptions);
    } catch (error) {
      console.error("❌ Error sending auto-reply:", error);
      // Don't throw error here as main notification is already sent
      console.log(
        "Main notification was sent successfully, but auto-reply failed"
      );
    }

    return NextResponse.json(
      {
        message: "Email sent successfully!",
        details: `Inquiry from ${name} forwarded to ${emailConfig.fromEmail} and confirmation sent to ${email}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
