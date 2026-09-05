export default function PageHeader({ eyebrow, title, italic, lede }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-8 flex justify-center select-none"
      >
        <span className="font-dev text-[40vw] leading-none text-ink-900/[0.035] tracking-tight md:text-[22vw]">
          सेतु
        </span>
      </div>
      <div className="relative container-mid text-center">
        <span className="eyebrow mx-auto">{eyebrow}</span>
        <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tightest text-ink-900 md:text-[80px]">
          {title}
          {italic && (
            <>
              <br />
              <span className="italic text-ink-700">{italic}</span>
            </>
          )}
        </h1>
        {lede && (
          <p className="mx-auto mt-8 max-w-[600px] text-[17px] leading-relaxed text-ink-600">
            {lede}
          </p>
        )}
      </div>
    </section>
  )
}
