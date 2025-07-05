import { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Create a new FormData object from the submitted form element (e.currentTarget is the form)

    // const formData = new FormData(e.target as HTMLFormElement);
    // Alternative way using type casting (not recommended when e.currentTarget is available)

    const data = Object.fromEntries(formData);
    // Convert the FormData entries into a plain JavaScript object (key-value pairs)

    console.log(data); // { text: 'my text', email: 'my email' }
    // Log the resulting object to the console for debugging

    const text = formData.get('text') as string;
    // Get the value of the 'text' input from the FormData and cast it as a string

    const person: Person = { name: data.text as string };
    // Create a Person object using the 'text' value from the data object, cast as string
  };

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
