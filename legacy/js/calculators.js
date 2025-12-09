// ===== 계산기 관련 함수들 =====

// 대출 계산기
function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const term = parseFloat(document.getElementById('loan-term').value);
    const type = document.getElementById('loan-type').value;
    
    // 입력값 검증
    if (!validateInput(amount, 1, 1000000)) {
        showError('대출 원금을 올바르게 입력해주세요. (1만원 ~ 10억원)');
        return;
    }
    
    if (!validateInput(rate, 0.1, 50)) {
        showError('연 이자율을 올바르게 입력해주세요. (0.1% ~ 50%)');
        return;
    }
    
    if (!validateInput(term, 1, 50)) {
        showError('상환 기간을 올바르게 입력해주세요. (1년 ~ 50년)');
        return;
    }
    
    const principal = amount * 10000; // 만원을 원 단위로 변환
    const monthlyRate = rate / 100 / 12; // 월 이자율
    const totalMonths = term * 12; // 총 상환 개월 수
    
    let result = '';
    
    if (type === 'equal-payment') {
        // 원리금균등상환
        const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                              (Math.pow(1 + monthlyRate, totalMonths) - 1);
        const totalPayment = monthlyPayment * totalMonths;
        const totalInterest = totalPayment - principal;
        
        result = `
            <div class="result-card">
                <h3>원리금균등상환 계산 결과</h3>
                <div class="result-grid">
                    <div class="result-item">
                        <div class="label">월 상환액</div>
                        <div class="value">${formatNumber(Math.round(monthlyPayment))}</div>
                        <div class="unit">원</div>
                    </div>
                    <div class="result-item">
                        <div class="label">총 상환액</div>
                        <div class="value">${formatNumber(Math.round(totalPayment))}</div>
                        <div class="unit">원</div>
                    </div>
                    <div class="result-item">
                        <div class="label">총 이자</div>
                        <div class="value">${formatNumber(Math.round(totalInterest))}</div>
                        <div class="unit">원</div>
                    </div>
                    <div class="result-item">
                        <div class="label">이자 비율</div>
                        <div class="value">${roundToDecimal(totalInterest / principal * 100, 2)}</div>
                        <div class="unit">%</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // 원금균등상환
        const monthlyPrincipal = principal / totalMonths;
        const firstMonthInterest = principal * monthlyRate;
        const firstMonthPayment = monthlyPrincipal + firstMonthInterest;
        const lastMonthInterest = monthlyPrincipal * monthlyRate;
        const lastMonthPayment = monthlyPrincipal + lastMonthInterest;
        const totalInterest = (principal * monthlyRate * (totalMonths + 1)) / 2;
        const totalPayment = principal + totalInterest;
        
        result = `
            <div class="result-card">
                <h3>원금균등상환 계산 결과</h3>
                <div class="result-grid">
                    <div class="result-item">
                        <div class="label">첫 달 상환액</div>
                        <div class="value">${formatNumber(Math.round(firstMonthPayment))}</div>
                        <div class="unit">원</div>
                    </div>
                    <div class="result-item">
                        <div class="label">마지막 달 상환액</div>
                        <div class="value">${formatNumber(Math.round(lastMonthPayment))}</div>
                        <div class="unit">원</div>
                    </div>
                    <div class="result-item">
                        <div class="label">총 상환액</div>
                        <div class="value">${formatNumber(Math.round(totalPayment))}</div>
                        <div class="unit">원</div>
                    </div>
                    <div class="result-item">
                        <div class="label">총 이자</div>
                        <div class="value">${formatNumber(Math.round(totalInterest))}</div>
                        <div class="unit">원</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    displayResult('loan-result', result);
}

