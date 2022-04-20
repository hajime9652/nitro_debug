import type { IncomingMessage, ServerResponse } from 'http'
import { Content } from '../contents'

// export interface Content {
//   id: string,
//   type: string,
//   likes: string,
//   replies: string,
//   views: string,
//   author?: User,
//   date: string,
//   datetime: string,
//   href: string,
//   title: string,
//   body: string,
//   subbody?: string,
// }

export default async (req: IncomingMessage, res: ServerResponse) => {
  // const result: Content[] = await $fetch('https://jsonplaceholder.typicode.com/contents')
  const result:Content[] = [
    {
      id: "1",
      actionFlag: true,
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      community: '製造業',
      priority: '損失防ぐ',
      hashtag: [{id:222, tag:'工場と交渉'},{id:222, tag:'取引先に謝罪案件'}],
      title: '部下が納期の調整に失敗',
      body: '工場の意見をそのまま取引先に伝え、どっちの味方なのかと怒らせてしまった。',
      exactly: 5,
      interest: 14,
      comment: '辛かった',
    },
    {
      id: "2",
      actionFlag: false,
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      community: '製造業',
      priority: '納期優先',
      hashtag: [{id:222, tag:'工場と交渉'},{id:222, tag:'取引先に謝罪案件'}],
      title: '部下が納期の調整に失敗',
      body: '工場の意見をそのまま取引先に伝え、どっちの味方なのかと怒らせてしまった。',
      exactly: 564,
      interest: 3304,
      comment: '辛かった',
    },
    {
      id: '81614',
      actionFlag: true,
      exactly: 29,
      interest: 11,
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      community: '製造業',
      priority: '納期優先',
      hashtag: [{id:222, tag:'工場と交渉'},{id:222, tag:'取引先に謝罪案件'}],
      comment: '辛かった',
      title: '言語生成エンジンのマーケット切り開けなかった。',
      body: `
        <p>音声認識のコアエンジンの開発を行なっていて、言語生成もやってみた。</p>
        <p>しかし、言語生成にマーケットはなく売り上げが立たなかった。</p>
      `,
      subbody:'機械学習のプロダクトはシステムに組み込めるかどうかがポイント。既存のシステムのマーケットの大きさが大事。言語生成とかはシステムがないから微妙。音声認識はCTIがあるから大きい。',
    },
    // More posts...
  ];

  return result
}