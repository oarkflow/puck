import { ReactElement } from 'react';
import { BaseEntry, ContentfulClientApi } from 'contentful';
export { createClient } from 'contentful';

type FieldOption = {
    label: string;
    value: string | number | boolean;
};
type FieldOptions = Array<FieldOption> | ReadonlyArray<FieldOption>;
type BaseField = {
    label?: string;
};
type TextField = BaseField & {
    type: "text";
};
type NumberField = BaseField & {
    type: "number";
    min?: number;
    max?: number;
};
type TextareaField = BaseField & {
    type: "textarea";
};
type SelectField = BaseField & {
    type: "select";
    options: FieldOptions;
};
type RadioField = BaseField & {
    type: "radio";
    options: FieldOptions;
};
type ArrayField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "array";
    arrayFields: {
        [SubPropName in keyof Props[0]]: Field<Props[0][SubPropName]>;
    };
    defaultItemProps?: Props[0];
    getItemSummary?: (item: Props[0], index?: number) => string;
    max?: number;
    min?: number;
};
type ObjectField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "object";
    objectFields: Props extends any[] ? never : {
        [SubPropName in keyof Props]: Field<Props[SubPropName]>;
    };
};
type Adaptor<AdaptorParams = {}, TableShape extends Record<string, any> = {}, PropShape = TableShape> = {
    name: string;
    fetchList: (adaptorParams?: AdaptorParams) => Promise<TableShape[] | null>;
    mapProp?: (value: TableShape) => PropShape;
};
type ExternalFieldWithAdaptor<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "external";
    placeholder?: string;
    adaptor: Adaptor<any, any, Props>;
    adaptorParams?: object;
    getItemSummary: (item: Props, index?: number) => string;
};
type ExternalField<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = BaseField & {
    type: "external";
    placeholder?: string;
    fetchList: (params: {
        query: string;
        filters: Record<string, any>;
    }) => Promise<any[] | null>;
    mapProp?: (value: any) => Props;
    mapRow?: (value: any) => Record<string, string | number | ReactElement>;
    getItemSummary?: (item: Props, index?: number) => string;
    showSearch?: boolean;
    renderFooter?: (props: {
        items: any[];
    }) => ReactElement;
    initialQuery?: string;
    filterFields?: Record<string, Field>;
    initialFilters?: Record<string, any>;
};
type CustomField<Props extends any = {}> = BaseField & {
    type: "custom";
    render: (props: {
        field: CustomField<Props>;
        name: string;
        id: string;
        value: Props;
        onChange: (value: Props) => void;
        readOnly?: boolean;
    }) => ReactElement;
};
type Field<Props extends any = any> = TextField | NumberField | TextareaField | SelectField | RadioField | ArrayField<Props extends {
    [key: string]: any;
} ? Props : any> | ObjectField<Props extends {
    [key: string]: any;
} ? Props : any> | ExternalField<Props extends {
    [key: string]: any;
} ? Props : any> | ExternalFieldWithAdaptor<Props extends {
    [key: string]: any;
} ? Props : any> | CustomField<Props>;

type Entry<Fields extends Record<string, any> = {}> = BaseEntry & {
    fields: Fields;
};
declare function createFieldContentful<T extends Entry = Entry>(contentType: string, options?: {
    client?: ContentfulClientApi<undefined>;
    space?: string;
    accessToken?: string;
    titleField?: string;
    filterFields?: ExternalField["filterFields"];
    initialFilters?: ExternalField["initialFilters"];
}): ExternalField<T>;

export { type Entry, createFieldContentful, createFieldContentful as default };
