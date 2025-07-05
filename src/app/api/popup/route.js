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

    const { name, email, phone } = await request.json();

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter using email config
    const transporter = nodemailer.createTransport({
      host: emailConfig.smtpHost,
      port: 587,
      secure: false,
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
      to: emailConfig.fromEmail,
      replyTo: email,
      subject: `🎯 New Popup Lead from ${name} - Bohra Property`,
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
          <title>New Popup Lead</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🎯 New Popup Lead</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Bohra Property Popup Form</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <div style="background-color: #fff8f0; border-left: 4px solid #ff6b35; padding: 20px; margin-bottom: 25px;">
                <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px;">📋 Lead Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold; width: 100px;">👤 Name:</td>
                    <td style="padding: 8px 0; color: #333;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">📧 Email:</td>
                    <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #ff6b35; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: bold;">📱 Phone:</td>
                    <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #ff6b35; text-decoration: none;">${phone}</a></td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #f0f8ff; border-left: 4px solid #4CAF50; padding: 20px; margin-bottom: 25px;">
                <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">💡 Lead Source</h3>
                <p style="margin: 0; color: #333;">This lead was captured through the website popup form. They showed interest in your properties!</p>
              </div>
              
              <!-- Quick Actions -->
              <div style="text-align: center; margin: 25px 0;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #ff6b35; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 0 10px;">✉️ Reply via Email</a>
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
                🌐 Sent from Bohra Property website popup form
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // // Auto-reply email for customer
    // const autoReplyOptions = {
    //   from: `"Bohra Property Team" <${emailConfig.fromEmail}>`,
    //   to: email,
    //   subject: "🏠 Thank you for your interest in Bohra Property!",
    //   headers: {
    //     "X-Auto-Response-Suppress": "OOF, DR, RN, NRN",
    //   },
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <meta charset="utf-8">
    //       <title>Thank You - Bohra Property</title>
    //     </head>
    //     <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f0f4f8;">
    //       <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">

    //         <!-- Header with Logo Area -->
    //         <div style="background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); padding: 40px 30px; text-align: center;">
    //           <div style="background-color: white; border-radius: 50%; width: 80px; height: 80px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 40px;">
    //             🏠
    //           </div>
    //           <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Thank You!</h1>
    //           <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">We've received your interest</p>
    //         </div>

    //         <!-- Main Content -->
    //         <div style="padding: 40px 30px;">

    //           <!-- Greeting -->
    //           <div style="text-align: center; margin-bottom: 30px;">
    //             <h2 style="color: #333; margin: 0 0 10px 0; font-size: 24px;">Dear ${name},</h2>
    //             <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 0;">
    //               Thank you for showing interest in <strong style="color: #4CAF50;">Bohra Property</strong>.
    //               We have received your details and our expert team will contact you within
    //               <strong style="color: #ff6b35;">24 hours</strong> to discuss your property requirements.
    //             </p>
    //           </div>

    //           <!-- Details Summary Card -->
    //           <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%); border-radius: 12px; padding: 25px; margin: 25px 0; border: 1px solid #e1e8f0;">
    //             <h3 style="color: #333; margin: 0 0 20px 0; font-size: 20px; text-align: center;">📝 Your Details</h3>

    //             <div style="background-color: white; border-radius: 8px; padding: 20px;">
    //               <table style="width: 100%; border-collapse: collapse;">
    //                 <tr style="border-bottom: 1px solid #f0f0f0;">
    //                   <td style="padding: 12px 0; color: #666; font-weight: bold; width: 100px;">👤 Name:</td>
    //                   <td style="padding: 12px 0; color: #333; font-size: 16px;">${name}</td>
    //                 </tr>
    //                 <tr style="border-bottom: 1px solid #f0f0f0;">
    //                   <td style="padding: 12px 0; color: #666; font-weight: bold;">📧 Email:</td>
    //                   <td style="padding: 12px 0; color: #4CAF50; font-size: 16px;">${email}</td>
    //                 </tr>
    //                 <tr>
    //                   <td style="padding: 12px 0; color: #666; font-weight: bold;">📱 Phone:</td>
    //                   <td style="padding: 12px 0; color: #333; font-size: 16px;">${phone}</td>
    //                 </tr>
    //               </table>
    //             </div>
    //           </div>

    //           <!-- Contact Information Card -->
    //           <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; padding: 25px; margin: 25px 0;">
    //             <h3 style="margin: 0 0 20px 0; font-size: 20px; text-align: center;">📞 Our Contact Information</h3>
    //             <div style="text-align: center;">
    //               <p style="margin: 10px 0; font-size: 16px;"><strong>🏢 Address:</strong><br>SCO 63, 1st Floor, OLD Judicial Complex<br>Civil Line, Sector-15, Part-1, Gurugram</p>
    //               <p style="margin: 15px 0; font-size: 16px;"><strong>📞 Phone:</strong> +91 9999913030 | +91 9990859732</p>
    //               <p style="margin: 10px 0; font-size: 16px;"><strong>✉️ Email:</strong> ${
    //                 emailConfig.fromEmail
    //               }</p>
    //             </div>
    //           </div>

    //           <!-- Call to Action -->
    //           <div style="text-align: center; margin: 30px 0;">
    //             <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
    //               <strong>Can't wait? Call us now!</strong>
    //             </p>
    //             <a href="tel:+919999913030" style="display: inline-block; background-color: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold;">📞 Call +91 9999913030</a>
    //           </div>
    //         </div>

    //         <!-- Footer -->
    //         <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
    //           <p style="margin: 0; font-size: 12px; color: #666;">
    //             📅 Sent: ${new Date().toLocaleString("en-IN", {
    //               timeZone: "Asia/Kolkata",
    //               year: "numeric",
    //               month: "long",
    //               day: "numeric",
    //               hour: "2-digit",
    //               minute: "2-digit",
    //             })} IST
    //           </p>
    //           <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
    //             🌐 Bohra Property Pvt. Ltd. - Your trusted real estate partner
    //           </p>
    //         </div>
    //       </div>
    //     </body>
    //     </html>
    //   `,
    // };

    // Send both emails
    await transporter.sendMail(mailOptions);
    // await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: "Popup form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Popup form error:", error);
    return NextResponse.json(
      { error: "Failed to submit popup form" },
      { status: 500 }
    );
  }
}
