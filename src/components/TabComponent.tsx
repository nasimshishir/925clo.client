'use client'
import React, { useState } from 'react';
import { Buttonv2 } from '@components';

interface TabComponentProps {
  tabs: string[];
}

const TabComponent: React.FC<TabComponentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-x-5 bg-primary_orange p-2 rounded-2xl">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`grid items-center cursor-pointer`}
            onClick={() => handleTabClick(index)}
          >
            {(activeTab === index) ?
              <Buttonv2 css='w-full py-3'>{tab}</Buttonv2>
              :
              <p className='text-xs uppercase text-white text-center'>{tab}</p>}
          </div>
        ))}
      </div>
      <div className="tab-content mt-10">
        {tabs.map((tab, index) => (
          <div key={index} className='w-full' style={{ display: activeTab === index ? 'block' : 'none' }}>
            Content for {tab}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt ipsam necessitatibus officia nihil, commodi saepe, recusandae ratione minus, autem sequi consectetur iusto nemo earum. Blanditiis dicta hic consequatur doloribus temporibus nemo id accusamus aliquam officia sint sequi sunt autem, veritatis ipsa quisquam illum asperiores voluptatum corporis. Veritatis repellat pariatur molestias inventore, amet voluptatum! Dolorum, labore debitis? Totam cum, accusantium libero exercitationem, iste error sit vel dicta, minus laudantium aspernatur neque assumenda et nostrum veniam doloremque voluptatibus ducimus. Officia aliquid nostrum dignissimos corporis quidem atque iste, ullam voluptatem ex voluptas numquam exercitationem. Quas eaque aliquam porro dolores harum impedit libero explicabo consequatur dolor. Laboriosam id quidem blanditiis porro commodi adipisci, dolorem explicabo dolore voluptatem! Quidem saepe tempore officiis voluptate, illum provident placeat ex at! Officia amet, pariatur repellat voluptatum illo a quaerat ut rerum. Repellendus corporis ipsam quo reiciendis, consectetur, nesciunt architecto ducimus recusandae illum, laboriosam quas. Dignissimos impedit voluptatibus incidunt ipsam sunt quisquam harum odit reiciendis magnam id, provident commodi. Inventore, error accusamus reiciendis facere recusandae odit! Sit repellendus aspernatur minus consequatur adipisci aliquam nulla, quis esse tempora nesciunt possimus eveniet nemo fuga sint fugiat animi facilis dolores. Minus recusandae nulla hic voluptatibus, dolor natus quia quibusdam porro tenetur!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
