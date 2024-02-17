import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  ${(props) => props.theme.flexColumn("space-between", "center")}
  padding-bottom: 36px;
  position: relative;
`;

export const Picture = styled.img`
  width: 340px;
  height: 340px;
  position: absolute;
  object-fit: contain;
  top: 5%;
  right: 56%;
`;

export const LogoAndTitle = styled.div`
  height: 300px;
  ${(props) => props.theme.flexRow("end", "center")}
  width: 60%;
`;

export const TitleWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "start", 10)}
  z-index: 2;
  box-sizing: content-box;
  width: 60%;
`;

export const Ellipsis = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-decoration-color: white;
  color: white;
  text-align: start;
`;

export const CardTitle = styled(Ellipsis)`
  -webkit-line-clamp: 1;
  margin-bottom: 6px;
`;

export const CardContent = styled(Ellipsis)`
  -webkit-line-clamp: 2;
  line-height: 1.3;
`;

export const AlignWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 5)}
  z-index: 10;
`;
