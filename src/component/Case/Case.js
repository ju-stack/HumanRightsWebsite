import SmallCase from './SmallCase.js';

function Case() {
    return(
      <div>
        <div>
            교권 침해 사례
        </div>
        <SmallCase alt="출처:동아일보" imgName="seoyi-cho.jpg" title="교사 정보 유출 사례" story="서울의 X이초등학교에서 수업 중 한 학생이 다른 학생의 가방을 연필로 찌르자, 이 학생이 그만하라며 연필을 빼앗으려다 이마에 상처가 생긴 사건이 발생했다. 사건 당일 학부모가 여러 번 교사에게 휴대폰으로 전화했고, 교사은 자신이 알려주지 않은 휴대폰 번호를 해당 학부모가 알고 있음에 두려움을 느겼다."></SmallCase>
        <SmallCase alt="출처:중앙일보" imgName="eleT.png" title="담임 교사 폭행 사례" story="서울 한 공립초등학교에서 6학년 담임을 맡은 교사는 지난달 학생들이 보는 앞에서 자신의 반 제자인 남학생에게 폭행당해 전치 3주 진단을 받았다."></SmallCase>
      </div>
    );
  }

export default Case;