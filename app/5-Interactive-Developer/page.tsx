import StyledContent from "./style";
import { MotionDiv, MotionH1, MotionSpan } from "@/framer";

export const generateMetadata = () => {
  return {
    title: "인터랙티브 디벨로퍼",
    description: "김종민의 인터랙티브 디벨로퍼를 읽고",
    openGraph: {
      type: "website",
      url: "https://pt.d3h1.com",
      title: "인터랙티브 디벨로퍼",
      description: "김종민의 인터랙티브 디벨로퍼를 읽고",
      siteName: "d3h1 Presentation",
      images: [{
        url: "/5-Interactive-Developer-Cover.jpg",
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://pt.d3h1.com",
      title: "인터랙티브 디벨로퍼",
      description: "김종민의 인터랙티브 디벨로퍼를 읽고",
      images: [{
        url: "/5-Interactive-Developer-Cover.jpg",
      }],
    },
  }
}

const BookInteractiveDeveloper = () => (
  <StyledContent>
    <section className="first">
      <div className="first-container">
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          I
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          N
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          T
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          E
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          R
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          A
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          C
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          T
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          I
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          V
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          E
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          D
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          E
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          V
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          E
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          L
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          O
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          P
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          E
        </MotionSpan>
        <MotionSpan
          transition={{ type: "spring", stiffness: 10 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        >
          R
        </MotionSpan>
        <div className="title">
          <MotionH1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            나는 학업에 집중하기로 했다.
          </MotionH1>
        </div>
      </div>
    </section>
    <section className="second">
      <MotionDiv
        className="second-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1>왜 이 책을 읽게 되었는가</h1>
        <p>예전에 유튜브 알고리즘을 통해 저자의 유튜브 영상을 접하게 되었는데 멋진 분이라고 생각했었는데 컨퍼런스에 갔다가 행사를 통해서 책을 지급받게 되었다.</p>
      </MotionDiv>
    </section>

    <section className="third">
      <MotionDiv
        className="third-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1>인터렉티브 디벨로퍼란?</h1>
        <p>사용자가 웹이나 애플리케이션을 사용시 사용자와 상호작용을 디자인하고 사용자에게 편리하고 효과적인 경험을 제공 할 수 있을지 생각하여 서비스를 구축하는 사람</p>
      </MotionDiv>
    </section>
    <section className="fourth">
      <MotionDiv
        className="fourth-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1>느낀점</h1>
        <p>
          고등학교만 졸업하였지만 디자인에 대한 열정으로 여기 저기 취업을 해보고 본인의 프로젝트를 더 열심히 하기 위해 개발까지 배우는 모습이 매우 인상 깊었음. 타국에 자신이 원하던 회사에도 취업하고 5대 IT 기업에 해당하는 구글에서도 멋진 기획들을 해 나가는게 존경스러웠다.

          나도 저런 사람이 되고 싶다는 생각이 들었고 그렇기 위해 열심히 개발을 해가고 있었는데 의문이 들었고 많은 사람들의 의견을 듣고 다 정리해서 나는 개발자가 되기로 했다. 하지만 지금은 개발일을 잠시 접고 공부를 열심히 하기로 했다.
        </p>
      </MotionDiv>
    </section>
  </StyledContent>
)

export default BookInteractiveDeveloper;