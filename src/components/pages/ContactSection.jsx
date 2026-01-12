import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Facebook,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Discord, TwitterX } from "react-bootstrap-icons";
// import { validateEmail } from "react-email-validator";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const socialLinks = [
    { logo: <Linkedin />, href: "https://www.linkedin.com/in/vedang-dhuri-b03280348" },
    { logo: <Instagram />, href: "https://www.instagram.com/vedang.dhuri.69" },
    { logo: <Facebook />, href: "https://www.facebook.com/vedang.dhuri.69/" },
    { logo: <Github />, href: "https://github.com/vedangdhuri" },
    { logo: <Discord className="w-6 h-6" />, href: "https://discord.com/users/767682446959050753" },
    { logo: <TwitterX className="w-6 h-6"/>, href: "https://x.com/VedangDhuri69" },
  ]

  // ⚙️ Replace this with your real Discord webhook URL
  const DISCORD_WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct payload for Discord
    const payload = {
      username: "Portfolio Contact Bot",
      embeds: [
        {
          title: "📩 New Contact Message",
          color: 0x00b0f4,
          fields: [
            {
              name: "👤 Name",
              value: `${formData.firstName} ${formData.lastName}`,
              inline: false,
            },
            {
              name: "📧 Email",
              value: formData.email,
              inline: false,
            },
            {
              name: "💬 Message",
              value: formData.message,
              inline: false,
            },
          ],
          footer: {
            text: "Message from portfolio contact form",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "✅ Message sent!",
          description:
            "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        toast({
          title: "❌ Failed to send message",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending Discord webhook:", error);
      toast({
        title: "⚠️ Error sending message",
        description: "Network or webhook issue. Check console for details.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In{" "}
          <span className="text-blue-400 transition delay-100 ease-in-out hover:text-indigo-500">
            Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Left Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-8 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <Mail className="h-6 w-6 text-blue-400" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vedangdhuri.work@gmail.com"
                    className="text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    vedangdhuri.work@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <MapPin className="h-6 w-6 text-blue-400" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-blue-400 transition-colors">
                    Sindhudurg, Maharashtra, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 ">Connect With Me</h4>
              <div className="flex mt-8 space-x-8 justify-center ">
                {socialLinks.map((item) => (
                  <a
                    key={item}
                    className="transition delay-100 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-blue-400"
                    href={item.href} target="_blank">
                    {item.logo}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  Your First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-primary transition-all delay-50 ease-in-out"
                  placeholder="First Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Your Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-primary transition-all delay-50 ease-in-out"
                  placeholder="Last Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-primary transition-all delay-50 ease-in-out"
                  placeholder="youremail@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input placeholder-gray-500 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none transition-all delay-50 ease-in-out"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button font-bold bg-blue-400 w-full flex items-center justify-center gap-2 transition delay-75 ease-in-out hover:bg-indigo-500"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};