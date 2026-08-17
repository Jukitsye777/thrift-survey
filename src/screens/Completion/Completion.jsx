import { useState } from 'react';
import Brand from '../../components/Brand';
import { SneakerDoodle } from '../../components/FashionDoodles';

export default function Completion({ answers }) {
  const [submitted, setSubmitted] = useState(false);
  const submit = () => { const payload = { submittedAt: new Date().toISOString(), answers }; window.surveyResponses = payload; console.log('Survey responses:', payload); setSubmitted(true); };
  return <section className="screen completion"><div className="confetti">{Array.from({ length: 14 }, (_, i) => <i key={i} />)}</div><Brand /><div className="completion-sneaker"><SneakerDoodle /></div><div className="seal"><svg viewBox="0 0 60 60"><path d="M15 31l10 10 21-23" /></svg></div><div className="complete-label">SURVEY COMPLETE</div><h1>Thank you for helping us build the future of thrift shopping. ❤️</h1><p>Your responses will help us create a trusted marketplace for buying and selling quality pre-owned fashion.</p>{submitted ? <div className="submitted">✓ RESPONSES READY FOR SUBMISSION</div> : <button className="primary" onClick={submit}>Submit Responses <span className="arrow">→</span></button>}</section>;
}
