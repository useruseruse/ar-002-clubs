"use client";

import React from "react";
import styled from "styled-components";

import NoticeListItem from "@sparcs-clubs/web/features/notices/components/NoticeListItem";
import type { NoticeInfo } from "@sparcs-clubs/web/features/notices/types/notice.type";

interface NoticeListProps {
  infos: Array<NoticeInfo>;
}

const NoticeListInner = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.GRAY[200]};
  display: flex;
  flex-direction: column;
`;

const NoticeListItemWrapper = styled.div`
  flex-grow: 1;
  min-height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY[200]};
  padding: 8px;
`;

const NoticeList: React.FC<NoticeListProps> = ({ infos }) => (
  <NoticeListInner>
    {infos.map(noticeInfo => (
      <NoticeListItemWrapper key={noticeInfo.id}>
        <NoticeListItem title={noticeInfo.title} date={noticeInfo.date} />
      </NoticeListItemWrapper>
    ))}
  </NoticeListInner>
);

export default NoticeList;
