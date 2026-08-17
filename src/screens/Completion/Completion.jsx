import { useState } from 'react';
import Brand from '../../components/Brand';
import { SneakerDoodle } from '../../components/FashionDoodles';

export default function Completion({ answers }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const submit = async () => {
    setSubmitting(true); setError('');
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      if (!apiBaseUrl) throw new Error('Missing API URL');
      const response = await fetch(`${apiBaseUrl.replace(/\/$/, '')}/surveys`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answers }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Submission failed');
      setSubmitted(true);
    } catch { setError('Couldn’t send your response. Please try again.'); }
    finally { setSubmitting(false); }
  };
  return <section className="screen completion"><div className="confetti">{Array.from({ length: 14 }, (_, i) => <i key={i} />)}</div><Brand /><div className="completion-sneaker"><SneakerDoodle /></div><div className="seal"><svg viewBox="0 0 60 60"><path d="M15 31l10 10 21-23" /></svg></div><div className="complete-label">SURVEY COMPLETE</div><h1>Thank you for helping us build the future of thrift shopping. ❤️</h1><p>Your responses will help us create a trusted marketplace for buying and selling quality pre-owned fashion.</p>{submitted ? <div className="submitted">✓ RESPONSE RECEIVED</div> : <><button className="primary" onClick={submit} disabled={submitting}>{submitting ? 'SENDING…' : <>SUBMIT RESPONSES <span className="arrow">→</span></>}</button>{error && <p className="submit-error" role="alert">{error}</p>}</>}</section>;
}
