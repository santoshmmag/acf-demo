import { GetPageWithAcfQuery } from '@/generated/graphql';

type Props = {
  data: NonNullable<GetPageWithAcfQuery['page']>['heroSection'];
};


export default function Hero({ data }: Props) {
  return (
    // <section>
    //   <h1>{data?.mainHeading}</h1>
    //   <p>{data?.subHeading}</p>
    // </section>
<section className="hero-section">
  <div className="hero-content">
    <div className="headline-group">
      <h1 className="hero-yes">{data?.mainHeading}</h1>
      <div className="hero-pointers">
        <p>IT’S EASY</p>
        <p>IT’S SECURE</p>
        <p>IT’S FOR EVERYBODY</p>
      </div>
    </div>

    <p className="hero-subtext">
      Seamless multi-device investing.
      <span className="highlight">Trusted by 6+ lakh investors</span>
    </p>

    <form className="hero-form">
      <input type="text" placeholder="Your Name" />
      <input type="tel" placeholder="Your Mobile Number" />
      <button type="submit">Open Demat Account</button>
    </form>

    <p className="hero-disclaimer">*By proceeding, I agree to all terms & conditions</p>
  </div>
</section>

  );
}