// 연봉 계산기
function calculateSalary() {
    const grossSalary = parseFloat(document.getElementById('gross-salary').value);
    const workHours = parseFloat(document.getElementById('work-hours').value) || 40;
    
    // 입력값 검증
    if (!validateInput(grossSalary, 100, 50000)) {
        showError('세전 연봉을 올바르게 입력해주세요. (100만원 ~ 5억원)');
        return;
    }
    
    if (!validateInput(workHours, 1, 80)) {
        showError('주 근무시간을 올바르게 입력해주세요. (1시간 ~ 80시간)');
        return;
    }
    
    const grossAmount = grossSalary * 10000; // 만원을 원 단위로 변환
    
    // 간소화된 세금 계산 (실제 세금 계산은 매우 복잡)
    const taxRate = calculateTaxRate(grossAmount);
    const netAmount = grossAmount * (1 - taxRate);
    
    const grossMonthly = grossAmount / 12;
    const netMonthly = netAmount / 12;
    const grossDaily = grossAmount / 365;
    const netDaily = netAmount / 365;
    const grossHourly = grossAmount / (52 * workHours);
    const netHourly = netAmount / (52 * workHours);
    
    const result = `
        <div class="result-card">
            <h3>연봉 계산 결과</h3>
            <div class="result-grid">
                <div class="result-item">
                    <div class="label">세전 월급</div>
                    <div class="value">${formatNumber(Math.round(grossMonthly))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">세후 월급</div>
                    <div class="value">${formatNumber(Math.round(netMonthly))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">세전 일당</div>
                    <div class="value">${formatNumber(Math.round(grossDaily))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">세후 일당</div>
                    <div class="value">${formatNumber(Math.round(netDaily))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">세전 시급</div>
                    <div class="value">${formatNumber(Math.round(grossHourly))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">세후 시급</div>
                    <div class="value">${formatNumber(Math.round(netHourly))}</div>
                    <div class="unit">원</div>
                </div>
            </div>
        </div>
        <div class="result-card">
            <h3>세금 정보</h3>
            <div class="result-grid">
                <div class="result-item">
                    <div class="label">세금 비율</div>
                    <div class="value">${roundToDecimal(taxRate * 100, 2)}</div>
                    <div class="unit">%</div>
                </div>
                <div class="result-item">
                    <div class="label">연간 세금</div>
                    <div class="value">${formatNumber(Math.round(grossAmount - netAmount))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">세후 연봉</div>
                    <div class="value">${formatNumber(Math.round(netAmount))}</div>
                    <div class="unit">원</div>
                </div>
            </div>
        </div>
    `;
    
    displayResult('salary-result', result);
}

// BMI 계산기
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    // 입력값 검증
    if (!validateInput(height, 50, 250)) {
        showError('신장을 올바르게 입력해주세요. (50cm ~ 250cm)');
        return;
    }
    
    if (!validateInput(weight, 20, 300)) {
        showError('체중을 올바르게 입력해주세요. (20kg ~ 300kg)');
        return;
    }
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category = '';
    let categoryClass = '';
    let advice = '';
    
    if (bmi < 18.5) {
        category = '저체중';
        categoryClass = 'bmi-underweight';
        advice = '체중 증가를 위해 균형 잡힌 식단과 근력 운동을 권장합니다.';
    } else if (bmi < 25) {
        category = '정상 체중';
        categoryClass = 'bmi-normal';
        advice = '현재 체중을 유지하기 위해 규칙적인 운동과 균형 잡힌 식단을 유지하세요.';
    } else if (bmi < 30) {
        category = '과체중';
        categoryClass = 'bmi-overweight';
        advice = '체중 감량을 위해 유산소 운동과 칼로리 조절을 권장합니다.';
    } else {
        category = '비만';
        categoryClass = 'bmi-obese';
        advice = '건강한 체중 관리를 위해 전문가와 상담하시기 바랍니다.';
    }
    
    // 표준 체중 계산 (브로카 공식)
    const standardWeight = (height - 100) * 0.9;
    const weightDifference = weight - standardWeight;
    
    const result = `
        <div class="result-card ${categoryClass}">
            <h3>BMI 계산 결과</h3>
            <div class="result-grid">
                <div class="result-item">
                    <div class="label">BMI 지수</div>
                    <div class="value">${roundToDecimal(bmi, 1)}</div>
                    <div class="unit">kg/m²</div>
                </div>
                <div class="result-item">
                    <div class="label">체중 상태</div>
                    <div class="value">${category}</div>
                    <div class="unit"></div>
                </div>
                <div class="result-item">
                    <div class="label">표준 체중</div>
                    <div class="value">${roundToDecimal(standardWeight, 1)}</div>
                    <div class="unit">kg</div>
                </div>
                <div class="result-item">
                    <div class="label">체중 차이</div>
                    <div class="value">${weightDifference > 0 ? '+' : ''}${roundToDecimal(weightDifference, 1)}</div>
                    <div class="unit">kg</div>
                </div>
            </div>
            <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.7); border-radius: 8px;">
                <strong>건강 조언:</strong> ${advice}
            </div>
        </div>
    `;
    
    displayResult('bmi-result', result);
}

