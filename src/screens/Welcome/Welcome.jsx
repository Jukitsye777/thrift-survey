import Brand from '../../components/Brand';

export default function Welcome({ onStart }) {
  return <section className="screen welcome"><Brand /><div><p className="eyebrow">A better way to rewear</p><h1>Fashion deserves a <em>second life.</em></h1><p className="subtitle">We're building Bengaluru's most trusted thrift marketplace where every item is inspected before reaching the buyer.</p></div><div className="button-row"><button className="primary" onClick={onStart}>Start Survey <span className="arrow">→</span></button><span className="time">~ 3 MINUTES</span></div></section>;
}
