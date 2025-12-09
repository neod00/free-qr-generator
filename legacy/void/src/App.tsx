import React, { useState } from 'react';
import GiftForm from './components/GiftForm';
import GiftRecommendations from './components/GiftRecommendations';
import LoadingSpinner from './components/LoadingSpinner';
import { GiftFormData, GiftRecommendation } from './types/gift';
import { getGiftRecommendations, getDummyRecommendations } from './services/gptService';

function App() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<GiftRecommendation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentFormData, setCurrentFormData] = useState<GiftFormData | null>(null);

  const handleFormSubmit = async (formData: GiftFormData) => {
    setLoading(true);
    setError(null);
    setCurrentFormData(formData);
    
    try {
      // 개발 환경에서는 더미 데이터 사용, 프로덕션에서는 실제 GPT API 사용
      const isDevelopment = !process.env.REACT_APP_OPENAI_API_KEY;
      
      const response = isDevelopment 
        ? await getDummyRecommendations(formData)
        : await getGiftRecommendations(formData);
      
      if (response.success) {
        setRecommendations(response.recommendations);
      } else {
        setError(response.error || '추천을 받아오는 중 오류가 발생했습니다.');
      }
    } catch (err) {
      setError('추천을 받아오는 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = async () => {
    if (!currentFormData) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const isDevelopment = !process.env.REACT_APP_OPENAI_API_KEY;
      
      const response = isDevelopment 
        ? await getDummyRecommendations(currentFormData)
        : await getGiftRecommendations(currentFormData);
      
      if (response.success) {
        setRecommendations(response.recommendations);
      } else {
        setError(response.error || '추천을 받아오는 중 오류가 발생했습니다.');
      }
    } catch (err) {
      setError('추천을 받아오는 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToForm = () => {
    setRecommendations([]);
    setError(null);
    setCurrentFormData(null);
  };

  return (
    <div className="min-h-screen instagram-gradient relative">
      {/* 플로팅 배경 요소들 */}
      <div className="floating-bg">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              ✨ 선물지니
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-white mb-2">
              GiftGenie
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
            AI가 추천하는 특별한 선물을 찾아보세요
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white/80 leading-relaxed">
              💑 커플 • 👨‍👩‍👧‍👦 부부 • 👶 청소년 • 🧑‍💼 20-30대 • 👨‍🦳 40-60대 중장년층
              <br />
              <span className="text-base">모든 연령대와 관계를 위한 맞춤형 선물 추천 서비스</span>
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {!loading && recommendations.length === 0 && (
            <div className="fade-in">
              <GiftForm onSubmit={handleFormSubmit} />
            </div>
          )}
          
          {loading && (
            <div className="fade-in">
              <LoadingSpinner />
            </div>
          )}
          
          {error && (
            <div className="card bg-red-50/20 border-red-200/30 text-red-100 text-center mb-6 fade-in">
              <div className="text-2xl mb-4">😞</div>
              <p className="mb-4 text-lg">{error}</p>
              <button
                onClick={handleBackToForm}
                className="btn-primary"
              >
                🔄 다시 시도하기
              </button>
            </div>
          )}
          
          {recommendations.length > 0 && (
            <div className="fade-in">
              <GiftRecommendations 
                recommendations={recommendations} 
                onRegenerate={handleRegenerate}
                onBackToForm={handleBackToForm}
              />
            </div>
          )}
        </div>
        
        <footer className="text-center mt-20 text-white/70 fade-in">
          <div className="glass-card max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl">✨</span>
              <h3 className="text-xl font-semibold gradient-text">선물지니 GiftGenie</h3>
              <span className="text-3xl">✨</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">🎯</span>
                <span>AI 맞춤 추천</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">💝</span>
                <span>모든 연령대</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">🛍️</span>
                <span>쿠팡 연동</span>
              </div>
            </div>
          </div>
          <p className="mb-2">© 2024 선물지니 GiftGenie. AI 기반 맞춤형 선물 추천 서비스</p>
          <p className="text-sm opacity-70">
            쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App; 