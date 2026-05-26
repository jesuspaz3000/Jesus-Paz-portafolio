'use client';

import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/providers/theme';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            
            if (!anchor) return;
            
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                if (href === '#' || href === '#hero' || href === '#home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    
                    // Reset hash in URL
                    window.history.pushState(null, '', window.location.pathname);
                } else {
                    const targetId = href.substring(1);
                    const element = document.getElementById(targetId);
                    if (element) {
                        const headerOffset = 90; // Adjust this value to perfectly offset your fixed header
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Update URL hash without causing a page jump
                        window.history.pushState(null, '', href);
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}