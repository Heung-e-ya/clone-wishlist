import React from "react";
import {
  Aside,
  DivCardCarrinho,
  DivNomeCarrinho,
  DivSacolaVazia,
  Sectionn,
} from "./styleCart";

function Cart({ deletarItemCarrinho, lanchesCarrinho, deletarTodositens }) {
  let total = lanchesCarrinho.reduce(
    (valorInicial, valoresDosProdutos) =>
      valorInicial + valoresDosProdutos.price,
    0
  );
  return (
    <Aside>
      <DivNomeCarrinho>
        <h3>Shopping cart</h3>
      </DivNomeCarrinho>
      <Sectionn>
        {lanchesCarrinho.length === 0 ? (
          <DivSacolaVazia>
            <h3>Your bag is empty</h3>
            <span>Addicione it's</span>
          </DivSacolaVazia>
        ) : (
          lanchesCarrinho.map((item) => (
            <DivCardCarrinho>
              <div className="imgCart">
                <img src={item.img} alt="imagem do produto" />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.category}</p>
              </div>
              <button
                className="btnRemoverCardCarrinho"
                onClick={() => deletarItemCarrinho(item)}
              >
                제거
              </button>
            </DivCardCarrinho>
          ))
        )}
      </Sectionn>
      {lanchesCarrinho.length !== 0 && (
        <>
          <div className="divTotal">
            <span>Total</span>
            <p>{total.toFixed(0)}원</p>
          </div>
          <button onClick={() => deletarTodositens()}>전체 제거</button>
        </>
      )}
    </Aside>
  );
}

export default Cart;
