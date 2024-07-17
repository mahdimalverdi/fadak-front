import React from "react";
import {Post} from "@/interfaces/post";

type Props = {
    posts: Post[];
};

export function Meetings({posts}: Props) {

    return (<section id="meetings" className="py-20 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl text-center">آخرین مراسم‌ها</h1>
        <ul role="list" className="divide-y divide-zinc-700 max-w-5xl w-full">
            {posts.map((post, index) => (<li key={post.title} className=" gap-x-6 py-5">
                <a className="flex justify-between" href={`/posts/${post.slug}`}>

                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className=" font-semibold leading-6 text-zinc-400 text-xl">{post.title}</p>
                        </div>
                    </div>
                    <div className="shrink-0 flex flex-rows items-end gap-2 text-sm">
                        {post.date}
                    </div>
                </a>
            </li>))}
        </ul>
    </section>)
}