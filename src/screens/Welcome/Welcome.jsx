import Brand from '../../components/Brand';
import { FashionStickers, SneakerDoodle, TeeDoodle } from '../../components/FashionDoodles';

export default function Welcome({ onStart }) {
  return <section className="screen welcome"><Brand /><FashionStickers /><div className="fashion-art"><div className="art-swatch swatch-pink" /><div className="art-swatch swatch-blue" /><TeeDoodle /><SneakerDoodle /></div><div className="welcome-copy"><p className="eyebrow">THE PRE-LOVED FASHION CHECK-IN</p><h1>KEEP IT<br /><em>IN THE LOOP.</em></h1><p className="subtitle">Help us shape Bengaluru’s next trusted thrift drop — better fits, verified finds, zero boring fashion.</p></div><div className="button-row"><button className="primary" onClick={onStart}>LET’S GO <span className="arrow">→</span></button><span className="time">~ 3 MINUTES<br />18 QUICK Qs</span></div></section>;
}
