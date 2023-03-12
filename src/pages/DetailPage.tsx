import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonInfo from '../components/PokemonInfo';
import Tabs from '../components/Tabs';

type Params = {
  id: string;
}

type Tab = 'about' | 'stats' | 'evolution';

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>('about');

  const handleClick = (tab: Tab) => {
    setSelectedTab(tab)
  }

  return (
    <div>
      <PokemonInfo id='1' />
      <Tabs tab={selectedTab} onClick={handleClick} color={{ name: "red", url: "" }} />
    </div>
  );
}

export default DetailPage