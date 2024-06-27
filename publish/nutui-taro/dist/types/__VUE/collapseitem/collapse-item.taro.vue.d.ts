import type { WithInstall } from '../../utils';
import { DownArrow } from '@nutui/icons-vue-taro';
export type CollapseItemProps = Partial<{
    title: string;
    value: string;
    label: string;
    disabled: boolean;
    name: string | number;
    border: boolean;
    icon: any;
    rotate: string | number;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    title: string;
    value: string;
    label: string;
    disabled: boolean;
    name: string | number;
    border: boolean;
    icon: any;
    rotate: string | number;
}>>, {
    title: string;
    value: string;
    label: string;
    disabled: boolean;
    name: number;
    border: boolean;
    icon: () => typeof DownArrow;
    rotate: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    title: string;
    value: string;
    label: string;
    disabled: boolean;
    name: string | number;
    border: boolean;
    icon: any;
    rotate: string | number;
}>>, {
    title: string;
    value: string;
    label: string;
    disabled: boolean;
    name: number;
    border: boolean;
    icon: () => typeof DownArrow;
    rotate: number;
}>>>, {
    name: string | number;
    disabled: boolean;
    label: string;
    title: string;
    icon: any;
    border: boolean;
    rotate: string | number;
    value: string;
}, {}>, {
    title?(_: {}): any;
    value?(_: {}): any;
    icon?(_: {}): any;
    extra?(_: {}): any;
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutCollapseItem: typeof _default;
    }
}
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
