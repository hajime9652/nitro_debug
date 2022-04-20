import type { IncomingMessage, ServerResponse } from 'http'
import { User } from './users'

export interface Content {
  id: string,
  actionFlag: boolean,
  exactly: number,
  interest: number,
  date: string,
  datetime: string,
  title: string,
  body: string,
  subbody?: string,
  community?: string,
  priority?: string,
  hashtag?: Hashtag[],

}

export interface Hashtag {
  id: number,
  tag: string,
}

export default () => {
  // const result: Content[] = await $fetch('https://jsonplaceholder.typicode.com/contents')
  const result: Content[] = [
    {
      id: '81614',
      actionFlag: true,
      exactly: 29,
      interest: 11,
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      title: 'What would you have done differently if you ran Jurassic Park?',
      body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
    },
    {
      id: '81614',
      actionFlag: true,
      exactly: 29,
      interest: 11,
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      title: 'What would you have done differently if you ran Jurassic Park?',
      body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
    },
    {
      id: '81614',
      actionFlag: true,
      exactly: 29,
      interest: 11,
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      title: 'What would you have done differently if you ran Jurassic Park?',
      body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
    },
    // More questions...
  ];
  return result
}

