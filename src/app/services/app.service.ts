import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  constructor() {
  }

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
