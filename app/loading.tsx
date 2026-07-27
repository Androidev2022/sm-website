export default function Loading() {
    return (
        <main className="min-h-screen bg-[#F7F6FD]">
            <style>{`
                @keyframes skeletonPulse {
                    0%, 100% { opacity: 0.55; }
                    50% { opacity: 1; }
                }
                .skel {
                    background: linear-gradient(90deg, #EAE9F3 25%, #F3F2FA 37%, #EAE9F3 63%);
                    background-size: 400% 100%;
                    animation: skeletonShimmer 1.6s ease-in-out infinite;
                    border-radius: 10px;
                }
                @keyframes skeletonShimmer {
                    0% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .skel { animation: skeletonPulse 1.6s ease-in-out infinite; background: #EAE9F3; }
                }
            `}</style>

            {/* NAV skeleton */}
            <header className="h-25 w-full border-b border-blue-100/50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="skel h-8 w-28" />
                    <div className="hidden md:flex gap-8">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="skel h-4 w-14" />
                        ))}
                    </div>
                    <div className="skel h-10 w-40 rounded-lg" />
                </div>
            </header>

            {/* HERO skeleton */}
            <section className="mx-auto max-w-[1800px] px-1 pt-10">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <div className="skel h-3 w-40 mb-4" />
                        <div className="skel h-10 w-4/5 mb-2" />
                        <div className="skel h-10 w-3/5 mb-2" />
                        <div className="skel h-10 w-2/5 mb-5" />
                        <div className="skel h-4 w-full max-w-md mb-2" />
                        <div className="skel h-4 w-4/5 max-w-md mb-8" />
                        <div className="flex gap-10 mb-8">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i}>
                                    <div className="skel h-3 w-14 mb-2" />
                                    <div className="skel h-4 w-20" />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <div className="skel h-11 w-40 rounded-full" />
                            <div className="skel h-11 w-44 rounded-full" />
                        </div>
                    </div>
                    <div className="skel w-full" style={{ aspectRatio: "2488 / 1500" }} />
                </div>
            </section>

            {/* STATS skeleton */}
            <section className="mx-auto max-w-[1800px] px-1 pt-14">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5">
                            <div className="skel h-3 w-20 mb-4" />
                            <div className="flex items-center justify-between">
                                <div className="skel h-6 w-16" />
                                <div className="skel h-8 w-8 rounded-full" />
                            </div>
                            <div className="skel h-3 w-24 mt-3" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Generic content block skeleton (repeats the card rhythm of the page below) */}
            <section className="mx-auto max-w-[1800px] px-1 pt-14">
                <div className="skel h-3 w-32 mb-3" />
                <div className="skel h-7 w-72 mb-3" />
                <div className="skel h-4 w-96 max-w-full mb-8" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6">
                            <div className="skel h-5 w-40 mb-3" />
                            <div className="skel h-3 w-full mb-2" />
                            <div className="skel h-3 w-4/5" />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
