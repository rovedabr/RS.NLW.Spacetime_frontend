import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        className="h-10 w-10 rounded-full"
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          className="block text-red-400 hover:text-red-300"
          href="/api/auth/logout"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
