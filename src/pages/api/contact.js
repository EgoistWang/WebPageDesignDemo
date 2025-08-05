export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, subject, message } = data;
    
    if (!firstName || !lastName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Missing required fields' 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid email address' 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // In a real implementation, you would:
    // 1. Send email using a service like SendGrid, Mailgun, or Nodemailer
    // 2. Store the message in a database
    // 3. Send notifications to admin

    // For demo purposes, we'll simulate processing
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      company: data.company || 'Not provided',
      subject,
      budget: data.budget || 'Not specified',
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!' 
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Internal server error' 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}