import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChallengeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LessonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Challenge {
  readonly id: string;
  readonly question?: string | null;
  readonly answer?: boolean | null;
  readonly lessonID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Challenge, ChallengeMetaData>);
  static copyOf(source: Challenge, mutator: (draft: MutableModel<Challenge, ChallengeMetaData>) => MutableModel<Challenge, ChallengeMetaData> | void): Challenge;
}

export declare class Lesson {
  readonly id: string;
  readonly title?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly Challenges?: (Challenge | null)[] | null;
  readonly courseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Lesson, LessonMetaData>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson, LessonMetaData>) => MutableModel<Lesson, LessonMetaData> | void): Lesson;
}

export declare class Course {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly slug?: string | null;
  readonly Lessons?: (Lesson | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Course, CourseMetaData>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course, CourseMetaData>) => MutableModel<Course, CourseMetaData> | void): Course;
}