module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      md: '768px',
      lg: '1440px',
    },
    fontSize: {
      'planets': ['1.75rem', '2.125rem'],
      'tab-base' : ['0.9375rem', '1.5625rem'],
      'menu-base': ['0.5625rem', '1.5625rem'],
      'heading-base': ['2.5rem', '3rem'],
      'body-base': ['0.6875rem', '1.375rem'],
      'source-base': ['0.75rem', '1.5625rem'],
      'stat-name-base': ['0.5rem', '1rem'],
      'stat-val-base': ['1.25rem', '1.5rem'],
      'tab-md': ['0.6875rem', '1.5625rem'],
      'heading-md': ['3rem',],
      'stat-val-md': ['1.5rem'],
      'menu-lg': ['0.75rem', '1.5625rem'],
      'heading-lg': ['5rem'],
      'body-lg': ['0.875rem', '1.5625rem'],
      'source-lg': ['0.875rem', '1.5625rem'],
      'stat-name-lg': ['0.6875rem', '1.5625rem'],
      'stat-val-lg': ['2.5rem']
    },
    fontFamily: {
      'antonio': ['Antonio', 'sans-serif'],
      'spartan': ['Spartan', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'stars': "url('./assets/background-stars.svg')",
        'mercury': "url('./assets/planet-mercury.svg')"
      },
      colors: {
        'mercury': '#419EBB',
        'venus': '#EDA249',
        'earth': '#6D2ED5',
        'mars': '#D14C32',
        'jupiter': '#D83A34',
        'saturn': '#CD5120',
        'uranus': '#1EC1A2',
        'neptune': '#2D68F0',
        'cgray': '#D8D8D8',
        'tab-mercury': '#DEF4FC',
        'tab-venus': '#F7CC7F',
        'tab-earth': '#545BFE',
        'tab-mars': '#FF6A45',
        'tab-jupiter': '#ECAD7A',
        'tab-saturn': '#FCCB6B',
        'tab-uranus': '#65F0D5',
        'tab-neptune': '#497EFA',
        'cblack': '#070724',
        'cwhite': '#FFFFFF'
      },
      letterSpacing: {
        'sm': '-0.09375rem',
        'md': '0.0625rem',
        'lg': '0.1625rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
