// https://github.com/reduxjs/redux-toolkit/issues/390
export const thunkHandler = async <T>(
  asyncFn: T,
  rejectWithValue: any
): Promise<Awaited<Promise<T>>> => {
  try {
    return await asyncFn;
  } catch (error) {
    return rejectWithValue({
      name: (error as Error).name,
      message: (error as Error).message,
    });
  }
};
