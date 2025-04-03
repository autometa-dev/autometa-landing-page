'use client';

import React, { useState } from 'react';
import { PopupButton, PopupWidget, InlineWidget } from 'react-calendly';

interface CalendlyButtonProps {
  url: string;
  text: string;
  className?: string;
  rootElement?: HTMLElement | null;
}

interface CalendlyInlineProps {
  url: string;
  styles?: React.CSSProperties;
}

export const CalendlyButton: React.FC<CalendlyButtonProps> = ({ 
  url, 
  text, 
  className,
  rootElement
}) => {
  // In Next.js with client components, we need to ensure we're running in browser
  const [root, setRoot] = useState<HTMLElement | null>(null);
  
  React.useEffect(() => {
    // Set the root element when component mounts
    setRoot(rootElement || document.getElementById('calendly-root') || document.body);
  }, [rootElement]);

  if (!root) {
    return (
      <button className={className} disabled>
        {text}
      </button>
    );
  }

  return (
    <PopupButton 
      url={url}
      rootElement={root}
      text={text}
      className={className}
    />
  );
};

export const CalendlyInline: React.FC<CalendlyInlineProps> = ({ 
  url, 
  styles = { height: '630px' } 
}) => {
  return <InlineWidget url={url} styles={styles} />;
};

export const CalendlyFloatingButton: React.FC<{ url: string }> = ({ url }) => {
  // In Next.js with client components, we need to ensure we're running in browser
  const [root, setRoot] = useState<HTMLElement | null>(null);
  
  React.useEffect(() => {
    // Set the root element when component mounts
    setRoot(document.getElementById('calendly-root') || document.body);
  }, []);

  if (!root) {
    return null;
  }

  return (
    <PopupWidget
      url={url}
      rootElement={root}
      text="Schedule a Meeting"
      textColor="#ffffff"
      color="#4F46E5"
    />
  );
};
