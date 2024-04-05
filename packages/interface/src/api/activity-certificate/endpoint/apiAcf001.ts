import { HttpStatusCode } from "axios";
import { z } from "zod";

/**
 * @version v0.1
 * @description 활동확인서 발급을 신청합니다
 */

const url = () => `/student/activity-certificates/activity-certificate`;
const method = "POST";

const requestParam = z.object({});

const requestQuery = z.object({});

const requestBody = z.object({
  clubId: z.number().int().min(1),
  studentNumber: z.number().int(),
  krPhoneNumber: z.string(),
  issuedNumber: z.number().int().min(1),
  items: z
    .object({
      startMonth: z.date(),
      endMonth: z.date(),
      detail: z.string().max(100),
    })
    .array(),
});

const responseBodyMap = {
  [HttpStatusCode.Created]: z.object({}),
};

const responseErrorMap = {};

const apiAcf001 = {
  url,
  method,
  requestParam,
  requestQuery,
  requestBody,
  responseBodyMap,
  responseErrorMap,
};

type ApiAcf001RequestParam = z.infer<typeof apiAcf001.requestParam>;
type ApiAcf001RequestQuery = z.infer<typeof apiAcf001.requestQuery>;
type ApiAcf001RequestBody = z.infer<typeof apiAcf001.requestBody>;
type ApiAcf001ResponseCreated = z.infer<
  (typeof apiAcf001.responseBodyMap)[201]
>;

export default apiAcf001;

export type {
  ApiAcf001RequestParam,
  ApiAcf001RequestQuery,
  ApiAcf001RequestBody,
  ApiAcf001ResponseCreated,
};