import { AnimatedName } from '@/components/AnimatedName'
import { AnimatedSubtitles } from '@/components/AnimatedSubtitles'

export default function Home() {
    return (
        <main>
            <section style={{ height: "80vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <AnimatedName />
                    <AnimatedSubtitles />
                </div>
            </section>
        </main>
    )
}