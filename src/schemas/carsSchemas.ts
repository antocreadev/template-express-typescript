import { z } from "zod";

export const carSchema = z.object({
  image: z.string(),
  title: z.string(),
  description: z.string(),
  link: z.string(),
  price: z.number(),
  remise: z.number(),
});

export const Site = z.object({
  imageStart: z.string(),
  title: z.string(),
  description: z.string(),
  color: z.string().regex(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/),
  textFooter : z.string(),
});

export type CarInput = z.infer<typeof carSchema>;
