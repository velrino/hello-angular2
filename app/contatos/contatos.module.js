"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var contatos_lista_component_1 = require("./contatos-lista.component");
var contato_detalhe_component_1 = require("./contato-detalhe.component");
var contato_routing_module_1 = require("./contato-routing.module");
var contato_service_1 = require("./contato.service");
var ContatosModule = (function () {
    function ContatosModule() {
    }
    return ContatosModule;
}());
ContatosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            contato_routing_module_1.ContatoRoutingModule
        ],
        declarations: [
            contatos_lista_component_1.ContatosListaComponent,
            contato_detalhe_component_1.ContatosDetalheComponent
        ],
        exports: [
            contatos_lista_component_1.ContatosListaComponent
        ],
        providers: [
            contato_service_1.ContatoService
        ]
    }),
    __metadata("design:paramtypes", [])
], ContatosModule);
exports.ContatosModule = ContatosModule;
//# sourceMappingURL=contatos.module.js.map