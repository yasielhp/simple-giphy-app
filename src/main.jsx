import {createRoot} from 'react-dom/client'
import { App } from './App'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';


const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </NextThemesProvider>
);

