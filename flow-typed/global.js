// @flow

// TODO - substitute faux enums for union type

declare type DeviceEnumType = 'DESKTOP' | 'TABLET' | 'MOBILE';

declare type RouterProps = {
    match: any,
    location: any,
    history: any
};

declare type RouteType = {
    path: string,
    component: React.ElementType,
    exact: boolean
  };
