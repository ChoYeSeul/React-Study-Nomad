// useEffect는 화면이 다 그려지고 나서 그 이후 실행된다.
import { useEffect, useState } from "react";

function CoinList() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const getCoinList = () => {
    fetch(`https://api.coinpaprika.com/v1/tickers`)
      .then((res) => res.json())
      .then((res) => {
        setCoinList(res);
        setLoading(false);
      });
  };
  useEffect(() => {
    getCoinList();
  }, []);
  return (
    <div>
      <h1>The Coins ({coinList.length})</h1>
      {loading ? (
        "loading..."
      ) : (
        <ul>
          {coinList.map((item) => {
            return (
              <li key={item.id}>
                {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CoinList;
