/* -------------------------------------------------------------------------- */
/*                                    PATHS                                   */
/* -------------------------------------------------------------------------- */
const ROOTS = {
  AUTH: '/auth',
  HOME: '',
};

export const paths = {
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`
    },
  },
  // PATHS
  links: {
    root: `${ROOTS.HOME}/`,
    about: `${ROOTS.HOME}/about`,
    project: {
      list: `${ROOTS.HOME}/work`,
      details: (id: number) => `${ROOTS.HOME}/work/${id}`
    },
    contact: `${ROOTS.HOME}/contact`
  }
};