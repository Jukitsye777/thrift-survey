import { useMemo, useState } from 'react';
import { questions } from './data/questions';
import Welcome from './screens/Welcome/Welcome';
import Question from './screens/Question/Question';
import Completion from './screens/Completion/Completion';

export default function App() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState({});
  const visibleQuestions = useMemo(() => questions.filter(question => !question.show || question.show(answers)), [answers]);
  const question = visibleQuestions[step];
  const saveAnswer = value => setAnswers(current => ({ ...current, [question.id]: value }));
  const next = () => { const value = answers[question.id]; if (!value || (Array.isArray(value) && !value.length) || (typeof value === 'string' && !value.trim())) return; setStep(current => current + 1); };
  return <main className="app-shell"><div className="noise" /><div className="poster-stamp stamp-one">THRIFT<br />CLUB</div><div className="poster-stamp stamp-two">✦<br />REWEAR</div><div className="survey-card">{step < 0 ? <Welcome onStart={() => setStep(0)} /> : question ? <Question question={question} answer={answers[question.id]} number={step + 1} total={visibleQuestions.length} onAnswer={saveAnswer} onBack={() => setStep(current => current - 1)} onNext={next} /> : <Completion answers={answers} />}</div><p className="footnote">SECOND STORY <span>•</span> BENGALURU, INDIA</p></main>;
}
