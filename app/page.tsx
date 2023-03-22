import MintButton from '@/components/pdk/MintButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-[64px] items-center p-24">
      <h1>PDK-001</h1>
      <MintButton />
      <MintButton disabled />
    </main>
  )
}
