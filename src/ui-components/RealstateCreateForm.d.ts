/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RealstateCreateFormInputValues = {
    description?: string;
    type?: string;
    streetAddress?: string;
    city?: string;
    country?: string;
    zipcode?: number;
    price?: number;
    area?: number;
    bedrooms?: number;
    bathrooms?: number;
    images?: string[];
};
export declare type RealstateCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    streetAddress?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    zipcode?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    area?: ValidationFunction<number>;
    bedrooms?: ValidationFunction<number>;
    bathrooms?: ValidationFunction<number>;
    images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RealstateCreateFormOverridesProps = {
    RealstateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    streetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<TextFieldProps>;
    bedrooms?: PrimitiveOverrideProps<TextFieldProps>;
    bathrooms?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RealstateCreateFormProps = React.PropsWithChildren<{
    overrides?: RealstateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RealstateCreateFormInputValues) => RealstateCreateFormInputValues;
    onSuccess?: (fields: RealstateCreateFormInputValues) => void;
    onError?: (fields: RealstateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RealstateCreateFormInputValues) => RealstateCreateFormInputValues;
    onValidate?: RealstateCreateFormValidationValues;
} & React.CSSProperties>;
export default function RealstateCreateForm(props: RealstateCreateFormProps): React.ReactElement;
