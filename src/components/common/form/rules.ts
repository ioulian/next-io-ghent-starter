export const required = {
  required: {
    value: true,
    message: "required",
  },
};

export const email = {
  pattern: {
    value: /^\S+@\S+$/,
    message: "email",
  },
};

export const password = {
  pattern: {
    value: /(?=^.{9,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/,
    message: "password",
  },
};

// FIXME:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const passwordRepeat = (otherField: string) => (watch: any) => ({
  validate: (val: string) => {
    if (watch(otherField) !== val) {
      return "passwordMatch";
    }
  },
});
