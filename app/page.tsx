import LoginButton from "@/components/auth/LoginButton"
import LogoutButton from "@/components/auth/LogoutButton"
import Profile from "@/components/auth/Profile"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { auth0 } from "@/lib/auth0"
import Image from "next/image";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <div>
      <h1>Auth0 Next.js Demo</h1>
      <Button>Click Me</Button>
      <Progress value={50} className="w-40 mt-4 mx-5" />

      <div>
        {user ? ( <div>
          <p>✅ Successfully logged in!</p>
          <Profile />
          <LogoutButton />
          </div>  ) 
        : 
        (<div> <p>Please log in</p>
        <LoginButton />
         </div> )}
      </div>
    </div>
  );
}