// 할인 계산기
function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const discountRate = parseFloat(document.getElementById('discount-rate').value);
    
    // 입력값 검증
    if (!validateInput(originalPrice, 1, 10000000)) {
        showError('원래 가격을 올바르게 입력해주세요.');
        return;
    }
    
    if (!validateInput(discountRate, 0, 100)) {
        showError('할인율을 올바르게 입력해주세요. (0% ~ 100%)');
        return;
    }
    
    const discountAmount = originalPrice * (discountRate / 100);
    const finalPrice = originalPrice - discountAmount;
    const savings = discountAmount;
    
    const result = `
        <div class="result-card">
            <h3>할인 계산 결과</h3>
            <div class="result-grid">
                <div class="result-item">
                    <div class="label">원래 가격</div>
                    <div class="value">${formatNumber(originalPrice)}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">할인 금액</div>
                    <div class="value">${formatNumber(Math.round(discountAmount))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">최종 가격</div>
                    <div class="value">${formatNumber(Math.round(finalPrice))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">절약 금액</div>
                    <div class="value">${formatNumber(Math.round(savings))}</div>
                    <div class="unit">원</div>
                </div>
            </div>
        </div>
    `;
    
    displayResult('discount-result', result);
}

// 평수 계산기
function calculateArea() {
    const area = parseFloat(document.getElementById('area-input').value);
    const unit = document.getElementById('area-unit').value;
    
    // 입력값 검증
    if (!validateInput(area, 0.1, 10000)) {
        showError('면적을 올바르게 입력해주세요.');
        return;
    }
    
    let sqmArea, pyeongArea;
    
    if (unit === 'sqm') {
        sqmArea = area;
        pyeongArea = area / 3.3058;
    } else {
        pyeongArea = area;
        sqmArea = area * 3.3058;
    }
    
    const result = `
        <div class="result-card">
            <h3>평수 변환 결과</h3>
            <div class="result-grid">
                <div class="result-item">
                    <div class="label">평방미터</div>
                    <div class="value">${roundToDecimal(sqmArea, 2)}</div>
                    <div class="unit">m²</div>
                </div>
                <div class="result-item">
                    <div class="label">평</div>
                    <div class="value">${roundToDecimal(pyeongArea, 2)}</div>
                    <div class="unit">평</div>
                </div>
            </div>
        </div>
    `;
    
    displayResult('area-result', result);
}

