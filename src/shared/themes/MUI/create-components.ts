export function createComponents(config: { palette: any }) {
  const { palette } = config;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          textTransform: "none",
          padding: "0.5rem",
          backgroundColor: palette.primary.main,
          color: palette.primary.dark,
          ["&:hover"]: {
            backgroundColor: palette.neutral[400],
          },
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
    MuiRating: {
      styleOverrides: {
        iconEmpty: {
          color: palette.primary.light,
          opacity: 0.5,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          margin: "3rem 0 0 0",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: palette.primary.light,
        },
        previousNext: {
          color: palette.primary.lightest,
          border: 0,
        },
        firstLast: {
          color: palette.primary.lightest,
          border: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: palette.primary.lightest,
        },
      },
    },
  };
}
