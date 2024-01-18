import {
  AsyncThunkConfig,
  GetThunkAPI,
} from "@reduxjs/toolkit/dist/createAsyncThunk";

// https://github.com/reduxjs/redux-toolkit/issues/390
export const thunkHandler = async <T>(
  asyncFn: T,
  rejectWithValue: GetThunkAPI<AsyncThunkConfig>["rejectWithValue"],
): Promise<
  | Awaited<Promise<T>>
  | ReturnType<GetThunkAPI<AsyncThunkConfig>["rejectWithValue"]>
> => {
  try {
    return await asyncFn;
  } catch (error) {
    return rejectWithValue({
      name: (error as Error).name,
      message: (error as Error).message,
    });
  }
};
