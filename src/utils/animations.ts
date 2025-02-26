export const animations = {
    slideRight: {
      enter: {
        opacity: '0',
        transform: 'translateX(100%)',
      },
      enterActive: {
        opacity: '1',
        transform: 'translateX(0)',
        transition: 'opacity 300ms, transform 300ms',
      },
      exit: {
        opacity: '1',
        transform: 'translateX(0)',
      },
      exitActive: {
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'opacity 300ms, transform 300ms',
      },
    },
    slideLeft: {
      enter: {
        opacity: '0',
        transform: 'translateX(-100%)',
      },
      enterActive: {
        opacity: '1',
        transform: 'translateX(0)',
        transition: 'opacity 300ms, transform 300ms',
      },
      exit: {
        opacity: '1',
        transform: 'translateX(0)',
      },
      exitActive: {
        opacity: '0',
        transform: 'translateX(-100%)',
        transition: 'opacity 300ms, transform 300ms',
      },
    },
    slideUp: {
      enter: {
        opacity: '0',
        transform: 'translateY(100%)',
      },
      enterActive: {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity 300ms, transform 300ms',
      },
      exit: {
        opacity: '1',
        transform: 'translateY(0)',
      },
      exitActive: {
        opacity: '0',
        transform: 'translateY(100%)',
        transition: 'opacity 300ms, transform 300ms',
      },
    },
    slideDown: {
      enter: {
        opacity: '0',
        transform: 'translateY(-100%)',
      },
      enterActive: {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity 300ms, transform 300ms',
      },
      exit: {
        opacity: '1',
        transform: 'translateY(0)',
      },
      exitActive: {
        opacity: '0',
        transform: 'translateY(-100%)',
        transition: 'opacity 300ms, transform 300ms',
      },
    },
    fade: {
      enter: {
        opacity: '0',
      },
      enterActive: {
        opacity: '1',
        transition: 'opacity 300ms',
      },
      exit: {
        opacity: '1',
      },
      exitActive: {
        opacity: '0',
        transition: 'opacity 300ms',
      },
    },
  };