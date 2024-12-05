import { ReactElement, ReactNode } from 'react';

type ItemSelector = {
    index: number;
    zone?: string;
};

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
type FieldProps<ValueType = any, F = Field<any>> = {
    field: F;
    value: ValueType;
    id?: string;
    onChange: (value: ValueType, uiState?: Partial<UiState>) => void;
    readOnly?: boolean;
};

type ItemWithId = {
    _arrayId: string;
    _originalIndex: number;
};
type ArrayState = {
    items: ItemWithId[];
    openId: string;
};
type UiState = {
    leftSideBarVisible: boolean;
    rightSideBarVisible: boolean;
    itemSelector: ItemSelector | null;
    arrayState: Record<string, ArrayState | undefined>;
    componentList: Record<string, {
        components?: string[];
        title?: string;
        visible?: boolean;
        expanded?: boolean;
    }>;
    isDragging: boolean;
    viewports: {
        current: {
            width: number;
            height: number | "auto";
        };
        controlsVisible: boolean;
        options: Viewport[];
    };
    field: {
        focus?: string | null;
    };
};

type RenderFunc<Props extends {
    [key: string]: any;
} = {
    children: ReactNode;
}> = (props: Props) => ReactElement;
declare const overrideKeys: readonly ["header", "headerActions", "fields", "fieldLabel", "components", "componentItem", "outline", "puck", "preview"];
type OverrideKey = (typeof overrideKeys)[number];
type OverridesGeneric<Shape extends {
    [key in OverrideKey]: any;
}> = Shape;
type Overrides = OverridesGeneric<{
    fieldTypes: Partial<FieldRenderFunctions>;
    header: RenderFunc<{
        actions: ReactNode;
        children: ReactNode;
    }>;
    actionBar: RenderFunc<{
        label?: string;
        children: ReactNode;
    }>;
    headerActions: RenderFunc<{
        children: ReactNode;
    }>;
    preview: RenderFunc;
    fields: RenderFunc<{
        children: ReactNode;
        isLoading: boolean;
        itemSelector?: ItemSelector | null;
    }>;
    fieldLabel: RenderFunc<{
        children?: ReactNode;
        icon?: ReactNode;
        label: string;
        el?: "label" | "div";
        readOnly?: boolean;
        className?: string;
    }>;
    components: RenderFunc;
    componentItem: RenderFunc<{
        children: ReactNode;
        name: string;
    }>;
    iframe: RenderFunc<{
        children: ReactNode;
        document?: Document;
    }>;
    outline: RenderFunc;
    puck: RenderFunc;
}>;
type FieldRenderFunctions = Omit<{
    [Type in Field["type"]]: React.FunctionComponent<FieldProps<Extract<Field, {
        type: Type;
    }>> & {
        children: ReactNode;
        name: string;
    }>;
}, "custom"> & {
    [key: string]: React.FunctionComponent<FieldProps<any> & {
        children: ReactNode;
        name: string;
    }>;
};

type iconTypes = "Smartphone" | "Monitor" | "Tablet";
type Viewport = {
    width: number;
    height?: number | "auto";
    label?: string;
    icon?: iconTypes | ReactNode;
};

type Plugin = {
    overrides: Partial<Overrides>;
};

declare const createEmotionCachePlugin: (key: string) => Plugin;

export { createEmotionCachePlugin as default };
