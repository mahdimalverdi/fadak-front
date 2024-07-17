import React from "react";
import Container from "@/app/_components/container";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";

type Props = {
    videos: { videoUrl: string }[];
};

export function PostVideos({videos}: Props) {
    return (
        <section className="py-12">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-8">ویدئوها</h2>
                <ul role="list"
                    className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 auto-cols-max  gap-x-2 gap-y-2 justify-center w-full">
                    {videos.map((video) => (<li>
                        <div
                            className="transition-all flex flex-col bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-200 text-zinc-300 hover:scale-105">
                            <iframe src={video.videoUrl} className="w-full" allowFullScreen={true}></iframe>
                        </div>
                    </li>))}
                </ul>
            </Container>
        </section>
)
}