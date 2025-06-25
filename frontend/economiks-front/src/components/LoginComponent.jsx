function LoginComponent() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="w-96 rounded-lg shadow-xl bg-gray-500 text-white py-6 px-4 flex items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
        <div className="form-group flex gap-3">
          <label htmlFor="username">Username:</label>
          <input className="border-[2px] bg-gray-100 text-black px-2 py-[2px] border-gray-400 rounded" type="text" id="username" name="username" required />
        </div>
        <div className="form-group flex gap-3">
          <label htmlFor="password">Password:</label>
          <input className="border-[2px] bg-gray-100 text-black px-2 py-[2px] border-gray-400 rounded" type="password" id="password" name="password" required />
        </div>
        <button className="bg-gray-400 rounded font-semibold px-4 py-2" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginComponent