import React from "react";
import Container from "@/app/_components/container";


export function Videos() {
    const videos = [
        {videoUrl: 'https://www.aparat.com/video/video/embed/videohash/H9iJc/vt/frame?titleShow=true'},
        {videoUrl: 'https://www.aparat.com/video/video/embed/videohash/st5kn/vt/frame?titleShow=true'},
        {videoUrl: 'https://www.aparat.com/video/video/embed/videohash/xb6sL/vt/frame?titleShow=true&startTime=0'},
        {videoUrl: 'https://www.aparat.com/video/video/embed/videohash/RTBvM/vt/frame'},
    ]
    return (
    <section id="videos" className="py-12 bg-zinc-800">
        <Container>
            <h2 className="text-3xl font-bold text-center mb-8">نماهنگ‌ها</h2>
            <div
                className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 auto-cols-max gap-x-2 gap-y-2 justify-center w-full">

                {videos.map((video) => (<div className="relative w-full pb-[56.25%] h-0">
                    <iframe
                        src={video.videoUrl}
                        allowFullScreen={true}
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>))}

            </div>
        </Container>
    </section>
)
}