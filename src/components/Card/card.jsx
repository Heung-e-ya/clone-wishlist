import { DivCard, DivContainer, DivContainerImg, DivInfo } from "./styleCard";

export default function Card({
  adicionarAoCarrinho,
  LanchesFiltrados,
  lanchePesquisado,
}) {
  return (
    <>
      <DivContainer>
        {LanchesFiltrados.map((lanch) => (
          <DivCard key={lanch.id}>
            <DivContainerImg>
              <img src={lanch.img} alt="imagem" />
            </DivContainerImg>
            <DivInfo>
              <h3>{lanch.name}</h3>
              <span>{lanch.category}</span>
              <p>{lanch.price}원</p>
              <button onClick={() => adicionarAoCarrinho(lanch)}>담기</button>
            </DivInfo>
          </DivCard>
        ))}
      </DivContainer>
    </>
  );
}
