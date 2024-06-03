import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './Buchii.mp3';

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
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Hey my thingarii tejuuu🖤,
       <p> <i>This is here to tell you something important🥸 for me, you aaand <b>FOR US🧑🏻‍🤝‍👩🏻</b>.</i></p>
        Amongst all chaos, we both managed to become one🥰. I can understand how happy that makes you🤗. 
        No matter, how many girls are there in my life or come into my life, no body is above you and none of them can take me from you😘, 
        This man is yours darling✨.
        Just remember that I'm always here for you and with you🫂. My love, I want to have a peaceful life with you🍃🍀, 
        that's as amazing as your energy🌟 and as beautiful as those moon🌛 & stars✨.
        For this journey of our life, I wish we only have lots and lots of understandings😌 and corrected understandings✅, 
        but not misunderstandings🧐.
        And daaniki mana iddari efforts avsaram and I know that manam iddaram ade nammutham and chestham🤗. And paapa, 
        I'm so sorry🫂🫂 if my absence or my unknowingly happened mistakes ever hurt you. 
        Tejamma, I put my every piece of mind and every drop of sweat to KNOW YOU, to be with you and to improve you🌟.
        Teju I WANT to make <b>you</b> "equal" <b>to me</b> in all aspects, nuv naku samanam ga undaali anukunta, atleast maximum of them, 
        that's why sometimes, I force you to do things and ask you to change few things,
        This MAN!!, I mean YOUR MANN !!, never means to hurt,rather, he just wants to make you into a better version of yourself🌟, daily.
        For me your happiness is important, so is your health and growth👑. <br/> <br/>
        Arey tejuuu🖤, we need to work hard and better ra nanna. Neeku telsu ga nen recentga motham anni neat ga start chestunna ani, 
        so for that I need your support.
        yeah, emaina avsaram unte chestav, but not that. E process lo, I may not msg u properly🙃, I may not be able to spend maximum time 
        online with you.But, when I'm free,
        I'll definitely reply on time. One thing, I hope you understand stay calm when I go off the chats & calls. Naku nenu ga msg cheytam anedi 
        kastam avtundi, 
        but we WILL stay connected.
        But all the time anedi cheppalem. But direct ga unnappdu I'm all yours. 
        Buchamma❣️, remember One thing‼️, when you want to talk to me, 
        I mean miss avtunnappudu, baga matladali anipinchinappudu, avsaram unnappudu 
        "buchi/nanna oka sari chat loki rava or call chey" ani msg chey, ledu ante direct ga call ye chesey no problem, first calll lift cheyyakpoina, 
        2nd call ki matram lift chestha. 
        We shall talk about this clearly in person!.
        <br/>This part of our lives is crucial for both of us.<br/>And when I'm doing the work,
        I want you to do the same, we should be doing some productive work <b>FOR <i>OUR,</i> FUTURE!!</b> Let's do this together for us ra tejuthalli.
        If we spend time improving eachother by working on ourselves, later we can spend long hours TOGETHER. Proper ga ne convey chesa anukuntunna. 
        Tejuu, Let's do our best ra, let's show the world that we are a great couple. I believe that I inspired atleast few as a person. Now let's inspire as a couple. "TOGETHER"
        Let's make our <b>love</b> win with all our hardwork and efforts. Let's enjoy but also work with proper usage of time.<br/>
        I do appreciate how wholeheartedly you love me. I can't thank you enough. I'm so happy. Let's grow, celebrate and enrich our love😌🥰😘✨.

        
        
       <br/> <br />Love you to the moon and back my love😘🥰😌<br />
        I'm always yours🖤,<br />
        @Your Buchhiii💕✨
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
