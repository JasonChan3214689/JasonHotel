const size = {
  small: "320px",
  med: "768px",
  large: "1024px",
};

const device = {
  small: `(min-width: ${size.small})`,
  med: `(min-width: ${size.med})`,
  large: `(min-width: ${size.large})`,
};

const MAX_PEOPLE = 6;
export { size, device, MAX_PEOPLE };
