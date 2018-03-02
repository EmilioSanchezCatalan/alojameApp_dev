/**
 * interface witch set the format of the fileds and their names;
 */
export interface FormErrorInfo {
  errorsInfo: Array<{
    fieldName: string;
    nameShow: string;
  }>;
}
