import Protect from './SmallProtect.js';

function Respect() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>
          교권 보호 방법
        </h1>
        <Protect title="늦은 시간, 시급하지 않거나, 학교생활과 무관한 연락은 하지 않기" story="선생님도 퇴근 후에 쉬어야겠죠? 특별한 경우가 아니라면 선생님 개인 시간 역시 소중하니, 앞으로 배려해 주세요."></Protect>
        <Protect title="SNS, 인터넷 등을 통한 선생님의 개인 정보, 사생활 침해하지 않기" story="선생님의 연락처, 이름, 사진은 공공재가 아닙니다. 선생님의 개인 정보, 사생활 역시 소중하니 앞으로 존중해 주세요."></Protect>
        <Protect title="성적인 오해를 줄 수 있는 개인적인 행동하지 않기" story="선생님도 남녀와 무관하게 성적 굴욕감, 수치심, 혐오감을 느끼는 개인입니다. 육체적, 언어적, 시각적으로 선생님을 대상으로 한 성적 침해 행위 예방 역시 꼭 필요해요."></Protect>
        <Protect title="근거 없는 선생님에 대한 거짓 이야기, 모욕 등 퍼뜨리지 않기" story="선생님에 대한 유언비어, 비방, 모욕적인 별명 등을 퍼뜨리는 건 엄연한 명예훼손입니다. 선생님의 명예와 자존감 역시 소중하니, 꼭 조심하여 존중해 주세요."></Protect>
        <div style={{fontStyle:"italic"}}>출처 : 대한민국 교육부</div>
      </div>
    );
  }

export default Respect;