import logo from './logo.svg';
import './App.css';
import { BrowseCategoryMedicine } from './Components/Medicines/BrowseCategoryMedicine/BrowseCategoryMedicine';
import { IntroducingBelowCategory } from './Components/Medicines/IntroducingBelowCategory/IntroducingBelowCategory';
import { ComprehensiveInfo } from './Components/Medicines/ComprehensiveInfo/ComprehensiveInfo';
import { WhatUserSays } from './Components/Medicines/WhatUserSays/WhatUserSays';
import { DownloadPracto } from './Components/Medicines/DownloadPracto/DownloadPracto';
import SliderImage from './Components/Medicines/SliderImage/SliderImage';
import MedicinesProduct from './Components/MedicinesProduct/MedicinesProduct';
import MedicineSearch from './Components/MedicineSearch/MedicineSearch';

function App() {
  return (
    <div className="">
      <h1>Pranav</h1>
      {/* Home page Medicines */}
      {/* <SliderImage/>
      <BrowseCategoryMedicine/>
      <IntroducingBelowCategory/>
      <ComprehensiveInfo/>
      <WhatUserSays/>
      <DownloadPracto/> */}
      {/* Home page Medicines */}
      <MedicineSearch/>
      <MedicinesProduct/>
      
    </div>
  );
}

export default App;
