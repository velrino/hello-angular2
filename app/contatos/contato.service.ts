import { Injectable } from '@angular/core';

import { Contato } from './contato.model';
import { CONTATOS } from './contato-mock';

@Injectable(

)
export class ContatoService {

    getContatos() : Contato[]{
        return CONTATOS;
    }
}