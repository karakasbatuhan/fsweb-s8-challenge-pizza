import React, { useState } from "react";
import axios from "axios";
import "./OrderPizza.css";

function OrderPizza({ navigateTo, setOrderData }) {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    dough: '',
    toppings: [],
    specialNote: '',
    quantity: 1
  });

  const toppingOptions = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Jalepeno", "Salam", 
    "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"
  ];

  const toppingPrice = 5; 
  const basePrice = 85.5; 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        if (formData.toppings.length < 10) {
          setFormData({
            ...formData,
            toppings: [...formData.toppings, value]
          });
        }
      } else {
        setFormData({
          ...formData,
          toppings: formData.toppings.filter(t => t !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleQuantityChange = (increment) => {
    setFormData({
      ...formData,
      quantity: Math.max(1, formData.quantity + increment)
    });
  };

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 3 &&
      formData.size !== '' &&
      formData.dough !== '' &&
      formData.toppings.length >= 4 &&
      formData.toppings.length <= 10
    );
  };

  const calculateTotal = () => {
    return (basePrice + (formData.toppings.length * toppingPrice)) * formData.quantity;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    axios.post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        console.log("Sipariş Başarılı:", response.data);
        setOrderData(response.data);
        navigateTo('success');
      })
      .catch((error) => {
        console.error("Sipariş Gönderilemedi:", error);        
        setOrderData(formData); 
        navigateTo('success');
      });
  };


  return (
    <div className="orderPage">
      <header>
        <div className="mainMenu">
            <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
            <h4 className="pageAdress">Anasayfa - <b>Sipariş Oluştur</b></h4>
        </div>    
      </header>
      <main>
        <div className="order-form-container">  
          <section>  
            <div className="product-info">
              <h2>Position Absolute Acı Pizza</h2>
              <div className="priceAndUserRatings">
                <p><strong>85.50₺</strong></p>
                  <div className="userRatings">
                    <p>4.9</p>
                    <p>(200)</p>
                  </div>
              </div>
              <p>
                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlark, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
              </p>
            </div>  
          </section>
          <section>
            <div className="sizeAndDoughFormGroup">
              <div className = "sizeFormGroup">
                <label>Boyut Seç <b>*</b></label><br/>
                <label><input type="radio" name="size" value="Küçük" onChange={handleChange} checked={formData.size === "Küçük"} /> Küçük</label><br/>
                <label><input type="radio" name="size" value="Orta" onChange={handleChange} checked={formData.size === "Orta"} /> Orta</label><br/>
                <label><input type="radio" name="size" value="Büyük" onChange={handleChange} checked={formData.size === "Büyük"} /> Büyük</label>
              </div>
              <div className="doughFormGroup">
              <label>Hamur Seç <b>*</b></label><br/>
              <select name="dough" onChange={handleChange} value={formData.dough}>
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
            </div>
          </section>
            
          <section>
            <div className="extrasFormGroup">
              <div className ="infoExtras">
                <label><strong>Ek Malzemeler:</strong></label><br/>
                <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              </div>

              <div className = "toppings">
              {toppingOptions.map(topping => (
                
                <label key={topping}>
                  
                  <input 
                    type="checkbox" 
                    value={topping}
                    checked={formData.toppings.includes(topping)}
                    onChange={handleChange}
                  /> {topping}                
                </label>              
              ))}
              </div>
            </div>
          </section>
          <section>
            <form onSubmit={handleSubmit}>
          
              <div className="nameFormGroup">
                <label>İsim</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  minLength="3"
                  required
                  placeholder="Lütfen isminizi giriniz"
                />
              </div>

              <div className="specialNoteFormGroup">
                <label>Sipariş Notu</label>
                <textarea 
                  name="specialNote"
                  value={formData.specialNote}
                  onChange={handleChange}
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
              </div>

              <hr />
              <div className="orderSummaryFormGroup">
              <div className="quantityControlsFormGroup">
                <button type="button" className="decrease" onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{formData.quantity}</span>
                <button type="button" className="increase" onClick={() => handleQuantityChange(1)}>+</button>
              </div>

              <div className="formSummary">
                <div className="priceSummary">
                  <span><strong>Sipariş Toplamı</strong></span>
                  <p className="extraPrice">Seçimler: {formData.toppings.length * toppingPrice}₺</p>
                  <p className="totalPrice">Toplam Tutar: {calculateTotal().toFixed(2)}₺</p>
                </div>
                  <button type="submit" disabled={!isFormValid()} className="order-submit-button">
                    SİPARİŞ VER
                  </button>
                </div>
              </div>      
            </form>      
          </section>    
        </div>
      </main>
    </div>
  );
}

export default OrderPizza;