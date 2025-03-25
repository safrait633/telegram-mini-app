import React from 'react';

export const Icons = {
  Grammar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2a2.7 2.7 0 0 1-1.92.8c-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z"/>
    </svg>
  ),
  Reading: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M21 4H3a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M3 19V6h8v13H3m18 0h-8V6h8v13m-7-9.5h6V11h-6V9.5m0 2.5h6v1.5h-6V12m0 2.5h6V16h-6v-1.5Z"/>
    </svg>
  ),
  Listening: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z"/>
    </svg>
  ),
  Writing: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
    </svg>
  ),
  Speaking: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
    </svg>
  ),
  DELE: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
    </svg>
  ),
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    </svg>
  )
};

export const LevelIcons = {
  A1: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120Z"/>
    </svg>
  ),
  A2: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120ZM280-280h400v-400H280v400Z"/>
    </svg>
  ),
  B1: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120ZM280-280l200-200 200 200v-400H280v400Z"/>
    </svg>
  ),
  B2: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120ZM280-280l200-200 200 200H280Z"/>
    </svg>
  ),
  C1: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120ZM280-280h400L480-480 280-280Z"/>
    </svg>
  ),
  C2: () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120ZM280-280h400L480-680 280-280Z"/>
    </svg>
  )
};