import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" className='fixed -z-10 top-0 left-0'><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="105" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="150" ry="150" cx="10.181294785744285" cy="45.30450559286547" fill="#762526"></ellipse></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" className='fixed -z-10 bottom-0 right-0'><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="105" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="150" ry="150" cx="770.3906901893815" cy="753.157886764766" fill="#8d2c2e"></ellipse></g></svg>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
