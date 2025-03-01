import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address."
  })
});
type FormValues = z.infer<typeof formSchema>;
const NewsletterSignup: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });
  function onSubmit(data: FormValues) {
    toast({
      title: "Newsletter subscription successful",
      description: "Thank you for subscribing to our newsletter!"
    });
    console.log(data);
    form.reset();
  }
  return <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-100 scale-in">
      <h3 className="text-xl font-semibold mb-4 slide-in-bottom">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-[rgba(119,117,120,1)] mb-6 slide-in-bottom" style={{
      animationDelay: "0.1s"
    }}>
        Stay updated with the latest in AI and Python backend development
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 slide-in-bottom" style={{
        animationDelay: "0.2s"
      }}>
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Your email address" className="focus:ring-2 focus:ring-yellow-300 transition-shadow py-0 px-0 my-0" />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          <Button type="submit" variant="primary" className="bg-[#FFDE57] text-[#6A4D26] hover:bg-[#FFD315] hover-scale py-[3px] px-[16px]">
            Subscribe
          </Button>
        </form>
      </Form>
    </div>;
};
export default NewsletterSignup;