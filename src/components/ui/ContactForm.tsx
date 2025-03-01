import React from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const ContactForm: React.FC<ContactFormProps> = ({ className, ...props }) => {
  return (
    <form className={cn("grid grid-cols-1 gap-6", className)} {...props}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[rgba(51,51,51,1)]"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-primary-500 focus:ring-primary-500"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[rgba(51,51,51,1)]"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-primary-500 focus:ring-primary-500"
          placeholder="john.doe@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[rgba(51,51,51,1)]"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-primary-500 focus:ring-primary-500"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <Button variant="secondary" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
