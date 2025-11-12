import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  return (
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[516px] h-[344px] mx-auto border p-3 text-sm flex flex-col gap-3">

  <label className="label text-sm">Email</label>
  <input type="email" className="input input-sm w-full" placeholder="Email" />

  <label className="label text-sm">Email</label>
  <input type="email" className="input input-sm w-full" placeholder="Email" />
  
  <label className="label text-sm">Password</label>
  <input type="password" className="input input-sm w-full" placeholder="Password" />

  <button className="btn btn-neutral btn-sm mt-2 self-end">Login</button>
</fieldset>
  );
}
