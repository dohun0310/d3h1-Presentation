import StyledHome from "./style"
import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: "누워서 읽는 알고리즘",
    description: "임백준의 누워서 읽는 알고리즘을 읽고",
    openGraph: {
      type: "website",
      url: "https://pt.d3h1.com",
      title: "누워서 읽는 알고리즘",
      description: "임백준의 누워서 읽는 알고리즘을 읽고",
      siteName: "d3h1 pt",
      images: [{
        url: "/1-Algorithm-To-Read-Lying-Down-Book-Cover.jpeg",
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://pt.d3h1.com",
      title: "누워서 읽는 알고리즘",
      description: "임백준의 누워서 읽는 알고리즘을 읽고",
      images: [{
        url: "/1-Algorithm-To-Read-Lying-Down-Book-Cover.jpeg",
      }],
    },
  }
}

const BookAlgorithmToReadLyingDown = () => (
  <StyledHome>
    <article className="first">
      <div className="text">
        <h1>누워서 읽는 알고리즘</h1>
        <p>저자: 임백준</p>
      </div>
      <Image
        src="/1-Algorithm-To-Read-Lying-Down-Book-Cover.jpeg"
        alt="book cover image"
        width={300}
        height={100}
      />
    </article>
    <article className="second">
      <h1>알고리즘이란?</h1>
      <p>
        알고리즘은 문제를 해결하기 위한 명확하고 정확한 절차나 방법을 의미함. 이는 일련의 지시사항으로, 주어진 입력에서 예상된 출력을 생성하는 방법을 정의하는 것임.
    
        프로그래밍에서 알고리즘은 특정 작업을 수행하거나 데이터를 처리하는 데 사용되는 일련의 단계나 규칙들을 의미함. 즉, 컴퓨터가 특정 작업을 어떻게 수행해야 하는지 알려주는 지침과 같음.
      </p>
    </article>
    <article className="third">
      <h1>추천 이유</h1>
      <p>누워서 읽는 알고리즘이라는 책 제목처럼 누워서 부담 없이 넷플릭스를 보며 먹을 수 있는 맛있는 간단한 과자같은 책. 많은 알고리즘과 수학적 공식이 주가 되는 공부용 서적과는 다르게 알고리즘과 관련된 에피소드들을 포함해 복잡한 알고리즘 서적 때문에 알고리즘에 흥미를 느끼게 해줌. 특히 계속 독자에게 질문을 던지고 생각해보게 하는 과정이 꽤 흥미로웠음. 컴퓨터 앞에서 코딩을 해가며 머리를 쥐어짜며 읽는 알고리즘 책들에 피로감을 느끼게 된 사람들에게 추천해주고 싶음.</p>
    </article>
    <article className="fourth">
      <Image
        src="/1-Algorithm-To-Read-Lying-Down-AI-Img.jpg"
        alt="AI image"
        width={500}
        height={100}
      />
      <p>{`"이러한 탐색의 과정을 통해서 컴퓨터 자원을 효율적으로 사용할 수 있도록 하는 유익한 알고리즘이 개발되기도 하지만, 사람들이 이러한 탐색에 뛰어드는 동기에는 특별한 이유가 없다. 바로 그것이 재미있는 점이다. 사람들은 종종 '왜'라는 질문 앞에서 굳이 설명할 길이 없는 그런 일들을 위해서 삶을 바치기도 한다. 아무 대가가 없는데 모험으로 가득 찬 고난의 길을 스스로 떠난다." - 누워서 읽는 알고리즘, 74p`}</p>
    </article>
    <article className="fifth">
      <h1>감사합니다.</h1>
    </article>
  </StyledHome>
)


export default BookAlgorithmToReadLyingDown;
