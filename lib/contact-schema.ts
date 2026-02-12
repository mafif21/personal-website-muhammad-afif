import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(120),
  email: z.string().email("Please enter a valid email address").max(180),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(180),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  website: z.string().max(0).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
