import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "@sparcs-clubs/web/common/components/Card";
import Typography from "@sparcs-clubs/web/common/components/Typography";
import Info from "@sparcs-clubs/web/common/components/Info";
import ItemButtonList from "@sparcs-clubs/web/features/rental-business/components/ItemButtonList";
import SelectRangeCalendar from "@sparcs-clubs/web/features/rental-business/components/SelectRangeCalendar/SelectRangeCalendar";
import Easel from "@sparcs-clubs/web/features/rental-business//components/Rentals/Easel";
import Vacuum from "@sparcs-clubs/web/features/rental-business//components/Rentals/Vacuum";
import HandCart from "@sparcs-clubs/web/features/rental-business//components/Rentals/HandCart";
import Mat from "@sparcs-clubs/web/features/rental-business//components/Rentals/Mat";
import Tool from "@sparcs-clubs/web/features/rental-business//components/Rentals/Tool";
import RentalList from "@sparcs-clubs/web/features/rental-business/components/RentalList";
import TextButton from "@sparcs-clubs/web/common/components/TextButton";
import { RentalFrameProps } from "../RentalNoticeFrame";
import { mockExistDates } from "./_atomic/mockExistDate";

const StyledCard = styled(Card)<{ type: string }>`
  padding: 32px;
  gap: 40px;
  align-self: stretch;
`;

const StyledCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const ResetTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;

const FlexGrowTypography = styled.div`
  flex-grow: 1;
`;

const NoneRental: React.FC<RentalFrameProps> = () => <>none</>;

const rentals = {
  none: {
    info: "대충 대여 기간 먼저 선택해야 한다는 안내문구 어딘가에",
    component: NoneRental,
  },
  easel: {
    info: "대충 이젤에 대한 추가 안내사항",
    component: Easel,
  },
  vacuum: {
    info: "대충 청소기에 대한 추가 안내사항",
    component: Vacuum,
  },
  handCart: {
    info: "대충 수레에 대한 추가 안내사항",
    component: HandCart,
  },
  mat: {
    info: "대충 돗자리에 대한 추가 안내사항",
    component: Mat,
  },
  tool: {
    info: "대충 공구에 대한 추가 안내사항",
    component: Tool,
  },
};
const RentalInfoSecondFrame: React.FC<
  RentalFrameProps & { setNextEnabled: (enabled: boolean) => void }
> = ({ rental, setRental, setNextEnabled }) => {
  const [value, setValue] = useState<
    "none" | "easel" | "vacuum" | "handCart" | "mat" | "tool"
  >("none");

  const Rental = rentals[value].component;
  const props = { rental, setRental };

  const [rentalDate, setRentalDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();

  const handleDatesChange = (
    rentalDateFromCal: Date | undefined,
    returnDateFromCal: Date | undefined,
  ) => {
    setRentalDate(rentalDateFromCal);
    setReturnDate(returnDateFromCal);
    setValue(!rentalDateFromCal || !returnDateFromCal ? "none" : value);
  };

  useEffect(() => {
    const enableNext = !(!rental.date?.start || !rental.date?.end);
    setNextEnabled(enableNext);
  }, [rental, setNextEnabled]);
  // TODO: 선택된 물건 없을 때도 안 넘어가게 하기

  useEffect(() => {
    if (!rentalDate || !returnDate) {
      setValue("none");
      setRental({
        agreement: rental.agreement,
        info: rental.info,
      });
    } else {
      setRental({
        ...rental,
        date: { start: rentalDate, end: returnDate },
      });
    }
  }, [
    rentalDate,
    returnDate,
    setValue,
    setRental,
    rental.agreement,
    rental.info,
  ]);
  // TODO: 대여 기간 초기화할 때 modal 띄우는거 추가

  const itemOnChange = (
    newValue: "easel" | "vacuum" | "handCart" | "mat" | "tool",
  ) => {
    if (rentalDate && returnDate) {
      setValue(newValue);
    }
  };

  const isRentalListEmpty = () =>
    !rental.easel &&
    !rental.vacuum &&
    (!rental.handCart || Object.values(rental.handCart).every(val => !val)) &&
    !rental.mat &&
    (!rental.tool || Object.values(rental.tool).every(val => !val));

  const isCurrentItemEmpty = () => {
    switch (value) {
      case "easel":
        return !rental.easel;
      case "vacuum":
        return !rental.vacuum;
      case "handCart":
        return (
          !rental.handCart || Object.values(rental.handCart).every(val => !val)
        );
      case "mat":
        return !rental.mat;
      case "tool":
        return !rental.tool || Object.values(rental.tool).every(val => !val);
      default:
        return true;
    }
  };

  const handleResetAll = () => {
    setRental({
      agreement: rental.agreement,
      info: rental.info,
      date: { start: rental.date?.start, end: rental.date?.end },
    });
  };

  const handleResetCurrent = () => {
    setRental(prevRental => ({
      ...prevRental,
      [value]: undefined,
    }));
  };

  return (
    <>
      <StyledCard type="outline">
        <Typography type="h3">대여 기간 선택</Typography>
        <SelectRangeCalendar
          onDatesChange={handleDatesChange}
          workDates={mockExistDates}
        />
      </StyledCard>
      <ItemButtonList value={value} onChange={itemOnChange} rental={rental} />
      <Info text={rentals[value].info} />
      {value !== "none" && (
        <StyledCard type="outline">
          <StyledCardInner>
            <ResetTitleWrapper>
              <FlexGrowTypography>
                <Typography type="h3">세부 물품 정보</Typography>
              </FlexGrowTypography>
              <TextButton
                text="초기화"
                disabled={isCurrentItemEmpty()}
                onClick={handleResetCurrent}
              />
            </ResetTitleWrapper>
            <Rental {...props} />
          </StyledCardInner>
        </StyledCard>
      )}
      <StyledCard type="outline">
        <StyledCardInner>
          <ResetTitleWrapper>
            <FlexGrowTypography>
              <Typography type="h3">대여 물품 목록</Typography>
            </FlexGrowTypography>
            <TextButton
              text="초기화"
              disabled={isRentalListEmpty()}
              onClick={handleResetAll}
            />
          </ResetTitleWrapper>
          <RentalList rental={rental} />
        </StyledCardInner>
      </StyledCard>
    </>
  );
};

export default RentalInfoSecondFrame;
