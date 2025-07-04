import { useState, useEffect } from 'react';
const url = 'https://www.course-api.com/react-tours-project';
import { type Tour, tourSchema } from './types';

function Component() {
  // tours
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }
        // Assume the API returns an array of tours and attempt to parse it as such.
        // WARNING: This is a TypeScript assertion only – no runtime validation is done here.
        // It's better to validate the data afterward (as done below).
        const rawData: Tour[] = await response.json();

        // Validate the fetched data using Zod to ensure it matches the expected schema.
        // `tourSchema.array()` creates a schema for an array of Tour objects.
        // `safeParse()` checks the data and returns either a success or an error result.
        const result = tourSchema.array().safeParse(rawData);

        if (!result.success) {
          // If validation failed, log the detailed error and throw a generic one
          console.log(result.error.message);
          throw new Error(`Failed to parse tours`);
        }

        // If validation succeeded, store the verified and typed data in state
        setTours(result.data);
      } catch (error) {
        const message = error instanceof Error ? error.message : '';
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error {isError}</h3>;
  }

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}
export default Component;
