'use client'

import { AppDispatch, RootState } from "@/store/store/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal, login } from "@/store/store/authSlice"

export default function AuthModal() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch<AppDispatch>()
  const { openModal, status, error } = useSelector((state: RootState) => state.auth)

  if (!openModal) return null

  const isLogin = openModal === 'login'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <div
      onClick={() => dispatch(closeModal())}
      className="fixed inset-0 z-10 bg-black/50  flex items-center justify-center">
      <form className="bg-[#EBF5F4] py-10 px-15 rounded-[20px]"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl font-bold text-center">{isLogin ? 'Login' : 'Register'}</h1>
        <div className="block mt-5">
          <label className="font-semibold" htmlFor="">Email</label>
          <input type="text"
            className="p-2 w-full outline-none bg-white rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="block mt-5">
          <label className="font-semibold" htmlFor="">Password</label>
          <input type="text"
            className="p-2 w-full outline-none bg-white rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        {status === "loading" && <p className="text-sm text-gray-500">Loading...</p>}
        {status === "failed" && error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 bg-[#309689] text-white rounded-lg mt-10 cursor-pointer hover:bg-[#4fc1b2] transition-colors duration-300 ease-in-out"
        >
          {status === "loading" ? "Loading..." : isLogin ? "Login" : "Create Account"}
        </button>
      </form>
    </div>
  )
}