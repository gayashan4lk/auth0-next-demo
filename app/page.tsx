import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { auth0 } from '@/lib/auth0'
import Image from 'next/image'

export default async function Home() {
	const session = await auth0.getSession()
	const user = session?.user
	console.log(user)

	return (
		<main className="mx-10">
			<div id="TopNav" className="py-2 flex flex-row justify-between border-b border-slate-400">
				<h1 className="text-xl font-semibold">Auth0 Next.js Demo</h1>
				{user ? (
					<div className="flex flex-row gap-2 items-center">
						<p className="text-md font-semibold">{user.nickname}</p>
						<div className="w-8 h-8 rounded-full overflow-hidden">
							<img
								src={
									user.picture ||
									`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2363b3ed'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`
								}
								alt={user.name || 'User profile'}
							/>
						</div>
					</div>
				) : (
					<Button children={<a href="/auth/login">Log In</a>} />
				)}
			</div>
			<div className="mt-4">
				<Button children={<a href="/auth/logout">Log Out</a>} />
			</div>
		</main>
	)
}
