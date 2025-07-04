// import Component from './final/05-challenge';
import Component from './starter/05-challenge';

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      {/* <Component type="basic" name="susan" /> */}
      {/* <Component type="advanced" name="anna" email="anna@gmail.com" /> */}

      <Component type="basic" name="anna" />
      <Component type="advanced" name="anna" email="anna@gmail.com" />
    </main>
  );
}

export default App;
