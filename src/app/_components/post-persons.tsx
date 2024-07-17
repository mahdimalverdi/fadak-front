import React from "react";

type Props = {
    title: string; people: { name: string, imageUrl: string, title: string}[];
};

export function PostPersons({title, people}: Props) {
    return (
    <section className="py-12">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {people.map((person) =>
                <div className="bg-zinc-800  rounded hover:shadow-lg transition-shadow">
                    <img src={person.imageUrl} alt="Speaker" className="rounded md:h-40 h-32 w-full object-cover"/>
                        <h3 className="text-xl font-bold mt-4 mx-4">{person.name}</h3>
                        <p className=" mb-4 mx-4">{person.title}</p>
                </div>)}
            </div>
        </div>
    </section>
    )

}