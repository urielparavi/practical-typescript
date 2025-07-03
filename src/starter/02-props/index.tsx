function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>ID: {id}</h2>
    </div>
  );
}
export default Component;
