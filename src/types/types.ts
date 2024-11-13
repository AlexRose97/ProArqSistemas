export interface ActivityType {
    title: string;
    description: string;
    duration: string;
    purpose: string;
}

export interface StageType {
    objective: string;
    activities: ActivityType[];
}

export interface TeachingSequenceType {
    introduction: StageType;
    desarrollo: StageType;
    cierre: StageType;
}

export interface SubjectType {
    title: string;
    currentSituation: string;
    code: number | string;
    improvements: string[];
    teachingSequence?: TeachingSequenceType;
}
