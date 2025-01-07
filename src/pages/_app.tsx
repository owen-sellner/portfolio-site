import '@/styles/globals.css'
import { AnimatePresence } from 'motion/react';
import { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps, router} : AppProps) {
    return (
        <div>
            <div className='nav'>
                <Link href="/">Home</Link>
                <Link href="/test">Test</Link>
                <Link target="_blank" href="/Resume.pdf">Resume</Link>
            </div>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}