// 적금 계산기
function calculateSavings() {
    const monthlyAmount = parseFloat(document.getElementById('monthly-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const period = parseFloat(document.getElementById('savings-period').value);
    
    // 입력값 검증
    if (!validateInput(monthlyAmount, 1, 1000)) {
        showError('월 적금액을 올바르게 입력해주세요. (1만원 ~ 1000만원)');
        return;
    }
    
    if (!validateInput(interestRate, 0.1, 20)) {
        showError('연 이자율을 올바르게 입력해주세요. (0.1% ~ 20%)');
        return;
    }
    
    if (!validateInput(period, 1, 60)) {
        showError('적금 기간을 올바르게 입력해주세요. (1개월 ~ 60개월)');
        return;
    }
    
    const monthlyAmountWon = monthlyAmount * 10000;
    const monthlyRate = interestRate / 100 / 12;
    
    // 적금 원리합계 계산
    const totalPrincipal = monthlyAmountWon * period;
    const totalInterest = monthlyAmountWon * ((Math.pow(1 + monthlyRate, period) - 1) / monthlyRate - period);
    const totalAmount = totalPrincipal + totalInterest;
    
    const result = `
        <div class="result-card">
            <h3>적금 계산 결과</h3>
            <div class="result-grid">
                <div class="result-item">
                    <div class="label">납입 원금</div>
                    <div class="value">${formatNumber(totalPrincipal)}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">이자 수익</div>
                    <div class="value">${formatNumber(Math.round(totalInterest))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">만기 수령액</div>
                    <div class="value">${formatNumber(Math.round(totalAmount))}</div>
                    <div class="unit">원</div>
                </div>
                <div class="result-item">
                    <div class="label">수익률</div>
                    <div class="value">${roundToDecimal(totalInterest / totalPrincipal * 100, 2)}</div>
                    <div class="unit">%</div>
                </div>
            </div>
        </div>
    `;
    
    displayResult('savings-result', result);
}

// 환율 계산기 (실시간 환율 API 사용)
function calculateExchange() {
    const amount = parseFloat(document.getElementById('exchange-amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    // 입력값 검증
    if (!validateInput(amount, 0.01, 1000000)) {
        showError('환전할 금액을 올바르게 입력해주세요.');
        return;
    }
    
    // 간단한 환율 계산 (실제 환율 API 연동 필요)
    const exchangeRates = {
        'KRW': { 'USD': 0.00075, 'EUR': 0.00068, 'JPY': 0.11, 'CNY': 0.0053 },
        'USD': { 'KRW': 1330, 'EUR': 0.91, 'JPY': 147, 'CNY': 7.1 },
        'EUR': { 'KRW': 1460, 'USD': 1.10, 'JPY': 161, 'CNY': 7.8 },
        'JPY': { 'KRW': 9.05, 'USD': 0.0068, 'EUR': 0.0062, 'CNY': 0.048 },
        'CNY': { 'KRW': 188, 'USD': 0.14, 'EUR': 0.13, 'JPY': 20.7 }
    };
    
    if (fromCurrency === toCurrency) {
        showError('같은 통화는 환전할 수 없습니다.');
        return;
    }
    
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;
    
    const result = `
        <div class="result-card">
            <h3>환율 계산 결과</h3>
            <div class="result-grid">
                <div class="result-item">
                    <div class="label">환전 전</div>
                    <div class="value">${formatNumber(amount)}</div>
                    <div class="unit">${fromCurrency}</div>
                </div>
                <div class="result-item">
                    <div class="label">환율</div>
                    <div class="value">${rate}</div>
                    <div class="unit">${toCurrency}/${fromCurrency}</div>
                </div>
                <div class="result-item">
                    <div class="label">환전 후</div>
                    <div class="value">${formatNumber(roundToDecimal(convertedAmount, 2))}</div>
                    <div class="unit">${toCurrency}</div>
                </div>
            </div>
            <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.7); border-radius: 8px; font-size: 0.9rem; color: #666;">
                * 환율은 실시간으로 변동되므로 실제 환전 시 차이가 있을 수 있습니다.
            </div>
        </div>
    `;
    
    displayResult('exchange-result', result);
}

// 세금 계산 함수 (간소화)
function calculateTaxRate(income) {
    if (income <= 14000000) return 0.06;
    if (income <= 50000000) return 0.15;
    if (income <= 88000000) return 0.24;
    if (income <= 150000000) return 0.35;
    if (income <= 300000000) return 0.38;
    if (income <= 500000000) return 0.40;
    return 0.42;
}

// 결과 표시 함수
function displayResult(resultId, resultHtml) {
    const resultElement = document.getElementById(resultId);
    if (resultElement) {
        resultElement.innerHTML = resultHtml;
        resultElement.classList.add('show');
        
        // 결과 영역으로 스크롤
        resultElement.scrollIntoView({ behavior: 'smooth' });
        
        showSuccess('계산이 완료되었습니다!');
    }
}

// 계산 결과 공유 기능
function shareResult(resultId) {
    const resultElement = document.getElementById(resultId);
    if (!resultElement) return;
    
    const resultText = resultElement.innerText;
    
    if (navigator.share) {
        navigator.share({
            title: '계산 결과',
            text: resultText,
            url: window.location.href
        }).then(() => {
            showSuccess('결과가 공유되었습니다!');
        }).catch(err => {
            console.error('공유 실패:', err);
            copyToClipboard(resultText);
        });
    } else {
        copyToClipboard(resultText);
    }
}

// 클립보드 복사 기능
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showSuccess('결과가 클립보드에 복사되었습니다!');
    }).catch(err => {
        console.error('클립보드 복사 실패:', err);
        showError('클립보드 복사에 실패했습니다.');
    });
}

// 계산 기록 저장 기능
function saveCalculation(type, data, result) {
    try {
        const calculations = JSON.parse(localStorage.getItem('calculations') || '[]');
        const calculation = {
            type: type,
            data: data,
            result: result,
            timestamp: Date.now()
        };
        
        calculations.unshift(calculation);
        
        // 최대 50개까지만 저장
        if (calculations.length > 50) {
            calculations.pop();
        }
        
        localStorage.setItem('calculations', JSON.stringify(calculations));
    } catch (error) {
        console.error('계산 기록 저장 오류:', error);
    }
}

// 계산 기록 불러오기
function loadCalculationHistory() {
    try {
        const calculations = JSON.parse(localStorage.getItem('calculations') || '[]');
        return calculations;
    } catch (error) {
        console.error('계산 기록 불러오기 오류:', error);
        return [];
    }
} 