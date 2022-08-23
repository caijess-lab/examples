import { Injectable } from '@angular/core';
import { catchError, combineLatest, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RxjsBaseService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  todos$ = this.http.get<Todo[]>(this.todosUrl).pipe(
    tap((data) => {
      console.log('TodoService : ');
      console.log(JSON.stringify(data[0]));
    }),
    catchError(() => of([]))
  );

  users$ = this.http.get<User[]>(this.usersUrl).pipe(
    tap((data) => {
      data.length = 10;
    }),
    catchError(() => of([]))
  );

  posts$ = this.http.get<Post[]>(this.postsUrl).pipe(
    tap((data) => {
      console.log(JSON.stringify(data[0]));
      data.length = 6;
    }),
    catchError(() => of([]))
  );

  comments$ = this.http.get<Post[]>(this.commentsUrl).pipe(
    tap((data) => {
      console.log(JSON.stringify(data[0]));
    }),
    catchError(() => of([]))
  );

  // combinaison des users dans todos
  todosWithUsers$ = combineLatest([this.todos$, this.users$]).pipe(
    map(([todos, users]) => {
      return todos.map(
        (t) =>
          ({
            ...t,
            userId: (<any>users).find((u: any) => t.userId === u.id).name,
          } as unknown as Todo)
      );
    }),
    tap((data) => console.table(data))
  );

  // on veut ranger chaque todos par user
  usersWithTodos$ = combineLatest([this.users$, this.todos$]).pipe(
    map(([users, todos]) => {
      return users.map(
        (u) =>
          ({
            ...u,
            todos: todos.filter((t) => t.userId === u.id),
          } as unknown as User)
      );
    }),
    tap((data) => {
      console.log('test');
      console.table(data);
    })
  );

  postsWithComments$ = combineLatest([this.posts$, this.comments$]).pipe(
    map(([posts, comments]) => {
      return posts.map(
        (p) =>
          ({
            ...p,
            comments: comments.filter((c) => c.postId === p.id),
          } as unknown as Post)
      );
    })
  );

  // on veut ranger chaque todos par user et ajouter leurs posts
  usersWithTodosAndPosts$ = combineLatest([
    this.usersWithTodos$,
    this.posts$,
  ]).pipe(
    map(([usersTodos, posts]) => {
      return usersTodos.map(
        (u) =>
          ({
            ...u,
            posts: posts.filter((p) => p.userId === u.id),
          } as unknown as User)
      );
    }),
    tap((data) => {
      console.log('posts');
      console.table(data);
    })
  );

  // todos, posts et comments par user
  usersWithTodosAndPostsAndComments$ = combineLatest([
    this.usersWithTodos$,
    this.postsWithComments$,
  ]).pipe(
    map(([usersTodos, postsComments]) => {
      return usersTodos.map(
        (u) =>
          ({
            ...u,
            posts: postsComments.filter((p) => p.userId === u.id),
          } as unknown as User)
      );
    }),
    tap((data) => {
      console.log('comments');
      console.table(data[0].posts[0].comments);
    })
  );

  menus = [
    {
      title: 'Accueil',
      url: '/accueil',
      color: '#ffffff',
    },
    {
      title: 'Liste des tâches',
      url: '/todos',
      color: '#AAB1E0',
    },
    {
      title: 'Liste des utilisateurs',
      url: '/users',
      color: '#A1C9DA',
    },
    {
      title: 'Liste des tâches par utilisateurs',
      url: '/todosWithUsers',
      color: '#EAFAB5',
    },
    {
      title: 'Liste des utilisateurs par tâches',
      url: '/usersWithTodos',
      color: '#FAE896',
    },
    {
      title: 'Liste des utilisateurs avec tâches et articles',
      url: '/usersWithTodosAndPosts',
      color: '#FFDBBE',
    },
    {
      title: 'Liste des utilisateurs avec tâches, articles et commentaires',
      url: '/usersWithTodosAndPostsAndComments',
      color: '#FFCCBE',
    },
    {
      title: 'Tableau insertion de lignes',
      url: '/tableauinsert',
      color: '#F6D7E1',
    },
    {
      title: 'Boîte de dialogue',
      url: '/boiteDeDialogue',
      color: '#f7a1a4',
    },
  ];
}
