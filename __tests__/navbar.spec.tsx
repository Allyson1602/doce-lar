import { render, screen } from '@testing-library/react'

import { Navbar } from '@/components/navbar/navbar';
import { ThemeProvider } from '@mui/material';
import { theme } from '../themes/themes';

describe('Tests for the Navbar component', () => {

    it('Should show a button in Navbar', () => {
        
      render(
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      );

      const button = screen.getByTestId('button');
      expect(button).toBeTruthy();
    });

    it('Should show a title in Navbar', () => {
        
      render(
        <ThemeProvider theme={theme}>
          <Navbar hasTitle={"Meu título"} />
        </ThemeProvider>
      );

        const title = screen.getByTestId('title');
        expect(title).toBeTruthy();
    });
});
