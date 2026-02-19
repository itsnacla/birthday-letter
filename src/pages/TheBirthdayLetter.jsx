import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hi, Shahouda happy birthday!</p>
                    <p>
                        Happy birthday my baby boo!
                        
                        I hope that this year ya shahoudty to be the best for you and open more gates for you, I love you so much. I love the way you smile and everything about you, you are my beautiful baby, my frog, my كريزه habebet alby <3 
                        
                        You make me feel safe and warm when I'm with you I want you to Fully Rely On God (F.R.O.G.) HAHAHAH 
                        
                        Happy birthday, my heart and my frog.
                        You are my favorite person in this world.
       
                    </p>
                    {/* <p>
                        once more, enjoy ur new journey. hope Allah bless you and let happiness comes to
                        you in every single seconds.
                    </p> */}
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>يوسف حاتم</p>
                </div>
            </div>
            
            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
