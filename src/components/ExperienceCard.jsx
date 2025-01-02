import React from "react";

const ExperienceCard = ({item}) => {
    return (
        <div className="ExperienceCard rounded-lg border border-[#6751b9] p-6 mx-4 flex flex-col h-full">
            <div className="Card-title text-lg font-bold">
                {item.title} at {item.company}
            </div>
            <div className="Card-date w-max text-xs bg-[#6751b9]/50 inline-block rounded p-2 my-4">
                {item.date}
            </div>
            <div className="Card-details text-sm">
                {item.responsibilities.map((line, idx) => (
                    <li key={idx} className="ml-4 mb-2">{line}</li>
                ))}
            </div>
        </div>
    );
}

export default ExperienceCard;