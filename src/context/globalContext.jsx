import { createContext, useState } from "react";

// Create a Context for authentication
export const StateContext = createContext();

// Create a provider component
const StateProvider = ({ children }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState(null); // Add image state
  const [selectedSubset, setSelectedSubset] = useState('');
  const [customIcon, setCustomIcon] = useState(null);
  const [cardType, setCardType] = useState('');
  const [SelectCardType, setSelectCardType] = useState('');

  const [attack, setAttack] = useState('');
  const [defence, setDefence] = useState('');
  const [effectName, setEffectName] = useState('');
  const [cardRank, setCardRank] = useState('');
  const [effectNames, setEffectNames] = useState(['']); // Start with one empty effect name
  const [effectDetails, setEffectDetails] = useState(['']); // Corresponding effect details







  return (
    <StateContext.Provider
      value={{ name, setName, image, setImage, selectedSubset, setSelectedSubset, customIcon, setCustomIcon, cardType, setCardType, attack, setAttack, defence, setDefence, effectName, setEffectName,cardRank, setCardRank,effectNames, setEffectNames,effectDetails, setEffectDetails,SelectCardType, setSelectCardType }
      }>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
