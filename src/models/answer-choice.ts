export interface Answer {
    files: Object;
    provider: StackValue;
    overwrite?: boolean;
}

export interface Choice {
    name: string,
    value: StackValue |
           FrameworkChoiceValue |
           PlatformChoiceValue |
           InfrastructureChoiceValue;
}

export enum StackValue {
    DEFAULT = 'DEFAULT',
    README = 'README',
    CHECKLIST = 'CHECKLIST',
    STACK1 = '1 - JAM',
    STACK2 = '2 - MEAN',
    STACK3 = '3 - RAILS',
    STACK4 = '4 - LAMP',
}

export enum FrameworkChoiceValue {
    FRAMEWORK_ANDROID_SDK = 'ANDROID_SDK',
    FRAMEWORK_COCOA_TOUCH = 'COCOA_TOUCH',
    FRAMEWORK_FLUTTER = 'FLUTTER',
    FRAMWORK_REACT = 'REACT_NATIVE',
    FRAMWORK_ANGULAR = 'ANGULAR'
}


export enum PlatformChoiceValue {
    PLATFORM_ANDROID = 'ANDROID',
    PLATFORM_IOS = 'IOS',
    PLATFORM_WEB = 'WEB'
}

export enum InfrastructureChoiceValue {
    INFRASTRUCTURE_GCP = 'GCP',
    INFRASTRUCTURE_AWS = 'AWS'
}

