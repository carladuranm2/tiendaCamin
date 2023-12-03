import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent  implements OnInit {
  constructor(private navCtrl: NavController) { }
  userEmail:String = "";
  password: any;
  ngOnInit() {}

  goHome(){
    if(this.userEmail === "carlosDuran" && this.password == 123){
      this.navCtrl.navigateRoot('/inici/inventory');
    }else if(this.userEmail === "cliente" && this.password == "cliente"){
      this.navCtrl.navigateRoot('/inici/dashboard');
    }else if(this.userEmail != "carlosDuran" && this.password != 123){
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Something went wrong!",
      //   footer: '<a href="#">Why do I have this issue?</a>'
      // });
    }
  }
}
