// pages/api/submit.ts
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const { error } = await supabase.from('emails').insert([{ email }])

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Success' }, { status: 200 })
}