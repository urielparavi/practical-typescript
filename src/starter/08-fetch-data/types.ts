import { z } from 'zod';

// Define a Zod schema for a "tour" object.
// This describes the expected structure and types of the data.
// Each field must be a string.
export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  // something: z.string(), // Example of how to add more fields
});

// Infer the TypeScript type directly from the Zod schema.
// This keeps the type definition in sync with the validation schema.
export type Tour = z.infer<typeof tourSchema>;
