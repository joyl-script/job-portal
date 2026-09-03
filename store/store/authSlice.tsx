import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalType = 'login' | 'register' | null


interface AuthState {
  user: null | { email: string }
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  openModal: ModalType
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
  openModal: null
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string, password: string }) => {
    await new Promise((res) => setTimeout(res, 1000))
    if (email === 'test@test.com' && password === 'password') {
      return { email }
    }
    throw new Error('Неверные email или пароль')
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openLogin(state) {
      state.openModal = 'login'
      state.error = null
    },
    openRegister(state) {
      state.openModal = 'register'
      state.error = null
    },
    closeModal(state) {
      state.openModal = null
      state.error = null
    },
    logout(state) {
      state.user = null
      state.status = 'idle'
      state.error = null
      state.openModal = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ email: string }>) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.openModal = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Ошибка входа";
      });
  },
})

export const { openLogin, openRegister, closeModal, logout } = authSlice.actions
export default authSlice.reducer