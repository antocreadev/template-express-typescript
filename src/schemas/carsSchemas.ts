import { z } from 'zod';

export const carSchema = z.object({
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  year: z.number().min(1886, "Year must be valid").max(new Date().getFullYear(), "Year must be valid"),
  color: z.string().min(1, "Color is required"),
});

export type CarInput = z.infer<typeof carSchema>;
