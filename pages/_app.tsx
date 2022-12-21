import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const mousemove = (e: MouseEvent) => {
        if (cursorInnerRef.current)
          cursorInnerRef.current.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
        if (cursorOuterRef.current)
          cursorOuterRef.current.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
      }

      const mouseenter = (e: any) => {
        if (e.target.tagName === 'A' || e.target.classList.contains('button')) {
          if (cursorInnerRef.current)
            cursorInnerRef.current.classList.add('hover')
          if (cursorOuterRef.current)
            cursorOuterRef.current.classList.add('hover')
        }
      }

      const mouseleave = (e: any) => {
        if (e.target.tagName === 'A' || e.target.classList.contains('button')) {
          if (cursorInnerRef.current)
            cursorInnerRef.current.classList.remove('hover')
          if (cursorOuterRef.current)
            cursorOuterRef.current.classList.remove('hover')
        }
      }

      document.body.addEventListener('mousemove', mousemove);
      document.body.addEventListener('mouseenter', mouseenter, { capture: true })
      document.body.addEventListener('mouseleave', mouseleave, { capture: true })
      return () => {
        document.body.removeEventListener('mousemove', mousemove);
        document.body.removeEventListener('mouseenter', mouseenter);
        document.body.removeEventListener('mouseleave', mouseleave);
      }
    }
  }, []);

  return <>
    <Head>
      <title>Dery</title>
      <meta name="description" content="A developer experienced with Web Development and Minecraft Plugin Development" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <div className='cursor-inner' ref={cursorInnerRef}></div>
    <div className='cursor-outer' ref={cursorOuterRef}></div>
    <Navbar />

    <Component {...pageProps} />
  </>
}