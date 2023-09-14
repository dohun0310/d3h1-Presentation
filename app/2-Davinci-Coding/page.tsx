import StyledContent from "./style"
import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: "다빈치 코딩",
    description: "이철기, 최찬경의 다빈치 코딩을 읽고",
    openGraph: {
      type: "website",
      url: "https://pt.d3h1.com",
      title: "다빈치 코딩",
      description: "이철기, 최찬경의 다빈치 코딩을 읽고",
      siteName: "d3h1 Presentation",
      images: [{
        url: "/2-Davinci-Coding-Book-Cover.jpg",
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://pt.d3h1.com",
      title: "다빈치 코딩",
      description: "이철기, 최찬경의 다빈치 코딩을 읽고",
      images: [{
        url: "/2-Davinci-Coding-Book-Cover.jpg",
      }],
    },
  }
}

const BookDavinciCoding = () => (
  <StyledContent>
    <article className="first">
      <div className="text">
        <h1>다빈치 코딩</h1>
        <p>저자: 이철기, 최찬경</p>
      </div>
      <Image
        src="/2-Davinci-Coding-Book-Cover.jpg"
        alt="book cover image"
        width={310}
        height={450}
      />
    </article>
    <article className="second">
      <h1>선정 이유</h1>
      <p>
        {`'다빈치 코딩'이라는 파이썬 관련된 책과 이름이 똑같아서 똑같은 내용일 줄 알고`}
      </p>
    </article>
    <article className="thrid">
      <p>{`"코딩은 즐거운 인생의 도구이다. 인류가 탄생 할 때부터 코딩은 우리와 함께 했기 때문이다." - 다빈치 코딩, 프롤로그`}</p>
    </article>
    <article className="fourth">
      <h1>내용</h1>
      <p>
        코드는 코딩할 때뿐만 아니라, 바코드, QR코드도 코드다. 우리나라와 주변 국가들의 코딩 교육은 보여주기식이다. 다른 국가들은 영국, 핀란드, 이스라엘 등 다른 국가들은 제대로 된 코딩 교육과 컴퓨터 논리 교육을 받는다. 레오나르도 다빈치, 다윈, 에디슨, 반 고흐, 이순신도 모두 컴퓨터 논리를 사용해 문제를 해결해 나갔다.
      </p>
    </article>
    <article className="fifth">
      <h1>내가 기대했던 코딩이란</h1>
      <p>
        코딩은 사람이 컴퓨터에게 원하는 작업을 수행하도록 지시하기 위해 컴퓨터 프로그래밍 언어를 사용하여 명령을 작성하는 과정. 이러한 명령 또는 코드는 컴퓨터가 이해하고 실행할 수 있는 형식으로 작성되며, 컴퓨터는 이 코드를 해석하고 작성된 명령을 수행하는 것.
      </p>
    </article>
    <article className="sixth">
      <h1>프로그래머란</h1>
      <div>
        <Image
          src="/2-Davinci-Coding-Visual-Studio-Code.png"
          alt="Visual Studio Code image"
          width={300}
          height={300}
        />
        <Image
          src="/2-Davinci-Coding-Visual-Studio.png"
          alt="Visual Studio image"
          width={300}
          height={300}
        />
        <Image
          src="/2-Davinci-Coding-Xcode.png"
          alt="Xcode image"
          width={300}
          height={300}
        />
      </div>
    </article>
    <article className="seventh">
      <h1>감사합니다.</h1>
    </article>
  </StyledContent>
)

export default BookDavinciCoding;