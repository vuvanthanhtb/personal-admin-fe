import { BOOLEAN, NUMBER, STRING } from "../constants";

const mappingRequestMapper: Record<string, any> | null = (model: any[], data: any) => {
  if (!data) {
    return null;
  }

  const parsedData: { [key: string]: any } = {};
  model.forEach((item) => {
    const clientData = data[item.client];
    const serviceKey = item.service;
    if (clientData) {
      if (item.type === STRING) {
        parsedData[serviceKey] = clientData;
      } else if (item.type === NUMBER) {
        parsedData[serviceKey] = Number(clientData);
      } else if (item.type === BOOLEAN) {
        parsedData[serviceKey] = Boolean(clientData);
      }
    } else {
      if (item.isRequired) {
        throw new Error(`Thiếu trường: ${item.client} trong dữ liệu yêu cầu`);
      }
    }
  });
  return parsedData;
};

export default mappingRequestMapper;
