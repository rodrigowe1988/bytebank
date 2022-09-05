import { Component, OnInit, Input } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.service.transferencias;
  }
}
