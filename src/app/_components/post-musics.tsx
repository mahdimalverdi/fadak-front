'use client';

import '@vidstack/react/player/styles/base.css';
import AudioPlayer from 'react-h5-audio-player';

import React from 'react';
import Container from "@/app/_components/container";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";

type Props = {
    playlist: { source: string; title: string }[];
};

export function PostMusics({playlist}: Props) {
    const [currentTrack, setTrackIndex] = React.useState(0)
    const handleClickNext = () => {
        setTrackIndex((currentTrack) => currentTrack < playlist.length - 1 ? currentTrack + 1 : 0);
    };
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) => currentTrack > 0 ? currentTrack - 1 : playlist.length - 1);
    };
    const handleEnd = () => {
        setTrackIndex((currentTrack) => currentTrack < playlist.length - 1 ? currentTrack + 1 : 0);
    }
    return (
    <section className="py-12 bg-zinc-800">
        <Container>
            <h2 className="text-3xl font-bold text-center mb-8">صوت‌ها</h2>

            <ul role="list" className="divide-y divide-zinc-400">
                {playlist.map((music, index) => (
                    <li key={music.source} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-zinc-400">{music.title}</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-rows items-end gap-2">
                            <button
                                className="select-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center disabled:bg-gray-800 disabled:text-gray-300"
                                onClick={() => setTrackIndex(index)} disabled={currentTrack === index}>
                                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path d="M4 2 L16 10 L4 18 Z"/>
                                </svg>
                                <span>پخش</span>
                            </button>
                            <a href={music.source} target="_blank" download
                               className="select-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
                                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                                </svg>
                                <span>دانلود</span>
                            </a>
                        </div>
                    </li>))}
            </ul>

            <div style={{direction: "ltr"}}>
                <AudioPlayer
                    src={playlist[currentTrack].source}
                    showSkipControls
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                    onEnded={handleEnd}
                    onError={() => {
                        console.log('play error')
                    }}
                    // Try other props!
                />
            </div>
        </Container>
    </section>
    )
        ;
}