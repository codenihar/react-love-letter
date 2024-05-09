import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';


const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className='container'>
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        mah dear kundanapu bomma🖤,<br /><div></div>
        konchum vinnu, These are all my true words!<br/>
        'I Love You' emukka nenu chalasarlu cheppunta kadha neeku. <br/>
        Nijaniki nuvvu em antha andhamga undavu. eadho cuiteness facelo unnadi ante konchum undi ante.<br/>
        Ina nenu ado andham chusi pramichanu anukunte neekanna andhaga unnavallu chalamandi unnaru. <br/>
        Kani nenu ninnu eanduku love chestunnano nake ardham kavatam ledu. Naku telisinanta varaku neeka love ante intreste ledu.
        kani nuvvu eakkado connect aiponu abba naku! ala ani nenu na premani express cheyaglanu kani nannu love cheyou ani ninnu
        ninnu adgalenu, adi neissam. <br/>
        Neetho exams avvagane matalu adalinukoni chala excitement-tho vacha! appudu eanduko bhayamvesi neeku degirilo kuda unadaleka poya.
        <br/>
        Idi antha chadvina neku em ardam avtundho ledo teliyadu naku!,
        <br/> kani nadho chinna request pleae! 'nuvvu em cheppli anukuna directga natho chpeva, kani vereokaritho chepenchaku abba please' okna?.
        <br/>
        Now don't feel bad and any type of worry, i will do not any texting to you. You should fouces on your thought's 
        And finaly End this letter...
        <br/> 
        @sai
        
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
    </div>
  );
};

export default LoveLetter;
