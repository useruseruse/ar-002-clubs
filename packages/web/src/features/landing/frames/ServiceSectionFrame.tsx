"use client";

// import SectionTitle from "@sparcs-clubs/web/common/components/SectionTitle";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import paths from "@sparcs-clubs/web/constants/paths";
import MoreSectionTitle from "../components/MoreSectionTitle";
import ServiceCard from "../components/ServiceCard";

const ServiceSectionFrameInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 20px;
`;

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 24px;
`;

const ServiceSectionFrame: React.FC = () => (
  <ServiceSectionFrameInner>
    <MoreSectionTitle title="서비스 신청" showMore={false} />
    <ServiceCardWrapper>
      <Link
        href={paths.HOME.path} /* TODO - 올바른 path로 수정 바람 */
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ServiceCard serviceTitle="대여 사업" serviceLink="" />
      </Link>
      <Link
        href={paths.HOME.path} /* TODO - 올바른 path로 수정 바람 */
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ServiceCard serviceTitle="홍보물 인쇄" serviceLink="" />
      </Link>
      <Link
        href={paths.HOME.path} /* TODO - 올바른 path로 수정 바람 */
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ServiceCard serviceTitle="활동확인서 발급 신청" serviceLink="" />
      </Link>
      <Link
        href={paths.HOME.path} /* TODO - 올바른 path로 수정 바람 */
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ServiceCard serviceTitle="공용공간 비정기사용신청" serviceLink="" />
      </Link>
    </ServiceCardWrapper>
  </ServiceSectionFrameInner>
);

export default ServiceSectionFrame;
