import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  // something: z.string(),
});

// Automatically infer the TypeScript type `Tour` from the `tourSchema` Zod schema.
// This ensures that the validation schema and the TypeScript type always stay in sync.
type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();

    // Validate that `rawData` is an array of objects matching the `tourSchema` structure.
    // `safeParse` returns an object:
    // - If validation passes → { success: true, data }
    // - If validation fails  → { success: false, error }
    // This avoids exceptions and gives you a safe way to handle invalid data.
    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    console.log(result);
    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'There was an error';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});
