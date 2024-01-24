"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";

import { toast } from "sonner";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  subject: z.string(),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const ContactForm = ({
  name,
  email,
  phone,
  subject,
  message,
  send,
  success,
  label,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/send";
    //Todo bien hasta aca
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message Sent.");

      setFormSubmitted(true);
    } else {
      console.log("Message failed to send.");
      toast.error("Hubo un error al enviar el mensaje", {
        description: "Por favor intente de nuevo mas tarde",
        action: {
          label: label,
          onClick: () => console.log("Closed"),
        },
      });
    }
  }

  useEffect(() => {
    if (formSubmitted) {
      toast.success(success, {
        action: {
          label: label,
          onClick: () => console.log("Closed"),
        },
      });
      setFormSubmitted(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-[95%] flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="name"
          id="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder={name}
                  {...field}
                  className="!text-white !bg-transparent rounded-[40px] px-6 md:!px-8 py-6 sm:!py-8 text-base sm:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          id="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder={email}
                  {...field}
                  className="!text-white !bg-transparent rounded-[40px] px-6 md:!px-8 py-6 sm:!py-8 text-base sm:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          id="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder={phone}
                  {...field}
                  className="!text-white !bg-transparent rounded-[40px] px-6 md:!px-8 py-6 sm:!py-8 text-base sm:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          id="subject"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder={subject}
                  {...field}
                  className="!text-white !bg-transparent rounded-[40px] px-6 md:!px-8 py-6 sm:!py-8 text-base sm:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          id="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Textarea
                  placeholder={message}
                  {...field}
                  className="!text-white !bg-transparent rounded-[40px] h-[300px] px-6 md:!px-8 py-6 sm:!py-8 text-base sm:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className={`btn max-sm:!text-sm hover:scale-[1.1] transition-all duration-100`}
          onClick={() => {
            toast.loading("Enviando Mensaje", {
              duration: 1500,
            });
          }}
        >
          {send}
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
