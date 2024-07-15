"use client"
import React, { useState } from 'react';

const Portfolio = () => {
    const tab = ["All", "Web", "Mobile", "Full Stack"];
    const view = [
        <h1 key="all">all</h1>,
        <h1 key="web">web</h1>,
        <h1 key="mobile">mobile</h1>,
        <h1 key="full stack">full stack</h1>
    ];

    const [activeTab, setActiveTab] = useState("All");
    const [activeContent, setActiveContent] = useState(view[0]);

    const handleClick = (item, viewIndex) => {
        setActiveTab(item);
        setActiveContent(view[viewIndex]);
    };

    return (
        <div className="text-white flex flex-col gap-10 mt-20">
            <h1 className="text-5xl font-rubik font-bold text-purple-700 text-center">My Portfolio</h1>
            <div>
                <div className="flex gap-10">
                    {tab.map((item, index) => (
                        <button
                            key={item}
                            className={`rounded-3xl text-bold py-3 px-4 border border-purple-700 w-48 ${activeTab === item ? "bg-purple-700" : ""}`}
                            onClick={() => handleClick(item, index)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <section>
                    {activeContent}
                </section>
            </div>
        </div>
    );
};

export default Portfolio;