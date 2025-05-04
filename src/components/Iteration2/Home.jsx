import React from "react";
import "./Home.css";

function Home({ navigateTo }) {
  const handleOrderClick = () => {
    navigateTo('order');
  };

  return (
    <div className="home-container">
      <header>
        <div className="upperPart">
          <div className="mainScreen">
            <h1 className="teknolojikYemekler">Teknolojik Yemekler</h1>
            <h2 className="opportunity">fırsatı kaçırma</h2>
            <h2 className="hero-title">KOD ACIKTIRIR<br />PIZZA, DOYURUR</h2>
            <button onClick={handleOrderClick} className="order-button">
                ACIKTIM
            </button>        
          </div>

          <section className="shortcutMenu">
            <div className="shortcutMenuButtons">
              <button onClick={handleOrderClick} className="kore-button"><img src="/images/iteration-2-images/icons/1.svg" alt="kore-icon" />YENİ! Kore</button>
              <button onClick={handleOrderClick} className="pizza-button"><img src="/images/iteration-2-images/icons/2.svg" alt="pizza-icon" />Pizza</button>
              <button onClick={handleOrderClick} className="burger-button"><img src="/images/iteration-2-images/icons/3.svg" alt="burger-icon" />Burger</button>
              <button onClick={handleOrderClick} className="fries-button"><img src="/images/iteration-2-images/icons/4.svg" alt="fries-icon" />Kızartmalar</button>
              <button onClick={handleOrderClick} className="fastFood-button"><img src="/images/iteration-2-images/icons/5.svg" alt="fastFood-icon" />Fast food</button>
              <button onClick={handleOrderClick} className="drinks-button"><img src="/images/iteration-2-images/icons/6.svg" alt="drinks-icon" />Gazlı İçecek</button>
            </div>
          </section>
        </div>          
      </header>
      <main>
      <section className="midPartPage">
              <div className="opportunitiesMenus"> {/*Üstteki üçlü reklamların divi*/}
                <div className="opportunitiesFirst">
                  <div className="opportunitiesFirstElements">
                    <h3>Özel Lezzetus</h3>
                    <p>Position: Absolute Acı Burger</p>
                    <button onClick={handleOrderClick} className="lezzetus-order-button">SİPARİŞ VER</button>
                  </div>
                </div>
                <div className="opportunitiesMenuRight">
                  <div className="opportunitiesSecond">
                    <div className="opportunitiesSecondElements">
                      <h3>Hackathlon Burger Menü</h3>
                      <button onClick={handleOrderClick} className="hackhathlon-order-button">SİPARİŞ VER</button>
                    </div>
                  </div>
                  <div className="opportunitiesThird">
                    <div className="opportunitiesThirdElements">
                      <h3><span>Çoooook</span> hızlı npm gibi kurye </h3>
                      <button onClick={handleOrderClick} className="npmKurye-order-button">SİPARİŞ VER</button>
                    </div>
                  </div>                
                </div>
              </div>
              <div className="slogans">
                <h2>en çok paketlenen menüler</h2>
                <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
              </div>
              <div className="middleMenu">
                <button onClick={handleOrderClick} className="kore-button"><img src="/images/iteration-2-images/icons/1.svg" alt="kore-icon" />Ramen</button>
                <button onClick={handleOrderClick} className="pizza-button"><img src="/images/iteration-2-images/icons/2.svg" alt="pizza-icon" />Pizza</button>
                <button onClick={handleOrderClick} className="burger-button"><img src="/images/iteration-2-images/icons/3.svg" alt="burger-icon" />Burger</button>
                <button onClick={handleOrderClick} className="fries-button"><img src="/images/iteration-2-images/icons/4.svg" alt="fries-icon" />French fries</button>
                <button onClick={handleOrderClick} className="fastFood-button"><img src="/images/iteration-2-images/icons/5.svg" alt="fastFood-icon" />Fast food</button>
                <button onClick={handleOrderClick} className="drinks-button"><img src="/images/iteration-2-images/icons/6.svg" alt="drinks-icon" />Soft Drinks</button>
              </div>
              <div className="recommendedFoods">
                <div className="recommendedFirst">
                  <img src="/images/iteration-2-images/pictures/food-1.png" alt="terminal-pizza" />
                  <div className="recommendedFirstInformations">
                    <h4>Terminal Pizza</h4>
                    <div className="recommendedFirstNumbers">
                      <p>{4.9}</p>
                      <div className="reccomendedFirstPrice">
                        <p>(200)</p>
                        <p><b>60₺</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recommendedSecond">
                  <img src="/images/iteration-2-images/pictures/food-2.png" alt="positionAbsolute-pizza" />
                  <div className="recommendedSecondInformations">
                    <h4>Position Absolute Acı Pizza</h4>
                    <div className="recommendedSecondNumbers">
                      <p>4.9</p>
                      <div className="reccomendedSecondPrice">
                        <p>(200)</p>
                        <p><b>60₺</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recommendedThird">
                  <img src="/images/iteration-2-images/pictures/food-3.png" alt="useEffect-burger" />
                  <div className="recommendedThirdInformations">
                    <h4>useEffect Tavuklu Burger</h4>
                    <div className="recommendedThirdNumbers">
                      <p>4.9</p>
                      <div className="reccomendedThirdPrice">
                        <p>(200)</p>
                        <p><b>60₺</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
      </main>  
      <footer>
        <section className="footerPart">
          <div className="footerTop">
            <div className="footerTopInfos">
              <div className="footerTopInfosLeft">
                <h3>Teknolojik Yemekler</h3>
                <address>
                  <ul>
                    <li><img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="" /><a href="">341 Londonderry Road, Istanbul Türkiye</a></li>
                    <li><img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="" /><a href="mailto: info@workintechpizza@gmail.com">aciktim@teknolojikyemekler.com</a></li>
                    <li><img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="" /><a href="">+90 216 123 45 67</a></li>
                  </ul>
                </address>
              </div>
              <div className="footerTopInfosRight">
                <h3>Hot Menu</h3>
                <ul>
                  <li><a href="">Terminal Pizza</a></li>
                  <li><a href="">5 Kişilik Hackhathlon Pizza</a></li>
                  <li><a href="">useEffect Tavuklu Pizza</a></li>
                  <li><a href="">Beyaz Console Frosty</a></li>
                  <li><a href="">Testler Geçti Mutlu Burger</a></li>
                  <li><a href="">Position Absolute Acı Burger</a></li>
                </ul>
              </div>
            </div>
            <div className="footerTopInstagram">
              <h3>Instagram</h3>
              <div className="instagramPhotos">
                <img src="/images/iteration-2-images/footer/insta/li-0.png" alt=""/> {/*Photo1*/}
                <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" /> {/*Photo2*/}
                <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" /> {/*Photo3*/}
                <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" /> {/*Photo4*/}
                <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" /> {/*Photo5*/}
                <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" /> {/*Photo6*/}
              </div>
            </div>
          </div>
          <div className="footerBottom">
            <div className="footerLogos">
              <p>© 2023 Teknolojik Yemekler. </p>
              <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Home;