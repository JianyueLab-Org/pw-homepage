export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "neutral",
    },
    card: {
      variants: {
        variant: {
          "authn-card": {
            root: "bg-default md:shadow-lg",
          },
          "no-bg": {
            root: "ring ring-default",
          },
        },
      },
    },
    pageCard: {
      variants: {
        variant: {
          "no-bg": {
            root: "ring ring-default",
          },
        },
      },
    },
  },
});
