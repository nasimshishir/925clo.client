import TabComponent from '@components/TabComponent';
import React from 'react'

const Wishlist = () => {

  const tabs = ['5 Outfits', 'single Outfits']
  return (
    <div>
      <TabComponent tabs={tabs} />
    </div>
  )
}

export default Wishlist;