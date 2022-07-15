// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Challenge, Lesson, Course } = initSchema(schema);

export {
  Challenge,
  Lesson,
  Course
};