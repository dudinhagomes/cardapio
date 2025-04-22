import { useState } from "react";
import "./globals.css";

export default function App() {
  const [listaProdutos, setProdutos] = useState([
    {
      id: 1,
      item: "Roupão Coroa Preto Unissex",
      imagem: "https://images.tcdn.com.br/img/img_prod/1282015/roupao_coroa_preto_unissex_77_1_f92c034385323640288b3c24a07d365d.jpg",
      preco: "R$ 351,00"
    },
    {
      id: 2,
      item: "EL FUEGO - FOR HER (FEMININO) 100ml",
      imagem: "https://images.tcdn.com.br/img/img_prod/1282015/el_fuego_for_her_feminino_9_1_d13f505d74c81c7e2bf1ce414e44e075.jpg",
      preco: "R$ 140,99"
    },
    {
      id: 3,
      item: "Camiseta PRETA com Estampa Exclusiva - P&B",
      imagem: "https://images.tcdn.com.br/img/img_prod/1282015/camiseta_preta_com_estampa_exclusiva_peamp_b_173_1_4c8700088b8b578c65bbbf12613c8b95.jpg",
      preco: "R$ 250,00"
    },
    {
      id: 4,
      item: "Camiseta PRETA com Estampa Exclusiva - LUA",
      imagem: "https://images.tcdn.com.br/img/img_prod/1282015/camiseta_lua_169_1_35d7301f379ecfcd7e02a02cd2e01d96.jpg",
      preco: "R$ 149,50"
    },
    {
        id: 5,
        item: "Carteira",
        imagem: "https://images.tcdn.com.br/img/img_prod/1282015/carteira_103_1_24a15837a8d625f4bbac779c7fae55f6.jpg",
        preco: "R$ 49,50"
      },
      {
        id: 6,
        item: "KIT - Roupão Preto + Conjunto Preto + Carteira Personalizada",
        imagem: " https://images.tcdn.com.br/img/img_prod/1282015/kit_roupao_preto_conjunto_preto_carteira_personalizada_137_1_31a6ebc6b5fbf8fbf82113de0b41f4c9.jpg",
        preco: "R$ 580,00"
      },
     
  ]);

  const [listaPedidos, setPedidos] = useState([]);

  const adicionarPedido = (item) => {
    setPedidos([...listaPedidos, item]);
  };

  const removerPedidos = (id) => {
    let listaAux = listaPedidos.filter((produto) => produto.id !== id);
    setPedidos(listaAux);
  };

  const finalizarPedido = () => {
    const total = listaPedidos
      .reduce((acc, item) => acc + parseFloat(item.preco.replace("R$ ", "").replace(",", ".")), 0)
      .toFixed(2)
      .replace(".", ",");

    const resumo = listaPedidos.map((item) => `- ${item.item} (${item.preco})`).join("\n");

    alert(`✅ Pedido finalizado com sucesso!\n\nItens:\n${resumo}\n\nTotal: R$ ${total}`);
    setPedidos([]); // limpa os pedidos
  };

  return (
    <div className="bloco-principal">
      <div className="bloco-produtos">
        {listaProdutos.map((produto) => (
          <div key={produto.id}>
            <img src={produto.imagem} alt={produto.item} />
            <p>{produto.item}</p>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarPedido(produto)}>QUERO</button>
          </div>
        ))}
      </div>

      <div className="bloco-pedidos">
        <p>Meus Pedidos</p>
        {listaPedidos.length > 0 ? (
          <>
            <table>
              <tbody>
                {listaPedidos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.item}</td>
                    <td>{produto.preco}</td>
                    <td>
                      <button onClick={() => removerPedidos(produto.id)}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#333" }}>
              Total: R$ {listaPedidos
                .reduce((acc, item) => acc + parseFloat(item.preco.replace("R$ ", "").replace(",", ".")), 0)
                .toFixed(2)
                .replace(".", ",")}
            </p>

            <button
              onClick={finalizarPedido}
              style={{ marginTop: "1rem", backgroundColor: "#0a7d0a", color: "white", padding: "1rem", borderRadius: "1rem", border: "none" }}
            >
              Finalizar Pedido
            </button>
          </>
        ) : (
          <p>Não há pedidos</p>
        )}
      </div>
    </div>
  );
}
