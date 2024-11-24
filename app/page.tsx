'use client'

import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { ready, authenticated, login, user } = usePrivy();

  console.log({ user });
  const enableLogin = ready && !authenticated;
  return (
    <div>
      <button onClick={login} disabled={!enableLogin}>Login</button>
    </div>
  );
}
