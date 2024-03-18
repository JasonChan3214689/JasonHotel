const size = {
  small: "320px",
  medium: "768px",
  large: "1200px",
};

const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
};

const MAX_PEOPLE = 6;
export { size, device, MAX_PEOPLE };
