import { readFileSync, writeFileSync } from 'fs';

const html = readFileSync('petbulance.html', 'utf-8');

const newSection = `<div id="design" class="project-section">
                        <h2>스크린 디자인</h2>
                        <p>320개 화면을 1인이 설계한 Petbulance의 주요 스크린입니다. 각 섹션은 사용자 플로우 순서로 구성했습니다.</p>

                        <!-- 장표 슬라이더 -->
                        <div class="jangpyo-slider-wrap">
                            <div class="jangpyo-slider">
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_1.png" alt="장표 1" width="800" height="480" loading="eager"><figcaption>장표 1</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_2.png" alt="장표 2" width="800" height="480" loading="lazy"><figcaption>장표 2</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_3.png" alt="장표 3" width="800" height="480" loading="lazy"><figcaption>장표 3</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_4.png" alt="장표 4" width="800" height="480" loading="lazy"><figcaption>장표 4</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_5.png" alt="장표 5" width="800" height="480" loading="lazy"><figcaption>장표 5</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_6.png" alt="장표 6" width="800" height="480" loading="lazy"><figcaption>장표 6</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_7.png" alt="장표 7" width="800" height="480" loading="lazy"><figcaption>장표 7</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_8.png" alt="장표 8" width="800" height="480" loading="lazy"><figcaption>장표 8</figcaption></figure>
                                <figure><img src="petbulance/jangpyo/optimized/jangpyo_9.png" alt="장표 9" width="800" height="480" loading="lazy"><figcaption>장표 9</figcaption></figure>
                            </div>
                        </div>

                        <!-- 01 인증 / 온보딩 -->
                        <div class="sd-group">
                            <div class="sd-group-header">
                                <span class="sd-group-num">01</span>
                                <span class="sd-group-title">인증 / 온보딩</span>
                            </div>
                            <div class="sd-group-body">
                                <div class="sd-main">
                                    <img src="petbulance/screendesign/optimized/01_Auth_Login.png" alt="로그인 화면" width="390" height="844" loading="lazy" class="sd-img">
                                    <div class="sd-desc">
                                        <h4>로그인</h4>
                                        <p>첫 진입 시 불필요한 회원가입 장벽을 없애고 소셜 로그인 단일 플로우로 온보딩 이탈을 최소화했습니다. 응급 상황에서 빠른 접근이 핵심이기 때문에 인증 단계를 1-tap으로 설계했습니다.</p>
                                    </div>
                                </div>
                                <div class="sd-subs">
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/01_Auth_Welcome1.png" alt="웰컴 1" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>웰컴 1</h4><p>서비스 핵심 가치를 3단계 온보딩 카드로 전달합니다. 특수동물 응급이라는 포지셔닝을 첫 화면에서 명확히 인지시킵니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/01_Auth_Welcome2.png" alt="웰컴 2" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>웰컴 2</h4><p>24시 응급 병원 탐색 기능을 시각적으로 예고합니다. 진입 전 기대값을 설정해 이탈 없이 다음 단계로 유도합니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/01_Auth_Welcome3.png" alt="웰컴 3" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>웰컴 3</h4><p>커뮤니티 기능을 마지막 온보딩 카드에 배치해 단순 병원 검색을 넘어선 플랫폼임을 인지시킵니다.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 02 온보딩 -->
                        <div class="sd-group">
                            <div class="sd-group-header">
                                <span class="sd-group-num">02</span>
                                <span class="sd-group-title">온보딩</span>
                            </div>
                            <div class="sd-group-body">
                                <div class="sd-main">
                                    <img src="petbulance/screendesign/optimized/02_Onboarding 1.png" alt="온보딩 1" width="390" height="844" loading="lazy" class="sd-img">
                                    <div class="sd-desc">
                                        <h4>온보딩 — 반려동물 등록</h4>
                                        <p>반려동물 종류와 기본 정보를 초기에 수집해 이후 병원 추천 및 커뮤니티 필터링의 기반 데이터로 활용합니다. 필수 입력 항목을 최소화해 온보딩 완료율을 높이는 방향으로 설계했습니다.</p>
                                    </div>
                                </div>
                                <div class="sd-subs">
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/02_Onboarding 2.png" alt="온보딩 2" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>온보딩 — 위치 권한</h4><p>위치 기반 병원 탐색의 핵심 권한을 요청합니다. 권한 요청 전 why-ask 문구를 배치해 사용자 동의율을 높였습니다.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 03 홈 / 병원 찾기 -->
                        <div class="sd-group">
                            <div class="sd-group-header">
                                <span class="sd-group-num">03</span>
                                <span class="sd-group-title">홈 / 병원 찾기</span>
                            </div>
                            <div class="sd-group-body">
                                <div class="sd-main">
                                    <img src="petbulance/screendesign/optimized/03_Hospital_Main.png" alt="병원 메인" width="390" height="844" loading="lazy" class="sd-img">
                                    <div class="sd-desc">
                                        <h4>병원 메인</h4>
                                        <p>응급 상황에서 가장 빠르게 병원을 찾을 수 있도록 지도 기반 탐색을 전면에 배치했습니다. 현재 위치 기준 거리순 정렬과 24시 운영 필터를 1depth에서 제공해 긴급 상황의 인지 부하를 최소화했습니다.</p>
                                    </div>
                                </div>
                                <div class="sd-subs">
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/03_Home.png" alt="홈 화면" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>홈</h4><p>응급/일반 병원 탐색, 커뮤니티 진입을 단일 화면에서 제공합니다. 탭 구조 없이 스크롤 기반으로 핵심 기능에 빠르게 접근하도록 설계했습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/03_Hospital_Main-1.png" alt="병원 목록" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>병원 목록</h4><p>지도와 리스트를 동시에 제공하는 스플릿 뷰로 공간 맥락과 상세 정보를 함께 확인할 수 있습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/03_Hospital_Main_Bottomsheet.png" alt="병원 바텀시트" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>병원 바텀시트</h4><p>지도 마커 선택 시 바텀시트로 병원 요약 정보를 즉시 노출합니다. 전체 화면 전환 없이 핵심 정보를 확인하고 전화 연결까지 원스텝으로 처리합니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/03_Hospital_Main_Bottomsheet-1.png" alt="바텀시트 확장" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>바텀시트 확장</h4><p>바텀시트를 위로 당기면 운영 시간, 진료 동물 종류 등 상세 정보로 확장됩니다. Progressive disclosure 패턴으로 정보 밀도와 단순함을 동시에 확보했습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/03_Hospital_Search.png" alt="병원 검색" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>병원 검색</h4><p>병원명, 지역, 진료 동물 종류로 검색이 가능합니다. 검색 히스토리와 최근 본 병원을 상단에 배치해 재방문 사용자의 탐색 시간을 단축했습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/03_Hospital_Detail_Main.png" alt="병원 상세" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>병원 상세</h4><p>전화, 길찾기, 리뷰 확인을 단일 화면에서 처리합니다. 응급 상황의 CTA(전화연결)를 상단 고정으로 배치해 핵심 전환을 최우선으로 설계했습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/03_Hospital_Detail_Review.png" alt="병원 리뷰" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>병원 상세 — 리뷰</h4><p>실제 방문자 리뷰를 병원 상세 내 탭으로 제공합니다. 특수동물 진료 경험 기반의 신뢰 지표를 정성적 리뷰로 보완했습니다.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 04 리뷰 -->
                        <div class="sd-group">
                            <div class="sd-group-header">
                                <span class="sd-group-num">04</span>
                                <span class="sd-group-title">리뷰</span>
                            </div>
                            <div class="sd-group-body">
                                <div class="sd-main">
                                    <img src="petbulance/screendesign/optimized/04_Review_Main.png" alt="리뷰 메인" width="390" height="844" loading="lazy" class="sd-img">
                                    <div class="sd-desc">
                                        <h4>리뷰 메인</h4>
                                        <p>특수동물 병원 정보 신뢰도의 핵심인 실사용자 리뷰를 별도 섹션으로 강조했습니다. 동물 종류별 필터로 내 반려동물에 맞는 리뷰를 빠르게 탐색할 수 있도록 설계했습니다.</p>
                                    </div>
                                </div>
                                <div class="sd-subs">
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/04_Review_Main_Bottomsheet.png" alt="리뷰 필터" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>리뷰 필터</h4><p>바텀시트로 리뷰 정렬 및 필터 옵션을 제공합니다. 전체 화면 전환 없이 필터를 적용해 탐색 흐름을 유지합니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/04_Review_Detail.png" alt="리뷰 상세" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>리뷰 상세</h4><p>리뷰 전문과 사진을 확인할 수 있는 상세 뷰입니다. 진료 동물 종류, 방문 목적, 항목별 평점을 구조화해 정보 신뢰도를 높였습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/04_Review_Add1.png" alt="리뷰 작성 1" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>리뷰 작성 1</h4><p>병원 선택 → 별점 → 항목별 평가 → 텍스트 순서로 리뷰 작성 플로우를 설계했습니다. 단계별 진행으로 완료율을 높였습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/04_Review_Add2.png" alt="리뷰 작성 2" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>리뷰 작성 2</h4><p>항목별 평점을 칩 선택 방식으로 입력합니다. 텍스트 입력 부담을 줄여 리뷰 제출 완료율을 높이는 UX 전략입니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/04_Review_Add3.png" alt="리뷰 작성 3" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>리뷰 작성 3</h4><p>사진 첨부와 텍스트 입력 단계입니다. 선택 항목으로 처리해 텍스트 없이도 리뷰 제출이 가능하도록 설계했습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/04_Review_Add4.png" alt="리뷰 작성 완료" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>리뷰 작성 완료</h4><p>작성 완료 후 즉각적인 피드백을 제공합니다. 완료 애니메이션으로 기여 행동에 대한 긍정적 강화를 설계했습니다.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 05 커뮤니티 -->
                        <div class="sd-group">
                            <div class="sd-group-header">
                                <span class="sd-group-num">05</span>
                                <span class="sd-group-title">커뮤니티</span>
                            </div>
                            <div class="sd-group-body">
                                <div class="sd-main">
                                    <img src="petbulance/screendesign/optimized/05_Community_Main.png" alt="커뮤니티 메인" width="390" height="844" loading="lazy" class="sd-img">
                                    <div class="sd-desc">
                                        <h4>커뮤니티 메인</h4>
                                        <p>특수동물 보호자들의 정보 공유 공간으로, 병원 탐색 외 체류 시간을 늘리는 핵심 기능입니다. 카테고리 탭과 인기순 정렬로 콘텐츠 탐색 진입 장벽을 낮췄습니다.</p>
                                    </div>
                                </div>
                                <div class="sd-subs">
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/05_Community_Main-1.png" alt="커뮤니티 카테고리" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>커뮤니티 — 카테고리</h4><p>동물 종류별 카테고리 필터를 제공합니다. 내 반려동물 관련 게시물만 빠르게 탐색할 수 있어 콘텐츠 관련성을 높였습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/05_Community_Main-2.png" alt="커뮤니티 리스트" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>커뮤니티 — 리스트</h4><p>제목, 썸네일, 댓글/좋아요 수를 카드 형태로 표시합니다. 정보 스캔 속도를 높이는 카드 레이아웃으로 스크롤 탐색을 최적화했습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/05_Community_Post_Detail.png" alt="게시물 상세" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>게시물 상세</h4><p>본문과 댓글을 단일 스크롤로 제공합니다. 댓글 입력창을 하단 고정으로 배치해 읽기와 참여를 동시에 유도했습니다.</p></div>
                                    </div>
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/05_Community_AddPost.png" alt="글쓰기" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>글쓰기</h4><p>카테고리 선택, 제목, 본문, 사진 첨부를 단일 화면에서 처리합니다. 최소한의 입력 필드로 게시물 작성 완료율을 높이는 방향으로 설계했습니다.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 06 마이페이지 -->
                        <div class="sd-group">
                            <div class="sd-group-header">
                                <span class="sd-group-num">06</span>
                                <span class="sd-group-title">마이페이지</span>
                            </div>
                            <div class="sd-group-body">
                                <div class="sd-main">
                                    <img src="petbulance/screendesign/optimized/06_MyPage_Member.png" alt="마이페이지 회원" width="390" height="844" loading="lazy" class="sd-img">
                                    <div class="sd-desc">
                                        <h4>마이페이지 — 회원</h4>
                                        <p>반려동물 프로필, 내 리뷰, 즐겨찾기 병원을 한 곳에서 관리합니다. 재방문 사용자의 핵심 니즈인 저장된 병원 빠른 접근을 상단에 배치했습니다.</p>
                                    </div>
                                </div>
                                <div class="sd-subs">
                                    <div class="sd-sub-item">
                                        <img src="petbulance/screendesign/optimized/06_MyPage_Visitor.png" alt="마이페이지 비회원" width="390" height="844" loading="lazy" class="sd-img">
                                        <div class="sd-desc"><h4>마이페이지 — 비회원</h4><p>비로그인 상태에서도 앱의 주요 기능을 미리 보여주며 로그인을 유도합니다. 강제 로그인 대신 가치 제안 후 유도하는 방식으로 전환율을 높이는 설계입니다.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Lightbox -->
                    <div id="sd-lightbox" class="sd-lightbox" role="dialog" aria-modal="true">
                        <button class="sd-lightbox-close" aria-label="닫기">✕</button>
                        <button class="sd-lightbox-prev" aria-label="이전">‹</button>
                        <button class="sd-lightbox-next" aria-label="다음">›</button>
                        <img id="sd-lightbox-img" src="" alt="">
                    </div>`;

// 150번째 줄 기준으로 #design 섹션 찾아서 교체
const lines = html.split('\n');
const startIdx = lines.findIndex(l => l.includes('id="design"'));
if (startIdx === -1) {
  console.error('❌ id="design" 를 찾지 못했습니다.');
  process.exit(1);
}

// 닫는 </div> 찾기 (depth 카운팅)
let depth = 0;
let endIdx = startIdx;
for (let i = startIdx; i < lines.length; i++) {
  const opens = (lines[i].match(/<div/g) || []).length;
  const closes = (lines[i].match(/<\/div>/g) || []).length;
  depth += opens - closes;
  if (i > startIdx && depth <= 0) {
    endIdx = i;
    break;
  }
}

const before = lines.slice(0, startIdx).join('\n');
const after = lines.slice(endIdx + 1).join('\n');
const result = before + '\n' + newSection + '\n' + after;

writeFileSync('petbulance.html', result, 'utf-8');
console.log(`✅ 완료: ${startIdx}번째 줄 ~ ${endIdx}번째 줄 교체`);
