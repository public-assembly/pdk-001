import Button from '@/components/pdk/Button'
import MainPreview from '@/components/pdk/MainPreview'
import PreviewOption from '@/components/pdk/PreviewOption'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-[83px] w-min">
        <div className="flex flex-col gap-[45px] items-center">
          <MainPreview />
          <div className="flex flex-wrap justify-center gap-x-[3px] gap-y-[32px]">
            <Button className="h-[77px] w-[226px]" />
            <Button className="h-[77px] w-[204.5px]" />
            <Button className="h-[77px] w-[229px]" />
            <Button className="h-[77px] w-[99.5px]" />
            <Button className="h-[77px] w-[123.5px]" />
            <Button className="h-[77px] w-[210.5px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex gap-[12px]">
            <PreviewOption />
            <PreviewOption />
            <PreviewOption />
          </div>
          <div className="h-[34px]"></div>
          <div className="flex gap-[12px]">
            <PreviewOption />
            <PreviewOption />
            <PreviewOption />
          </div>
          <div className="h-[34px]"></div>
          <div className="flex gap-[12px]">
            <PreviewOption />
            <PreviewOption />
            <PreviewOption />
          </div>
          <div className="h-[34px]"></div>
        </div>
      </div>
    </main>
  )
}
