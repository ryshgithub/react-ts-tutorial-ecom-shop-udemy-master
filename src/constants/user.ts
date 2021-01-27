export type CustomerInformationField = 'completeName' | 'address' | 'city' | 'stateOrProvince' | 'mobileNo';

export type CustomerInformationFieldsList = {
    [field in CustomerInformationField]: string;
};

export const CUSTOMER_INFORMATION_FIELDS_LIST: CustomerInformationFieldsList = {
    completeName: 'Complete Name (LastName, FirstName M.I.)',
    address: 'Address (House #, Lot, Blk, Street)',
    city: 'City',
    stateOrProvince: 'State/Province',
    mobileNo: 'Mobile #',
}

export const CUSTOMER_INFORMATION_FIELD_WIDTH = 'Calc(100% - 20px)';

export const CUSTOMER_INFORMATION_FIELD_ERROR = 'Please complete this field.';

export const CUSTOMER_INFORMATION_FIELD_INITIAL_STATE: CustomerInformationFieldsList = {
    completeName: '',
    address: '',
    city: '',
    stateOrProvince: '',
    mobileNo: '',
};