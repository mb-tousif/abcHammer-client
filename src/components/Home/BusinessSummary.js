import React from 'react';
import { GiMoneyStack } from "react-icons/gi";
import { RiUserSearchLine } from "react-icons/ri";
import { FaUserCog, FaChartLine } from "react-icons/fa";

const BusinessSummary = () => {
    return (
        <div>
            <h1 className="md:text-3xl mb-4 text-xl font-bold text-primary">ABC Hammer Manufacturing Ltd <br /> Business Summary</h1>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8">
                <div class="stats m-3 shadow-2xl bg-neutral text-primary">
                    <div class="stat w-5/6 mx-auto my-auto">
                        <div class="stat-figure text-secondary">
                        <RiUserSearchLine className='w-12 h-10'/></div>
                        <div class="stat-title font-bold">Total Projects</div>
                        <div class="stat-value">89,400K</div>
                        <div class="stat-desc">21% more than last year</div>
                    </div>
                </div>
                <div class="stats m-3 shadow-2xl bg-neutral">
                    <div class="stat text-secondary w-5/6 mx-auto my-auto">
                        <div class="stat-figure text-secondary">
                        <GiMoneyStack className='w-12 h-10'/>
                        </div>
                        <div class="stat-title font-bold">Revenue Per Year</div>
                        <div class="stat-value">&#36;100 M</div>
                    </div>
                </div>
                <div class="stats m-3 shadow-2xl bg-neutral text-secondary">
                    <div class="stat w-5/6 mx-auto my-auto">
                        <div class="stat-figure text-secondary">
                        <FaUserCog className='w-12 h-10'/>
                        </div>
                        <div class="stat-title font-bold">New Buyer</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                </div>
                <div class="stats m-3 shadow-2xl bg-neutral text-primary">
                    <div class="stat w-5/6 mx-auto my-auto">
                        <div class="stat-figure text-secondary">
                        <FaChartLine className='w-12 h-10'/>
                        </div>
                        <div class="stat-title font-bold">Business Growth</div>
                        <div class="stat-value">Yearly 21%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;