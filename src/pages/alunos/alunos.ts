import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {
  alunos: FirebaseListObservable<any[]>;
  pronto: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.pronto = false;
    this.alunos = db.list('/alunos');
    this.alunos.subscribe(() => {
      this.pronto = true;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunosPage');
  }

  adicionarAluno(){
    this.navCtrl.push('AlunoCriarPage');
  }

  detalhe(aluno){
    this.navCtrl.push('AlunoDetalhePage', {aluno: aluno});
  }

}
