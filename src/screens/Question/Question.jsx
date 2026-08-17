import Brand from '../../components/Brand';
import { ThriftQuip } from '../../components/ThriftQuip';

const jokeFreeQuestions = new Set(['noThriftReason', 'onlineThriftBarriers', 'productInterests', 'appSwitch', 'jordanDecision', 'launchIntent', 'appFrequency']);

export default function Question({ question, answer, number, total, onAnswer, onBack, onHome, onNext }) {
  const select = option => {
    if (question.multiple) {
      const current = answer || [];
      onAnswer(current.includes(option) ? current.filter(item => item !== option) : [...current, option]);
    } else onAnswer(option);
  };

  return <section className="screen question">
    <Brand />
    <button className="home-button" type="button" onClick={onHome}>⌂ HOME</button>
    <div className="topbar">
      <span className="count">{String(number).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      <div className="progress"><span style={{ width: `${(number / total) * 100}%` }} /></div>
    </div>
    <div className="question-content">
      <div className="question-number">{question.multiple ? 'SELECT ALL THAT APPLY' : 'YOUR ANSWER'}</div>
      <h2 className="question-title">{question.title}</h2>
      {question.detail && <p className="question-detail">{question.detail}</p>}
      {question.text ? <textarea className="long-answer" value={answer || ''} onChange={event => onAnswer(event.target.value)} placeholder="I know your attention span is cooked, but type something to continue…" /> : <div className="choice-list">{question.options.map(option => {
        const selected = question.multiple ? (answer || []).includes(option) : answer === option;
        return <button className={`choice ${selected ? 'selected' : ''}`} type="button" key={option} onClick={() => select(option)}><span className={question.multiple ? 'check' : 'radio'} />{option}</button>;
      })}</div>}
    </div>
    {!jokeFreeQuestions.has(question.id) && <ThriftQuip compact index={number} />}
    <div className="actions">
      <button className="back" onClick={onBack} style={{ visibility: number === 1 ? 'hidden' : 'visible' }}>← Back</button>
      <button className="primary next" onClick={onNext}>Continue <span className="arrow">→</span></button>
    </div>
  </section>;
}
