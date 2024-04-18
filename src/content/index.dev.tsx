/**
 * Initializes the application with Hot Module Replacement (HMR) support for CSS changes.
 * This module addresses issues with HMR when using inline CSS stylesheets during development.
 * When changes are made to Tailwind CSS or other CSS classes, the dev server typically needs
 * to be stopped and restarted to apply the new styles. This module intercepts CSS changes and
 * applies them dynamically without requiring a full dev server restart, thereby improving
 * development efficiency by providing smoother HMR for CSS changes.
 *
 * @module index.dev
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

import Content from './Content';

import './index.css';

const container = document.createElement('div');

// The viteDevId represents the path to the CSS file in development mode
const viteDevId = '/chrome-ext-starter/src/content/index.css';

// Get the style element corresponding to the CSS file
const styleElement = document.querySelector(
  `style[data-vite-dev-id*="${viteDevId}"]`
)!;

// Attach the style element to the shadow root
const shadowRoot = container.attachShadow({ mode: 'open' });
shadowRoot.appendChild(styleElement);

document.body.appendChild(container);

// Render the application inside the shadow root
const root = createRoot(shadowRoot);
root.render(<Content />);
