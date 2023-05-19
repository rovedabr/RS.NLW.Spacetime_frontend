import { NextConfig } from 'next/server'

export async function GET(request: NextConfig) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')
}
