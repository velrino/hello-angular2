import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosListaComponent } from './contatos-lista.component';
import { ContatosDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoService } from './contato.service';

@NgModule({
    imports : [
        CommonModule,
        ContatoRoutingModule
    ],
    declarations : [
        ContatosListaComponent,
        ContatosDetalheComponent
    ],
    exports :
    [
        ContatosListaComponent
    ],
    providers :
    [
        ContatoService
    ]
})

export class ContatosModule 
{

}