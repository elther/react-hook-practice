import React, {useContext, useEffect} from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function UseContextComp(){
    return (
      <div className="container">
        <h1>UseContext</h1>
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>

        <ThemeContext.Provider value={themes.light}>
          <Toolbar />
        </ThemeContext.Provider>

        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
          <ThemeContext.Provider value={themes.light}>
            <Toolbar />
          </ThemeContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
