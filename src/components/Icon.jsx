const paths = {
  arrow: 'M7 17 17 7M7 7h10v10',
  download: 'M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5',
  up: 'M12 20V4m-6 6 6-6 6 6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm6 6 12 12M6 18 18 6',
  moon: 'M20.5 13.1A8.5 8.5 0 0 1 10.9 3.5a8.5 8.5 0 1 0 9.6 9.6Z',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5',
  cloud: 'M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.7 8 5 5 0 0 1 0 10H7Z',
  shield: 'm12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6',
  server: 'M4 3h16v7H4V3Zm0 11h16v7H4v-7ZM7 6.5h.01M7 17.5h.01M11 6.5h6m-6 11h6',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
  layers: 'm12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5',
  monitor: 'M3 3h18v13H3V3Zm5 18h8m-4-5v5',
  award: 'M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM8 13l-2 9 6-3 6 3-2-9',
};

export default function Icon({ name = 'arrow', size = 20, ...props }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}><path d={paths[name] || paths.arrow} /></svg>;
}
