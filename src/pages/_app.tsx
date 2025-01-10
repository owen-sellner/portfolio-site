import '@/styles/globals.css'
import { AnimatePresence } from 'motion/react';
import { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps, router} : AppProps) {
    return (
        <div>
            <div className='nav'>
                <div style={{ flexGrow: 1 }}>
                    <Link style={{ fontSize: "24px", fontWeight: 900 }} href="/">OS</Link>
                </div>
                <div>
                    <Link href="/">HOME</Link>
                    <Link href="/projects">PROJECTS</Link>
                    <Link target="_blank" href="/Resume.pdf">RESUME</Link>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}