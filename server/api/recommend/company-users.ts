import type { IncomingMessage, ServerResponse } from 'http'
import { User } from '../users'

export interface CompanyUser {
  user: User;
  company: Company;
}
export interface Company {
  id: number;
  name: string;
}

export default (req: IncomingMessage, res: ServerResponse) => {
  // const result: CompanyUser[] = await $fetch('https://jsonplaceholder.typicode.com/company-users')
  const result: CompanyUser[] = [
    {
      user: {
        id: 36456,
        name: 'hjm9652',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        keireki: [{
          geneki: true,
          years: 18,
          role: '部長',
          kibo: 1000
        },],
        attr: {
          age: 89,
          sex: '男',
          memo: '私はこれまで人事領域で仕事をしてきました。以下に経歴を示します。\n- 採用\n- 評価制度\n- 研修\n- 人材開発\n- 組織開発\n- 相談役'
        }
      },
      company:{
        id: 347902,
        name: 'カネカ北川製茶'
      } 
    },
    {
      user: {
        id: 36456,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'hjm9652',
        keireki: [{
          geneki: true,
          years: 18,
          role: '部長',
          kibo: 1000
        },],
        attr: {
          age: 89,
          sex: '男',
          memo: '私はこれまで人事領域で仕事をしてきました。以下に経歴を示します。\n- 採用\n- 評価制度\n- 研修\n- 人材開発\n- 組織開発\n- 相談役'
        }
      },
      company:{
        id: 347902,
        name: 'カネカ北川製茶'
      } 
    },
    {
      user: {
        id: 36456,
        name: 'hjm9652',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        keireki: [{
          geneki: true,
          years: 18,
          role: '部長',
          kibo: 1000
        },],
        attr: {
          age: 89,
          sex: '男',
          memo: '私はこれまで人事領域で仕事をしてきました。以下に経歴を示します。\n- 採用\n- 評価制度\n- 研修\n- 人材開発\n- 組織開発\n- 相談役'
        }
      },
      company:{
        id: 347902,
        name: 'カネカ北川製茶'
      } 
    }];
  return result
}