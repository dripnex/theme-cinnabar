/**
 * Cinnabar — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Charcoal mineral paper, cinnabar vermillion accent.
 * Not maple (autumn leaf). Not ember (coal glow).
 * Not noir (cinema crimson). Not sakura (pale rose).
 * Not velvet (wine-dark dusty rose).
 */

const TOKENS = {
  '--bg-base': '#141014',
  '--bg-surface': '#1e161c',
  '--bg-elevated': '#2a1f26',
  '--bg-inset': '#0c090c',
  '--bg-hover': 'rgba(243, 233, 228, 0.06)',
  '--bg-active': 'rgba(243, 233, 228, 0.1)',
  '--text-primary': '#f3e9e4',
  '--text-secondary': 'rgba(243, 233, 228, 0.74)',
  '--text-muted': 'rgba(243, 233, 228, 0.52)',
  '--text-faint': 'rgba(243, 233, 228, 0.34)',
  '--border': 'rgba(243, 233, 228, 0.12)',
  '--border-subtle': 'rgba(243, 233, 228, 0.07)',
  '--border-strong': 'rgba(243, 233, 228, 0.18)',
  '--accent': '#d4452a',
  '--accent-hover': '#e85a3d',
  '--accent-muted': 'rgba(212, 69, 42, 0.2)',
  '--accent-subtle': 'rgba(212, 69, 42, 0.1)',
  '--glass-bg': 'rgba(20, 16, 20, 0.92)',
  '--glass-border': 'rgba(243, 233, 228, 0.1)',
  '--glass-bg-menu': 'rgba(42, 31, 38, 0.96)',
  '--glass-border-menu': 'rgba(243, 233, 228, 0.1)',
  '--status-active': '#d4452a',
  '--status-on-hold': '#d0a95e',
  '--status-completed': '#65a88b',
  '--status-dropped': '#cf6875',
};

module.exports = {
  id: 'theme-cinnabar',
  name: 'Cinnabar',
  version: '0.1.0',
  description: 'Charcoal mineral. Cinnabar vermillion mark.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-cinnabar',
      name: 'Cinnabar',
      description: 'Charcoal mineral. Cinnabar vermillion mark.',
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
