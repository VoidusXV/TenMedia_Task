interface ISubmitContainer {
    onCancel?: any;
    onUpdate?: any;
    onCreate?: any;
    state?: any;
    Modell?: number;
}
interface IManageDetailsContainer {
    Title?: string;
    onChange?: any;
    TextValue?: string;
}

export type { ISubmitContainer, IManageDetailsContainer };
