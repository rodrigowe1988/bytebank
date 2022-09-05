import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;
  constructor() {}

  ngOnInit(): void {}

  transferir(): void {
    console.log('Solicitada nova transferência...');
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
    this.limparCampos();
  }

  limparCampos() {
    this.valor = Number('');
    this.destino = Number('');
  }
}
