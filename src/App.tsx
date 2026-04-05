import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { QuestionPage } from './pages/QuestionPage';
import { AllQuestionsPage } from './pages/AllQuestionsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:level" element={<QuestionPage />} />
        <Route path="/:level/all" element={<AllQuestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
