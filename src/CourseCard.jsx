import styled from "styled-components";
import Chart from "./icons/chart.jsx";
import Computer from "./icons/computer.jsx";
import Calendar from "./icons/calendar.jsx";

const Container = styled.div`
  background-color: white;
  border: 1px solid #f0f1f3;
  border-radius: 8px;
  width: 296px;
  height: 407px;
  box-sizing: border-box;
  padding: 28px 24px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Tags = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #5d59ad;
  margin-bottom: 8px;
`;

const Title = styled.h5`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #151618;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  line-height: 20px;
`;

const DividerLine = styled.div`
  width: 296px;
  height: 1px;
  background-color: #ececec;
  position: absolute;
  left: 0;
  bottom: 64px;
`;

const CostWrapper = styled.div`
  margin-top: 44px;
  display: flex;
  align-items: flex-end;
`;

const CurrentCost = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #151618;
`;

const OriginalCost = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #a8a9ab;
  margin-left: 8px;
`;

const DiscountPercentile = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #f94669;
  margin-left: auto;
`;

const CostFree = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #34ab53;
  margin-top: 44px;
`;

const TextsWrapper = styled.div`
  margin-top: auto;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  + div {
    margin-top: 8px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #7d7e80;
  margin-left: 8px;
`;

const Image = styled.img`
  position: absolute;
  right: 24px;
  bottom: 158px;
  width: 56px;
  height: 56px;
`;
const LanguagesWrapper = styled.div`
  margin-top: 24px;
  display: flex;
`;
function getColorByLang(lang) {
  if (lang === "?????????") return "#477DB1";
  if (lang === "HTML/CSS") return "#DE561D;";
  if (lang === "??????????????????") return "#F3CB39;";
}
const Language = styled.p`
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => getColorByLang(props.lang)};
  position: relative;
  padding: 4px 6px;
  + p {
    margin-left: 8px;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => getColorByLang(props.lang)};
    opacity: 0.2;
    border-radius: 2px;
  }
`;
CourseCard.defaultProps = {
  tags: ["??????1", "??????2"],
  title: "?????? ?????????",
  description: "?????????????????? ??????????????????? ??????????????? ?????? ????????? ???????????????.",
  isFree: false,
  currentCost: 42000,
  originalCost: 57000,
  discountPercentile: 35,
  level: "??????",
  classFormat: "?????????",
  duration: "?????????",
  imgUrl: "rabbit.png",
  languages: ["?????????", "HTML/CSS", "??????????????????"],
};

// styled component??? ??????????????? ????????????.
export default function CourseCard({
  tags,
  title,
  description,
  isFree,
  currentCost,
  originalCost,
  discountPercentile,
  level,
  classFormat,
  duration,
  imgUrl,
  languages,
}) {
  return (
    <Container>
      <Tags>{tags.join("???")}</Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TextsWrapper>
        <TextWrapper>
          <Chart />
          <Text>????????? : {level}</Text>
        </TextWrapper>
        <TextWrapper>
          <Computer />
          <Text>?????? : {classFormat}</Text>
        </TextWrapper>
        <TextWrapper>
          <Calendar />
          <Text>?????? : {duration}</Text>
        </TextWrapper>
      </TextsWrapper>
      <Image src={imgUrl} />
      <LanguagesWrapper>
        {languages.map((lang, idx) => {
          return (
            <Language key={`${lang}-${idx}-${title}`} lang={lang}>
              {lang}
            </Language>
          );
        })}
      </LanguagesWrapper>
      <DividerLine />
      {isFree ? (
        <CostFree>??????</CostFree>
      ) : (
        <CostWrapper>
          <CurrentCost>{currentCost.toLocaleString()}???</CurrentCost>
          <OriginalCost>{originalCost.toLocaleString()}???</OriginalCost>
          <DiscountPercentile>{discountPercentile}%</DiscountPercentile>
        </CostWrapper>
      )}
    </Container>
  );
}
