import React, { useContext, useEffect } from "react";

import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import { Context } from "../context";

const Feed = () => {
    const { loading, searchResults,error } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)] bg-black">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
               { !error ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {!loading &&
                        searchResults.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>: 
                <div className="w-full pt-8">
                    <p className="text-xl text-white text-center">Something went wrong. Please try again later.</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Hgeayt0iCb-_xETh4kcXEqcvoTnEONCUvm0BDrgrCQ&s" className="mt-10 h-40 w-80 mx-auto object-cover"/>
                </div>
}
            </div>
        </div>
    );
};

export default Feed;