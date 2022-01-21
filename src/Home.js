import { AppContext } from './context'
import phone from './images/phone.svg'
import { useGlobalContext } from './context'

const Home = () => {

const { closeSubmenu } = useGlobalContext();
    return (
        <main className="home-wrapper" onMouseEnter={closeSubmenu}>
            
            <section className="info-wrapper">
                <h1 className="main-title">
                Payments infrastructure for the internet
                </h1>
                <p className="main-info">
                Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                </p>
                <div className="main-btn-wrapper">
                <button className='btn start'>Start now</button>
                <button className='btn contact'>Contact sales</button>
                </div>
            </section>
            <section className='main-img'>
                <img src={phone} alt="phone" />
            </section>
        </main>
    );
}
 
export default Home;