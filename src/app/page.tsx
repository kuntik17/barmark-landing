import { Button } from "@/components/ui/button";
import { LiveMenuBar } from "@/components/live-menu-bar";
import { NotePlayground } from "@/components/note-playground";
import { Heart, Laptop, Link2, StickyNote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5">
        <a href="#top" className="flex items-center gap-2 font-[family-name:var(--font-fraunces)] text-lg">
          <span className="grid size-8 place-items-center rounded-full bg-[#9a3144] text-sm text-[#fff8ee]">
            ❤️
          </span>
          BarMark
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[#6d5c4d] sm:flex">
          <a href="#how" className="hover:text-[#2c2218]">
            How it works
          </a>
          <a href="#notes" className="hover:text-[#2c2218]">
            Notes
          </a>
          <a href="#together" className="hover:text-[#2c2218]">
            For two
          </a>
        </nav>
        <Button asChild size="sm">
          <a href="#get">Get the Mac app</a>
        </Button>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-5 pb-20">
        <section className="grid gap-12 py-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-14">
          <div>
            <p className="text-sm font-medium tracking-[0.18em] text-[#9a3144] uppercase">
              A post-it by the clock
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl">
              Leave a love note where they actually look.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-7 text-[#6d5c4d]">
              BarMark lives in the Mac menu bar — next to the time. Pick a smiley or add a tiny
              reminder. Pair your UUID with theirs and both bars stay in sync. Quiet. Tiny. Always there.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#get">Open it on your Mac</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#how">See the pairing</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-[#6d5c4d]">
              Free: any smiley. Add a short note for $0.99.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-4 z-10 w-36 -rotate-6 rounded-sm bg-[#fff1a8] p-3 shadow-lg">
              <p className="font-[family-name:var(--font-caveat)] text-2xl leading-none">did you eat?</p>
              <p className="mt-2 text-[10px] tracking-wide text-[#6d5c4d] uppercase">from the other desk</p>
            </div>
            <div className="absolute -right-2 -bottom-8 z-10 w-32 rotate-3 rounded-sm bg-[#ffd4dc] p-3 shadow-lg">
              <p className="font-[family-name:var(--font-caveat)] text-2xl leading-none">❤️ home</p>
            </div>
            <LiveMenuBar />
          </div>
        </section>

        <section className="py-8">
          <NotePlayground />
        </section>

        <section id="notes" className="py-16">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-fraunces)] text-4xl font-medium tracking-tight">
              Not another chat. A scrap of paper on the machine.
            </h2>
            <p className="mt-3 text-[#6d5c4d]">
              Couples already text. Then the thread scrolls. BarMark is the note you stick above the keyboard:
              short enough to glance at, shared so you both see the same thing.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Love notes",
                body: "A heart or a tiny note. Enough to say I’m thinking of you without opening Messages.",
              },
              {
                icon: StickyNote,
                title: "Reminders",
                body: "Milk. Keys. Call mum. The kind of thing that used to live on the fridge — now it lives by the clock.",
              },
              {
                icon: Laptop,
                title: "Two Macs",
                body: "You change it on the kitchen laptop. It changes on the studio Mac. Same tiny mark, two desks.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl bg-[#fff8ee] p-5 ring-1 ring-[#e0d0b8]">
                <item.icon className="size-5 text-[#9a3144]" />
                <h3 className="mt-3 font-[family-name:var(--font-fraunces)] text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6d5c4d]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="rounded-[2rem] bg-[#2c2218] px-6 py-12 text-[#f3ead9] sm:px-10">
          <h2 className="font-[family-name:var(--font-fraunces)] text-4xl font-medium">How two people share a mark</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "Open BarMark",
                body: "It sits in the menu bar. No Dock icon. First launch mints a UUID — that’s this Mac. No account.",
              },
              {
                n: "02",
                title: "Swap UUIDs",
                body: "Send yours like a secret. They paste it. You paste theirs. That’s the whole handshake.",
              },
              {
                n: "03",
                title: "Write the note",
                body: "Pick a face or add a short note. Their bar updates. Yours does too. Vice versa, all day.",
              },
            ].map((step) => (
              <li key={step.n}>
                <p className="font-mono text-xs tracking-widest text-[#e8a0a8]">{step.n}</p>
                <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#f3ead9]/75">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex items-center gap-2 text-sm text-[#f3ead9]/70">
            <Link2 className="size-4" />
            Same Wi-Fi pairs over Bonjour. Across town, optional Supabase keeps the note traveling.
          </p>
        </section>

        <section id="together" className="grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div className="relative h-72 rounded-[2rem] bg-[#ead9c0] p-8">
            <div className="absolute top-10 left-8 w-40 -rotate-6 bg-[#fff8ee] p-4 shadow-xl">
              <p className="text-xs tracking-wide text-[#9a3144] uppercase">Mac in the kitchen</p>
              <p className="mt-2 font-[family-name:var(--font-caveat)] text-4xl">🌙 late</p>
            </div>
            <div className="absolute right-8 bottom-10 w-40 rotate-3 bg-[#fff1a8] p-4 shadow-xl">
              <p className="text-xs tracking-wide text-[#9a3144] uppercase">Mac in the studio</p>
              <p className="mt-2 font-[family-name:var(--font-caveat)] text-4xl">🌙 late</p>
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-4xl font-medium tracking-tight">
              For the couple who already shares a grocery list.
            </h2>
            <p className="mt-4 leading-7 text-[#6d5c4d]">
              This is not a social network. It is one shared scrap between two people who sit at two
              machines. A wink. A chore. A “landed.” Small enough that it never competes with real
              conversation — present enough that you notice when it changes.
            </p>
          </div>
        </section>

        <section id="get" className="rounded-[2rem] bg-[#9a3144] px-6 py-12 text-[#fff8ee] sm:px-10">
          <h2 className="font-[family-name:var(--font-fraunces)] text-4xl font-medium">
            It’s a real Mac app. Run it next to the clock.
          </h2>
          <p className="mt-3 max-w-xl text-[#fff8ee]/80">
            BarMark is a Swift menu extra. Open the Xcode project on macOS 14+, press Run, and look to
            the right of the menu bar. Every smiley is free. Unlock short notes
            for $0.99 when you’re ready to say more than a glance.
          </p>
          <ol className="mt-6 space-y-2 font-mono text-sm text-[#fff8ee]/90">
            <li>1. Open BarMark.xcodeproj on your Mac</li>
            <li>2. Run the BarMark scheme</li>
            <li>3. Click the smiley · copy your UUID · send it to them</li>
          </ol>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-5 py-8 text-sm text-[#6d5c4d]">
        BarMark — a lightweight menu bar extra for two people and a tiny note.
      </footer>
    </div>
  );
}
