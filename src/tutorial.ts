let someValue: never = 0;

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme): void {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme;
}

enum Color {
  Red,
  Blue,
  // Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    // case Color.Green:
    //   return 'Green';
    default:
      // at build time
      let unexpectedColor: never = color;

      // at runtime
      throw new Error(`Unexpected color value: ${color}`);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
