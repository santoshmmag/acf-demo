import { GetPageWithAcfQuery } from '@/generated/graphql';

type Props = {
  data: NonNullable<GetPageWithAcfQuery['page']>['investmentSection'];
};


export default function Investment({ data }: Props) {
  return (
    <section className="investment-options">
  <div className="container">
    <h2 className="section-title">Easy Investment Options</h2>

    <div className="grid">
      <div className="grid-item">
        <img src="/icons/stocks.png" alt="Stocks" />
        <span>Stocks</span>
      </div>
      <div className="grid-item">
        <img src="/icons/etfs.png" alt="ETFs" />
        <span>ETFs</span>
      </div>
      <div className="grid-item">
        <img src="/icons/fno.png" alt="Futures & Options" />
        <span>Futures & Options</span>
      </div>
      <div className="grid-item">
        <img src="/icons/currency.png" alt="Currency" />
        <span>Currency</span>
      </div>

      <div className="grid-item">
        <img src="/icons/mutualfunds.png" alt="Mutual Funds" />
        <span>Mutual Funds</span>
      </div>
      <div className="grid-item">
        <img src="/icons/ipo.png" alt="IPO" />
        <span>IPO</span>
      </div>
      <div className="grid-item">
        <img src="/icons/wealthbox.png" alt="Wealthbox" />
        <span>Wealthbox</span>
      </div>
      <div className="grid-item">
        <img src="/icons/aif.png" alt="AIF" />
        <span>AIF</span>
      </div>
    </div>
  </div>
</section>

  );
}
