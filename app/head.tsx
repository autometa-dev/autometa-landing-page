'use client';

import React from 'react';

export default function Head() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        link[rel="icon"] {
          border-radius: 50% !important;
          background-color: white !important;
          padding: 0 !important;
          transform: scale(1.8) !important;
          transform-origin: center !important;
          box-shadow: 0 0 0 2px white !important;
          overflow: hidden !important;
        }
      `}} />
      <link
        rel="icon"
        href="/favicon.png"
        sizes="32x32"
        type="image/png"
      />
    </>
  );
}
