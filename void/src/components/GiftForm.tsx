import React, { useState } from 'react';
import { GiftFormData } from '../types/gift';

interface GiftFormProps {
  onSubmit: (formData: GiftFormData) => void;
}

const GiftForm: React.FC<GiftFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<GiftFormData>({
    gender: 'female',
    age: 25,
    personality: '',
    occasionType: '',
    minBudget: 30000,
    maxBudget: 100000,
    category: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'minBudget' || name === 'maxBudget' 
        ? Number(value) 
        : value
    }));
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-4">
          선물 받을 분의 정보를 입력해주세요
        </h2>
        <p className="text-gray-600 text-lg">
          자세한 정보를 제공할수록 더 정확한 추천을 받을 수 있어요! ✨
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 성별 */}
        <div>
          <label className="form-label">
            <span className="text-2xl">👤</span>
            성별
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className={`radio-option ${formData.gender === 'female' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <span className="text-xl">👩</span>
              <span>여성</span>
            </label>
            <label className={`radio-option ${formData.gender === 'male' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <span className="text-xl">👨</span>
              <span>남성</span>
            </label>
          </div>
        </div>

        {/* 나이 */}
        <div>
          <label className="form-label">
            <span className="text-2xl">🎂</span>
            나이
          </label>
          <select
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="input-field"
            required
          >
            <option value="">나이를 선택해주세요</option>
            <optgroup label="👶 청소년 (13-19세)">
              <option value="15">15세</option>
              <option value="16">16세</option>
              <option value="17">17세</option>
              <option value="18">18세</option>
              <option value="19">19세</option>
            </optgroup>
            <optgroup label="🧑‍💼 청년층 (20-30대)">
              <option value="20">20세</option>
              <option value="21">21세</option>
              <option value="22">22세</option>
              <option value="23">23세</option>
              <option value="24">24세</option>
              <option value="25">25세</option>
              <option value="26">26세</option>
              <option value="27">27세</option>
              <option value="28">28세</option>
              <option value="29">29세</option>
              <option value="30">30세</option>
              <option value="31">31세</option>
              <option value="32">32세</option>
              <option value="33">33세</option>
              <option value="34">34세</option>
              <option value="35">35세</option>
              <option value="36">36세</option>
              <option value="37">37세</option>
              <option value="38">38세</option>
              <option value="39">39세</option>
            </optgroup>
            <optgroup label="👨‍🦳 중장년층 (40-60대)">
              <option value="40">40세</option>
              <option value="45">45세</option>
              <option value="50">50세</option>
              <option value="55">55세</option>
              <option value="60">60세</option>
              <option value="65">65세</option>
            </optgroup>
          </select>
        </div>

        {/* 성격/MBTI */}
        <div>
          <label className="form-label">
            <span className="text-2xl">🎭</span>
            성격 특성 또는 MBTI
          </label>
          <input
            type="text"
            name="personality"
            value={formData.personality}
            onChange={handleInputChange}
            placeholder="예: ENFP, 활발한, 조용한, 패션에 관심이 많은, 독서를 좋아하는..."
            className="input-field"
            required
          />
        </div>

        {/* 기념일 종류 */}
        <div>
          <label className="form-label">
            <span className="text-2xl">🎉</span>
            기념일 종류
          </label>
          <select
            name="occasionType"
            value={formData.occasionType}
            onChange={handleInputChange}
            className="input-field"
            required
          >
            <option value="">기념일을 선택해주세요</option>
            <optgroup label="🎂 생일 & 개인 기념일">
              <option value="생일">생일</option>
              <option value="성인식">성인식</option>
              <option value="졸업">졸업</option>
              <option value="취업">취업 축하</option>
            </optgroup>
            <optgroup label="💑 커플 기념일">
              <option value="사귄지 100일">사귄지 100일</option>
              <option value="사귄지 1년">사귄지 1년</option>
              <option value="사귄지 2년">사귄지 2년</option>
              <option value="사귄지 3년 이상">사귄지 3년 이상</option>
              <option value="첫 만남 기념일">첫 만남 기념일</option>
            </optgroup>
            <optgroup label="💒 부부 기념일">
              <option value="결혼기념일 1년">결혼기념일 1년</option>
              <option value="결혼기념일 5년">결혼기념일 5년</option>
              <option value="결혼기념일 10년">결혼기념일 10년</option>
              <option value="결혼기념일 20년 이상">결혼기념일 20년 이상</option>
              <option value="프러포즈 기념일">프러포즈 기념일</option>
            </optgroup>
            <optgroup label="🎁 특별한 날">
              <option value="밸런타인데이">밸런타인데이</option>
              <option value="화이트데이">화이트데이</option>
              <option value="크리스마스">크리스마스</option>
              <option value="어버이날">어버이날</option>
              <option value="스승의날">스승의날</option>
              <option value="기타">기타</option>
            </optgroup>
          </select>
        </div>

        {/* 예산 범위 */}
        <div>
          <label className="form-label">
            <span className="text-2xl">💰</span>
            예산 범위
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 mb-2">최소 금액</div>
              <select
                name="minBudget"
                value={formData.minBudget}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="10000">1만원</option>
                <option value="30000">3만원</option>
                <option value="50000">5만원</option>
                <option value="100000">10만원</option>
                <option value="200000">20만원</option>
                <option value="300000">30만원</option>
                <option value="500000">50만원</option>
              </select>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">최대 금액</div>
              <select
                name="maxBudget"
                value={formData.maxBudget}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="30000">3만원</option>
                <option value="50000">5만원</option>
                <option value="100000">10만원</option>
                <option value="200000">20만원</option>
                <option value="300000">30만원</option>
                <option value="500000">50만원</option>
                <option value="1000000">100만원</option>
                <option value="2000000">200만원 이상</option>
              </select>
            </div>
          </div>
        </div>

        {/* 카테고리 */}
        <div>
          <label className="form-label">
            <span className="text-2xl">🛍️</span>
            선호 카테고리 (선택사항)
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="">전체 카테고리</option>
            <optgroup label="👗 패션 & 뷰티">
              <option value="패션">의류 & 패션</option>
              <option value="뷰티">뷰티 & 화장품</option>
              <option value="향수">향수</option>
              <option value="액세서리">액세서리 & 주얼리</option>
            </optgroup>
            <optgroup label="📱 디지털 & 라이프스타일">
              <option value="IT기기">IT기기 & 전자제품</option>
              <option value="스마트워치">스마트워치 & 웨어러블</option>
              <option value="가전제품">생활가전</option>
            </optgroup>
            <optgroup label="🎨 취미 & 문화">
              <option value="도서">도서 & 문구</option>
              <option value="음악">음악 & 악기</option>
              <option value="스포츠">스포츠 & 아웃도어</option>
              <option value="여행">여행 & 레저</option>
            </optgroup>
            <optgroup label="🍰 음식 & 체험">
              <option value="음식">음식 & 디저트</option>
              <option value="체험">체험 & 클래스</option>
              <option value="꽃">꽃 & 화분</option>
            </optgroup>
            <optgroup label="🏠 생활 & 인테리어">
              <option value="홈데코">홈데코 & 인테리어</option>
              <option value="생활용품">생활용품</option>
              <option value="기타">기타</option>
            </optgroup>
          </select>
        </div>

        {/* 추가 정보 */}
        <div>
          <label className="form-label">
            <span className="text-2xl">💬</span>
            추가 정보 (선택사항)
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            placeholder="특별히 좋아하는 것이나 싫어하는 것, 관심사, 취미 등 추가로 알려주고 싶은 정보가 있다면 자유롭게 작성해주세요..."
            rows={4}
            className="input-field resize-none"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full text-lg py-4 font-semibold"
        >
          <span className="text-xl mr-2">🎁</span>
          AI 선물 추천받기
          <span className="text-xl ml-2">✨</span>
        </button>
      </form>
    </div>
  );
};

export default GiftForm; 