import logo from './logo.svg';
import './App.css';
import { BrowseCategoryMedicine } from './Components/Medicines/BrowseCategoryMedicine/BrowseCategoryMedicine';
import { IntroducingBelowCategory } from './Components/Medicines/IntroducingBelowCategory/IntroducingBelowCategory';
import { ComprehensiveInfo } from './Components/Medicines/ComprehensiveInfo/ComprehensiveInfo';
import { WhatUserSays } from './Components/Medicines/WhatUserSays/WhatUserSays';
import { DownloadPracto } from './Components/Medicines/DownloadPracto/DownloadPracto';

function App() {
  return (
    <div className="">
      <h1>Pranav</h1>
      <BrowseCategoryMedicine/>
      <IntroducingBelowCategory/>
      <ComprehensiveInfo/>
      <WhatUserSays/>
      <DownloadPracto/>
    </div>
  );
}

export default App;
