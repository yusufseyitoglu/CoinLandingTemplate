import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const handleClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: isMobile ? '8px 16px' : '10px 20px',
    border: '2px solid black',
    borderRadius: '8px',
    fontSize: isMobile ? '14px' : '16px',
    cursor: 'pointer',
    minWidth: isMobile ? '140px' : '160px',
    fontFamily: 'Fredoka One, cursive',
    letterSpacing: '1px',
    boxShadow: '3px 3px 0px black',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    width: isMobile ? '100%' : 'auto'
  };

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <div style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '30px' : '60px',
            maxWidth: '1200px',
            width: '100%',
            padding: isMobile ? '20px 16px' : '20px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              color: '#ffffff',
              maxWidth: isMobile ? '100%' : '600px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              textAlign: 'center'
            }}>
              <h1 style={{
                fontSize: isMobile ? '32px' : '42px',
                marginBottom: isMobile ? '16px' : '24px',
                fontFamily: 'Fredoka One, cursive',
                color: '#ffffff',
                textShadow: '3px 3px 0px #000000, 6px 6px 15px rgba(0,0,0,0.5)',
                letterSpacing: '2px',
                transform: 'skew(-5deg)',
                textTransform: 'uppercase',
                background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 50%, #ffffff 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextStroke: '2px #000',
                padding: '10px 0'
              }}>Trump vs Elon Coin</h1>
              <p style={{
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontWeight: '500',
                padding: isMobile ? '0 10px' : '0'
              }}>Nedir Bu Trump vs Elon Coin?

Trump vs Elon Coin, internet kültürünü, siyasi hicvi ve teknoloji ikonlarını bir araya getiren eşsiz bir meme coin projesidir. Espri anlayışı yüksek, topluluğu güçlü ve tamamen eğlence odaklı bu coin, merkeziyetsizliğin absürt ama eğlenceli yanını temsil ediyor.

Neden Trump ve Elon?
Çünkü kriptonun bir tarafı Tweet'le fiyat uçurur, diğer tarafı roketle aya gitmeyi dener! Biz de bu çılgınlığı zincire taşıdık!</p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '12px' : '20px',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '300px' : 'none'
            }}>
              <button 
                onClick={handleClick}
                style={{
                  ...buttonStyle,
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '4px 4px 0px black'
                  }
              }}>Telegram</button>
              <button 
                onClick={handleClick}
                style={{
                  ...buttonStyle,
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '4px 4px 0px black'
                  }
              }}>Twitter</button>
              <button 
                onClick={handleClick}
                style={{
                  ...buttonStyle,
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '4px 4px 0px black'
                  }
              }}>Buy Now</button>
              <button 
                onClick={handleClick}
                style={{
                  ...buttonStyle,
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '4px 4px 0px black'
                  }
              }}>Chart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div style={{
        backgroundColor: '#000000',
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            color: '#ffffff',
            maxWidth: isMobile ? '100%' : '1200px',
            width: '100%',
            padding: isMobile ? '20px 16px' : '20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '28px' : '36px',
              marginBottom: isMobile ? '16px' : '24px',
              fontFamily: 'Fredoka One, cursive',
              color: '#ffffff',
              textShadow: '3px 3px 0px #000000, 6px 6px 15px rgba(0,0,0,0.5)',
              letterSpacing: '2px',
              transform: 'skew(-5deg)',
              textTransform: 'uppercase',
            }}>Trump vs Elon'un Hikayesi</h2>
            
            <img 
              src="/Standard_Mode_a_2__second_looped_cartoon_anima-VEED.gif" 
              alt="Trump vs Elon Animation"
              style={{
                maxWidth: '100%',
                width: isMobile ? '300px' : '400px',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
            />

            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.6',
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontWeight: '500',
              maxWidth: '800px'
            }}>İki dünya devi, bir coin'de buluşuyor. 
            Kripto dünyasının en renkli karakterleri artık bir projede karşı karşıya!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
