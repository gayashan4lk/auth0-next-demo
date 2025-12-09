import LoginButton from '@/components/auth/LoginButton'
import LogoutButton from '@/components/auth/LogoutButton'
import Profile from '@/components/auth/Profile'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { auth0 } from '@/lib/auth0'
import Image from 'next/image'

export default async function Home() {
	const session = await auth0.getSession()
	const user = session?.user
	console.log(user)

	return (
		<div>
			<h1 className="text-4xl font-bold">Auth0 Next.js Demo</h1>
			<div>
				{user ? (
					<div>
						<p>✅ Successfully logged in!</p>
						<Profile />
						<LogoutButton />
					</div>
				) : (
					<div>
						{' '}
						<p>Please log in</p>
						<LoginButton />
					</div>
				)}
			</div>
		</div>
	)
}
