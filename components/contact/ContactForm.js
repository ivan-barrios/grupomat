"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
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

const ContactForm = () => {
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
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  placeholder="Name"
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
                  placeholder="Email"
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
                  placeholder="Asunto"
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
                  placeholder="Contanos algo..."
                  {...field}
                  className="!text-white !bg-transparent rounded-[40px] h-[300px] px-6 md:!px-8 py-6 sm:!py-8 text-base sm:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit" className="btn max-sm:!text-sm ">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
