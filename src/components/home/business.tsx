import React from "react";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import { companyGroups } from "@/lib/company";
// import { H2, P } from "../animations/animated-tags";

export const Business: React.FC = () => {
    return (
        <div id="business" className="relative snap-start scroll-m-10 py-16 bg-gradient-to-b from-background to-background-dark">
            <div className="container mx-auto">
                <div className="my-6 text-center">
                    <h2 className="text-4xl text-slate-800 font-black text-center">Our Esteemed Businesses</h2>
                    <p className="animate-pulse">We operate multiple market-leading businesses in recruitment, real estate, matrimony and education sectors</p>
                </div>
                <VelocityScroll companies={companyGroups[0]} defaultVelocity={1} />
                <div className="my-6 text-center">
                    <h2 className=" text-4xl text-slate-800 font-black text-center">Our Investee Companies</h2>
                </div>
                <VelocityScroll companies={companyGroups[1]} defaultVelocity={-1} />
            </div>
        </div>
    );
};