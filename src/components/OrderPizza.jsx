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
    "Soğan", "Domates", "Mısır", "Jalepeno", 
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
    <div className="order-form-container">
      <header className="hero">
        <h1>Teknolojik Yemekler</h1>
      </header>

      <div className="product-info">
        <h2>Position Absolute Acı Pizza</h2>
        <p><strong>85.50₺</strong></p>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel odun ateşiyle...
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>İsim:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            minLength="3"
            required
          />
        </div>

        <div className="form-group">
          <label>Boyut Seç:</label><br/>
          <label><input type="radio" name="size" value="Küçük" onChange={handleChange} checked={formData.size === "Küçük"} /> Küçük</label><br/>
          <label><input type="radio" name="size" value="Orta" onChange={handleChange} checked={formData.size === "Orta"} /> Orta</label><br/>
          <label><input type="radio" name="size" value="Büyük" onChange={handleChange} checked={formData.size === "Büyük"} /> Büyük</label>
        </div>

        <div className="form-group">
          <label>Hamur Seç:</label><br/>
          <select name="dough" onChange={handleChange} value={formData.dough}>
            <option value="">Hamur Kalınlığı Seç</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ek Malzemeler:</label><br/>
          {toppingOptions.map(topping => (
            <label key={topping} style={{ display: "block" }}>
              <input 
                type="checkbox" 
                value={topping}
                checked={formData.toppings.includes(topping)}
                onChange={handleChange}
              /> {topping}
            </label>
          ))}
        </div>

        <div className="form-group">
          <label>Sipariş Notu:</label><br/>
          <textarea 
            name="specialNote"
            value={formData.specialNote}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </div>

        <div className="form-group quantity-controls">
          <label>Adet:</label><br/>
          <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{formData.quantity}</span>
          <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <div className="form-summary">
          <p>Ekstra Malzeme Tutarı: {formData.toppings.length * toppingPrice}₺</p>
          <p><strong>Toplam Tutar: {calculateTotal().toFixed(2)}₺</strong></p>
        </div>

        <button type="submit" disabled={!isFormValid()} className="order-submit-button">
          SİPARİŞ VER
        </button>

      </form>
    </div>
  );
}

export default OrderPizza;
