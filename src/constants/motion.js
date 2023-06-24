export const v = {
  hidden: {},
  visible: {},
};

export const slide = {
  hidden: {
    opacity: 0,
    height: ["0", "0", "0", "0"],
    //y: -100,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    opacity: 1,
    height: ["20%", "40%", "80%", "100%"],
    //y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const rotate = {
  hidden: {
    rotate: "0",
  },
  visible: {
    rotate: "45deg",
  },
};
