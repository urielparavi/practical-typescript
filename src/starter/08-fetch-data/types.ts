import axios from 'axios';
import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

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

export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);

  // Validate the fetched data using Zod to ensure it matches the expected schema.
  // `tourSchema.array()` creates a schema for an array of Tour objects.
  // `safeParse()` checks the data and returns either a success or an error result.
  const result = tourSchema.array().safeParse(response.data);
  if (!result.success) {
    // If validation failed, log the detailed error and throw a generic one
    console.log(result.error.message);
    throw new Error(`Failed to parse tours`);
  }
  return result.data;
};
