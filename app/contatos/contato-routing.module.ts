import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';

import { ContatosDetalheComponent } from './contato-detalhe.component';
import { ContatosListaComponent } from './contatos-lista.component';

const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosListaComponent,
    },
    {
        path: 'contato/save',
        component: ContatosDetalheComponent,
    },
    {
        path: 'contato/save/:id',
        component: ContatosDetalheComponent,
    }
];

@NgModule({
    imports : [
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [RouterModule]
})

export class ContatoRoutingModule {}