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
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  subject: z.string(),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const ContactForm = ({ name, email, subject, message, send }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    const data = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message Sent.");
      form.reset(defaultValues);
      setFormSubmitted(true);
    } else {
      console.log("Message failed to send.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-[95%] flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="name"
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
          name="subject"
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
        <button type="submit" className="btn max-sm:!text-sm ">
          {send}
        </button>
        {formSubmitted && (
          <p className="text-green-500 text-sm mt-2">
            Se envio el email correctamente!
          </p>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
