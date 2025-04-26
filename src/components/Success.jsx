import React from "react";

function Success({ orderData }) {
  if (!orderData) {
    return (
      <div className="success-container">
        <h1>Sipariş Bilgisi Bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="success-container" style={{ padding: "20px", textAlign: "center" }}>
      <h1>🥳 Sipariş Başarılı!</h1>

      <div className="order-summary" style={{ marginTop: "20px", textAlign: "left", display: "inline-block" }}>
        <h2>🍕 Sipariş Özeti</h2>
        <p><strong>İsim:</strong> {orderData.name || "Belirtilmemiş"}</p>
        <p><strong>Boyut:</strong> {orderData.size || "Belirtilmemiş"}</p>
        <p><strong>Hamur:</strong> {orderData.dough || "Belirtilmemiş"}</p>

        <div style={{ marginTop: "10px" }}>
          <strong>Seçilen Malzemeler:</strong>
          <ul>
            {orderData.toppings && orderData.toppings.length > 0 ? (
              orderData.toppings.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>Malzeme seçilmemiş</li>
            )}
          </ul>
        </div>

        <p style={{ marginTop: "10px" }}><strong>Özel Not:</strong> {orderData.specialNote || "Yok"}</p>
        <p><strong>Adet:</strong> {orderData.quantity || 1}</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>🍴 Afiyet Olsun!</h2>
      </div>
    </div>
  );
}

export default Success;
