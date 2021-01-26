import React from 'react';
import { CustomerInformationField, CUSTOMER_INFORMATION_FIELDS_LIST, CUSTOMER_INFORMATION_FIELD_WIDTH } from '../../constants/user';
import { Button } from '../../ui-components/Button';
import { Input } from '../../ui-components/Input';
import { CustomerInformationProps, CustomerInformationState } from './interface';
import './style.css';

class CustomerInformation extends React.Component<CustomerInformationProps, CustomerInformationState> {
    handleInputOnChange = (field: CustomerInformationField) => () => {

    }

    renderInputFields = () => {
        return Object.keys(CUSTOMER_INFORMATION_FIELDS_LIST).map(field => {
            const customerInfoField = field as CustomerInformationField;
            const label = CUSTOMER_INFORMATION_FIELDS_LIST[customerInfoField];

            return (
                <Input
                    key={label}
                    inputContainerStyle={{ marginBottom: '10px' }}
                    inputStyle={{ width: CUSTOMER_INFORMATION_FIELD_WIDTH }}
                    label={label}
                    onChange={this.handleInputOnChange(customerInfoField)}
                />
            )
        })
    }

    render() {
        return (
            <div className="customer-info-container">
                <div className="heading">Billing Information</div>
                {this.renderInputFields()}
                <Button
                    style={{ width: CUSTOMER_INFORMATION_FIELD_WIDTH }}
                    type="primary"
                    onClick={()=>{}}
                    className="complete-purchase-btn"
                >
                    Complete Purchase
                </Button>
            </div>
        );
    }
}

export default CustomerInformation;